const http = require('http');
const next = require('next');

// Next.js қосымшасын өндірістік режимде инициализациялау
const nextApp = next({
  dev: false,
  dir: __dirname, // Жобаның түбірлік қалтасын көрсету
  customServer: true
});

const requestHandler = nextApp.getRequestHandler();

nextApp.prepare().then(() => {
  const server = http.createServer((req, res) => {
    requestHandler(req, res, req.url);
  });

  // Passenger портты өзі береді, бірақ біз оны environment variable арқылы аламыз
  const port = process.env.PORT || 3000;
  const host = process.env.HOSTNAME || '0.0.0.0';
  
  server.listen(port, host, () => {
    console.log('Next.js қосымшасы Passenger ортасында дайын');
  });
});