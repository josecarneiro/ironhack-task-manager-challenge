const http = require('http');

const app = require('./app');

// app.use((req, res, next) => {
//   res.status(404);
//   res.send('Not found.');
// });

// app.use((err, req, res, next) => {
//   console.error('ERROR', req.method, req.path, err);
//   if (!res.headersSent) {
//     res.status(500);
//     res.send('Server error.');
//   }
// });

const server = http.createServer(app);

server.on('error', error => {
  if (error.syscall !== 'listen') { throw error }
  switch (error.code) {
    case 'EACCES':
      console.error(`Port ${process.env.PORT} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(`Port ${process.env.PORT}is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
});

const port = process.env.PORT || 5000;

server.listen(port, () => {
  console.log(`Listening on port ${ port }`);
});
