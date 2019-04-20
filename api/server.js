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

server.post('/movies', async (req, res) => {
    const newMovie = req.body;
    if (newMovie.title && newMovie.genre) {
      const movie = await Movies.insert(newMovie);
      res.status(201).json(movie);
    } else {
      res.status(422).json('Title and Genre are required.')
    }
});
module.exports = server;
