const UserRoutes = require('./users/routes') 
const Modules = require('./modules')

const port = 8080

var corsOptions = {
  origin: `http://localhost:${port}`
};

const app = new Modules(
  [
    UserRoutes,
  ],
  port,
  corsOptions
);

app.listen()
