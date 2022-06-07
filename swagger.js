const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'CSE 341 - GROUP 2 FINAL PROJECT',
    description: 'Mediatized'
  },
  // host: 'localhost:8080',
  host: 'cse341lmyersmediatized.herokuapp.com',

  // change the host and schemes to work on localhost. Change back before pushing your branch to make sure the heroku app works
  schemes: ['https'], //['https'],
  tags: [
    {
      name: 'Audio',
      description:
        'Operations for Audio Content include GET which returns all entries, POST which lets you add an entry, GET(by ID) which allows you to search for a specific entry based on an id created by the application, PUT which overwrites the information on an entry, DELETE which removes an entry from the database, and GET(by Title) which searches for a entry based on the title of the entry stored.'
    },
    {
      name: 'Video',
      description:
        'Operations for Video Content include GET which returns all entries, POST which lets you add an entry, GET(by ID) which allows you to search for a specific entry based on an id created by the application, PUT which overwrites the information on an entry, DELETE which removes an entry from the database, and GET(by Title) which searches for a entry based on the title of the entry stored.'
    },
    {
      name: 'Documents',
      description:
        'Operations for Documents Content include GET which returns all entries, POST which lets you add an entry, GET(by ID) which allows you to search for a specific entry based on an id created by the application, PUT which overwrites the information on an entry, DELETE which removes an entry from the database, and GET(by Title) which searches for a entry based on the title of the entry stored.'
    },
    {
      name: 'Photos',
      description:
        'Operations for Photos Content include GET which returns all entries, POST which lets you add an entry, GET(by ID) which allows you to search for a specific entry based on an id created by the application, PUT which overwrites the information on an entry, DELETE which removes an entry from the database, and GET(by Title) which searches for a entry based on the title of the entry stored.'
    },
    {
      name: 'Users',
      description:
        'Operations for Users include GET which returns all users,GET(by ID) which allows you to search for a specific entry based on an id created by the application, DELETE which removes an entry from the database, andGET(by Title) which searches for a entry based on the title of the entry stored.'
    }
  ],
  definitions: {
    Audio: {
      title: 'Sibbie',
      audioType: 'mp3',
      description: 'A song about Sibbie',
      link: 'https://www.youtube.com/shorts/ASm9cw8z1Ug',
      contributors: {
        performers: ['Strong Bad'],
        writers: ['The Brothers Chaps'],
        publishers: ['The Brothers Chaps']
      },
      releaseDate: '2003-06-09T06:00:00.000Z',
      lengthSeconds: 0.33
    },
    Video: {
      title: 'Song by Richard Paul Astley',
      videoType: 'mp4',
      description: 'A great song about love',
      link: 'https://youtu.be/dQw4w9WgXcQ',
      releaseDate: '2009-10-25T06:00:00.000Z',
      lengthSeconds: 3.32
    },
    Document: {
      title: 'Darth Vader - The Good Guy Who Lost',
      docType: 'eBook',
      description:
        'The arch villain of the Star Wars series, Darth Vader, has been grossly misrepresented by historians.',
      link: 'https://www.obooko.com/free-arts-media-entertainment-books/darth-vader-the-good-guy-who-lost',
      author: 'M S Lawson'
    },
    Photo: {
      title: 'Omaha Doorly Zoo Rain Forest',
      photoType: 'jpg',
      description: 'Rain forest exhibit at Omaha Doorly Zoo',
      link: 'https://bloximages.newyork1.vip.townnews.com/omaha.com/content/tncms/assets/v3/editorial/9/a5/9a56b441-f174-5cc7-9735-30b7296127a1/58dfb31eb52ae.image.jpg?crop=1567%2C1175%2C98%2C0&resize=840%2C630&order=crop%2Cresize',
      location: {
        longitude: '41.224842° N',
        latitude: '-95.92657° E'
      },
      dateTaken: '10-16-2019',
      photographer: 'Rebecca S. Gratz'
    }
  }
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./routes/index.js'];

/* NOTE: if you use the express Router, you must pass in the 
   'endpointsFiles' only the root file where the route starts,
   such as index.js, app.js, routes.js, ... */

swaggerAutogen(outputFile, endpointsFiles, doc);
