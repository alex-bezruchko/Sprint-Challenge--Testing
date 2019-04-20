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
    })
})
