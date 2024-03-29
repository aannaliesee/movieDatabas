const server = require('.../server')
const supertest = require('supertest');
const { expect } = require('@jest/globals');
const request = supertest(server);


// GET test
describe("Test Director Handlers", () => {
    test('responds to /directors', async () => {
        const res = await request(server).get('/directors');
        expect(res.header['content-type']).toBe('application/json; charset=utf-8');
        expect(res.statusCode).toBe(200)
    })
    //POST test
    test('POST /directors', async () => {

        const newDir = {
            name: "Chris Columbus",
            nationality: "American", 
            dob: 'Septmeber 9, 1958',
            awards: [
                {
                    awardName: "Oscar",
                    year: "2012",
                    movie: "The Help",
                }
            ],
            moviesDirected: ["Harry Potter"],
        };
        const res = await request(server).post('/directors').send(newDir);     
        expect(res.header['content-type']).toBe('application/json; charset=utf-8');
        expect(res.statusCode).toBe(201)
    });

    //PUT test
    test('PUT /directors/:id', async () => {
        const dirId = '65f4c7167ee3162e25f02d7f';
        const change = {
            name: "Nicholas Cassavetes",
            nationality: "American", 
            dob: 'May 21, 1959',
            awards: [],
            moviesDirected: ["The Notebook"],

        };
        const res = await request(server).put(`/directors/${dirId}`).send(change);
        expect(res.statusCode).toBe(202)
    });

});

