const Movies = require('./moviesModel');
const db = require('../data/dbConfig');

describe('The Movies Model', () => {

    describe('The Insert Fn', () => {

        beforeEach(() => {
            return db('movies').truncate()
        })

        it('should add one movies and return array ', async () =>  {
            await Movies.insert({title: 'Lion King', genre: 'Cartoon'});
            const movies = await db('movies');
            expect(movies.length).toBe(1)
            expect(movies[0].title).toBe('Lion King')
            expect(movies[0].releaseYear).toBe(null)
        })

    })
})