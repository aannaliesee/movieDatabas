const app = require('../server')
const request = require('supertest');
const { expect } = require('@jest/globals');
// const request = supertest(server);



describe("Test Director Handlers", () => {
    // GET test
    test('responds to /directors', async () => {
        const res = await request(app).get('/directors');
        expect(res.header['content-type']).toBe('application/json; charset=utf-8');
        // expect(res.statusCode).toBe(200)
    })
    //POST test
    // test('POST /directors', async () => {

    //     const newDir = {
    //         name: "Chris Columbus",
    //         nationality: "American", 
    //         dob: 'Septmeber 9, 1958',
    //         awards: [
    //             {
    //                 awardName: "Oscar",
    //                 year: "2012",
    //                 movie: "The Help",
    //             }
    //         ],
    //         moviesDirected: ["Harry Potter"],
    //     };
    //     const res = await request(app).post('/directors').send(newDir);     
    //     expect(res.header['content-type']).toBe('application/json; charset=utf-8');
    //     expect(res.statusCode).toBe(201)
    // });

    //PUT test
    // test('PUT /directors/:id ', async () => {
    //     const dirId = '65f4c6117ee3162e25f02d77';
    //     const updateddir = {
    //         name: "Chris Columbus",
    //         nationality: "American",
    //         dob: 'Septmeber 9, 1958',
    //         awards: [{}],
    //         moviesDirected: ["Harry Potter"],
    //     };
    //     const res = await request(app)
    //       .put(`/directors/${dirId}`)
    //       .send(updateddir);
    //       expect(typeof res.statusCode).toBe('number')
    //   });

});

