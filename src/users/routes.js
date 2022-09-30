const express = require('express');

class UserRoutes {
  router = express.Router();
  #path = ''

  constructor() {
    this.#initializeRoutes();
  }

  #initializeRoutes() {
    // router for user detail
    this.router.get(`${this.#path}`, async (req, res) => {
      res.send("Hello Ervin")
    })
  }
}

module.exports = new UserRoutes()