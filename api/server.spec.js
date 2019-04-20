const server = require('./server.js');
const db = require('../data/dbConfig');
const request = require('supertest');

describe('the server', () => {
    beforeEach(() => {
        return db('movies').truncate()
    })
    describe('the environment', () => {
        it('should set setting for the environment', () => {
            const env = process.env.DB_ENV

            expect(env).toBe('testing')
        })
    })
    describe('GET /', () => {
        it('should return status 200', async () => {
            const res = await request(server).get('/');
            expect(res.status).toBe(200);
        })
        it('should return json', async () => {
            const res = await request(server).get('/');
            expect(res.type).toBe('application/json');
        })
        it('should return { message: "Movies api is up"}', async () => {
            const res = await request(server).get('/');
            expect(res.body).toEqual({ message: "Movies api is up"});
        })
    })

    describe('GET /movies ', () => {
        it('should return with status 200, and empty json', async () => {
            const res = await request(server).get('/movies');
            expect(res.status).toBe(200);
            expect(res.type).toBe('application/json');
            expect(res.body).toEqual([]);
        })

        it('should respond with all movies in the db when data is inserted', async () => {
            await db('movies').insert([
                {title: 'Star Trek', genre: 'Sci-Fy', releaseYear: 1944},
                {title: 'Heat', genre: 'Action', releaseYear: 1966},
            ])

            const res = await request(server).get('/movies');
            expect(res.body.length).toBe(2)
            expect(res.status).toBe(200);
            expect(res.body[0].title).toBe('Star Trek')
            expect(res.body[0].id).toBe(1)
            expect(res.body[1].title).toBe('Heat')
            expect(res.body[1].releaseYear).toBe(1966)
            expect(res.type).toBe('application/json');

        })
    })


})
