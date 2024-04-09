const {MongoClient} = require('mongodb');
const dotenv = require('dotenv');
//
const request = require('supertest'); // Import supertest for making HTTP requests
const app = require('../server');
//

dotenv.config();


/*//GET ALL ROUTE Test
describe('getAll', () => {
  it('should get all TMOAT records', async () => {
    // Make an HTTP GET request to the /tmoat endpoint
    const response = await request(app).get('/tmoat');

    // Expect the response status to be 200
    expect(response.status).toBe(200);

    // Expect the response body to be an array
    expect(Array.isArray(response.body)).toBe(true);
  });
});

//GET SINGLE ROUTE Test
describe('getSingle', () => {
  let connection;
  let db;

  beforeAll(async () => {
    connection = await MongoClient.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    db = await connection.db('Movies');
  });

  afterAll(async () => {
    await connection.close();
  });

  it('should get a single TMOAT record by ID', async () => {
    const tmoat = db.collection('tmoat');

    // Insert a mock TMOAT record to retrieve
    const mockTmoat = {
      title: 'Apples',
      year: '2000',
      source: 'Various Critics',
      authority: 'Rotten Tomatoes',
      rank: 5,
      plotSummary: 'Action Story',
    };
    const insertedTmoat = await tmoat.insertOne(mockTmoat);
    const tmoatId = insertedTmoat.insertedId;

    // Make a GET request to retrieve the TMOAT record by ID
    const res = await request(app)
      .get(`/tmoat/${tmoatId}`);

    // Check if the request was successful
    expect(res.status).toBe(200);

    // Verify that the retrieved TMOAT record matches the inserted one
    expect(res.body._id).toBe(String(tmoatId));
    expect(res.body.title).toBe(mockTmoat.title);
    // Add similar expectations for other fields
  });
});
*/

//UPDATE TEST 
describe('updateTMOAT', () => {
  let connection;
  let db;

  beforeAll(async () => {
    connection = await MongoClient.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    db = await connection.db('Movies');
  });

  afterAll(async () => {
    await connection.close();
  });

  it('should update an existing movie in the TMOAT collection', async () => {
    const tmoat = db.collection('tmoat');

    // Insert a mock TMOAT record to update
    const mockTmoat = {
      title: 'Strawberries',
      year: '1990',
      source: 'Various Critics',
      authority: 'Rotten Tomatoes',
      rank: 15,
      plotSummary: 'Romance Story',
    };
    const insertedTmoat = await tmoat.insertOne(mockTmoat);
    const tmoatId = insertedTmoat.insertedId;

    // Updated TMOAT data
    const updatedTmoatData = {
      title: 'Strawberries Updated',
      year: '1991',
      source: 'New Source',
      authority: 'IMDb',
      rank: 20,
      plotSummary: 'Updated Plot Summary',
    };

    // Make a PUT request to update the TMOAT record
    const res = await request(app)
      .put(`/tmoat/${tmoatId}`)
      .send(updatedTmoatData);

    // Check if the update was successful
    expect(res.status).toBe(204);

    // Verify that the TMOAT record is updated in the database
    const updatedTmoat = await tmoat.findOne({ _id: tmoatId });
    expect(updatedTmoat).toEqual(expect.objectContaining(updatedTmoatData));
  });
});

//DELETE TEST 
describe('deleteTMOAT', () => {
  let connection;
  let db;

  beforeAll(async () => {
    connection = await MongoClient.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    db = await connection.db('Movies');
  });

  afterAll(async () => {
    await connection.close();
  });

  it('should delete an existing movie from the TMOAT collection', async () => {
    const tmoat = db.collection('tmoat');

    // Insert a mock TMOAT record to delete
    const mockTmoat = {
      title: 'Oranges',
      year: '1995',
      source: 'Various Critics',
      authority: 'Rotten Tomatoes',
      rank: 10,
      plotSummary: 'Drama Story',
    };
    const insertedTmoat = await tmoat.insertOne(mockTmoat);
    const tmoatId = insertedTmoat.insertedId;

    // Make a DELETE request to delete the TMOAT record
    const res = await request(app)
      .delete(`/tmoat/${tmoatId}`);

    // Check if the delete was successful
    expect(res.status).toBe(204);

    // Verify that the TMOAT record is deleted from the database
    const deletedTmoat = await tmoat.findOne({ _id: tmoatId });
    expect(deletedTmoat).toBeNull();
  });
});
