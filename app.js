const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');
const passport = require('passport');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const mongoose = require('mongoose');
const flash = require('express-flash');

const port = process.env.PORT || 8080;
const app = express();
const db = require('./models');

// Passport Config
require('./config/passport')(passport);

db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    app.listen(port, () => {
      console.log(`Database connected and server running on port ${port}.`);
    });
  })
  .catch((err) => {
    console.log('Cannot connect to the database.', err);
    process.exit();
  });

// Handlebars
app.engine('.hbs', exphbs.engine({ defaultLayout: 'main', extname: '.hbs' }));
app.set('view engine', '.hbs');

// Sessions (must be above passport middleware)
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.MONGODB_URI })
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Static folder
app.use(express.static(path.join(__dirname, 'public')));

app.use(flash());

// Routes
app
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
  })
  .use('/', require('./routes'))
  .use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send({
      error: {
        status: err.status || 500,
        message: err.message
      }
    });
  });

// Catch-all for logging errors in console
process.on('uncaughtException', (err, origin) => {
  console.log(process.stderr.fd, `Caught exception: ${err}\n` + `Exception origin: ${origin}`);
});
