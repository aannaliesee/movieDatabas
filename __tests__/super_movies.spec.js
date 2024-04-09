const server = require('../server')
const request = require('supertest');
const { expect } = require('@jest/globals');
const mongodb = require('../db/connect');
// const request = supertest(server)

// before(async () => {
//     // Initialize the database before running tests
//     await mongodb.initDb();
// });

describe('Test movies controllers', () => {
    // test('responds to /', async () => {
    //     const res = await request.get('/');
    //     expect(res.header['content-type']).toBe('application/json; charset=utf-8');
    //     expect(res.statusCode).toBe(200)
    // }) 

    let connection;
    let db;
  
    beforeAll(async () => {
        mongodb.initDb();
        console.log('am i here')
      });
    //   db = await connection.db('Movies');
    // });
  
    // afterAll(async () => {
    //   await connection.close();
    // });

    test('responds to /movies', async () => {
        const res = await request(server).get('/movies');
        expect(res.header['content-type']).toBe('application/json; charset=utf-8');
        expect(typeof res.statusCode).toBe('number')
      });

    // test('responds to /movies/:_id', async () => {
    //     // await mongodb.initDb();
    //     const movieId = '65f3b1dcba4f5a7ee607571e'
    //     const res = await request(server).get('/movies/65f3b1dcba4f5a7ee607571e');
    //     expect(res.header['content-type']).toBe('application/json; charset=utf-8');
    //     expect(res.statusCode).toBe('number')
    // })
})