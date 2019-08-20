/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-process-env */

const Hapi = require('@hapi/hapi');

const PORT = process.env.PORT || 8000;

const init = async () => {

  const server = Hapi.server({
    port: PORT,
    host: 'localhost',
  });

  server.route([
    {
      method: 'GET',
      path: '/',
      handler: (request, handler) => {
        return 'Welcome to the Pet Store';
      },
    }, {
      method: 'GET',
      path: '/pet',
      handler: (request, handler) => {
        return {
          id: '123456789',
          name: 'Spot',
          photoUrl: 'www.cute.com',
          status: 'available',
        };
      },
    },
  ]);

  await server.start();
  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
