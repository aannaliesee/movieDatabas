const request = require("supertest");
const server = require("../server");
const { expect } = require('@jest/globals');
// const request = supertest(server)
// console.log("server", server);

describe('Test Genre Controllers', () => {
    // test('responds to /genres', async () => {
    //   const res = await request(server).get('/genres');
    //   expect(res.header['content-type']).toBe('application/json; charset=utf-8');
    //   expect(typeof res.statusCode).toBe('number')
    // });
  
    // test('GET /genres/:id - getGenresById', async () => {
    //   const genreId = '65f4c6117ee3162e25f02d77';
    //   const res = await request(server).get(`/genres/${genreId}`);
    //   expect(res.header['content-type']).toBe('application/json; charset=utf-8');
    // });
  
    test('POST /genres - createGenre', async () => {
      const newGenre = {
        genre: 'Action',
        movies: ['Movie 1']
      };
      const res = await request(server)
        .post('/genres')
        .send(newGenre);
        expect(typeof res.statusCode).toBe('number')
        expect(res.header['content-type']).toBe('application/json; charset=utf-8');
    });
  
    test('PUT /genres/:id - updateGenre', async () => {
      const genreId = '65f4c6117ee3162e25f02d77';
      const updatedGenre = {
        genre: 'Updated Genre',
        movies: ['Updated Movie 1']
      };
      const res = await request(server)
        .put(`/genres/${genreId}`)
        .send(updatedGenre);
        expect(typeof res.statusCode).toBe('number')
    });
  
  });