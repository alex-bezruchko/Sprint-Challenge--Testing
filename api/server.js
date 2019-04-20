const express = require('express');
const server = express();
server.use(express.json());
const Movies = require('../movies/moviesModel.js');


server.get('/', async (req, res) => {
  res.status(200).json({ message: 'Movies api is up' });
});

server.get('/movies', async (req, res) => {
  const movies = await Movies.fetchAll();
  res.status(200).json(movies);
});

module.exports = server;
