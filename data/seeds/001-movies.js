exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries and resets ids
    return knex('movies')
      .truncate()
      .then(function() {
        return knex('movies').insert([
          { title: 'Star Trek',  genre: 'Sci-Fy', releaseYear: 1964 },
          { title: 'Lord of the Rings',  genre: 'Epic', releaseYear: 1974 },
          { title: 'First Contact',  genre: 'Sci-Fy', releaseYear: 1984 },
          { title: 'Home Alone',  genre: 'Comedy', releaseYear: 1994 },
        ]);
      });
  };
  