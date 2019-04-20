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
    const currentMovies = await Movies.fetchAll()
    const unique = currentMovies.map(movie => {
      movie.title !== newMovie.title
    })

    if (newMovie.title && newMovie.genre) {
      if (unique) {
        const movie = await Movies.insert(newMovie)
        res.status(201).json(movie);
      } else {
        res.status(405).json('Title is not unique.')
      }
    } else {
      res.status(422).json('Title and Genre are required.')
    }
});
module.exports = server;
