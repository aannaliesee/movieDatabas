const {MongoClient} = require('mongodb');
// const mongodb = require('./db/connect');
const dotenv = require('dotenv');
dotenv.config();

describe('insert', () => {
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

  it('should insert a new user into the collection', async () => {
    const users = db.collection('movies');

    const mockUser = {
                       title: 'Triangle',
                       directors: 'Penelope', // required, allow both string and array
                       actors: 'Juliet', // required
                       genre: 'RomCom',
                       releaseYear: 2011, // allow only integers between 1800-2025
                       ratings: 7, // required};
    }
    await users.insertOne(mockUser);

    const insertedUser = await users.findOne({title: "Triangle"});
    expect(insertedUser).toEqual(mockUser);
  });
});