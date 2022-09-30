const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");
const http = require('http');

class Modules {
  #app;
  #server;
  #port;

  constructor (modules, port, corsOptions) {
    this.#app = express()
    this.#port = port
    this.#app.use(cors(corsOptions))
    this.#server = http.createServer(this.#app);
    this.#app.use(bodyParser.json());
    this.#initializeRoutes(modules)
  }

  #initializeRoutes(modules) {
    modules.map((module) => {
      this.#app.use(module.router)
    })
  }

  listen() {
    this.#server.listen(this.#port, async () => {
      console.log(`App listening on the port ${this.#port}`);
    });
  }
}

module.exports = Modules