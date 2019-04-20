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

})
