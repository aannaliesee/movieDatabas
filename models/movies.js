const { getDb } = require("../db/connect");

const getAll = async () => {
  try {
    const db = getDb();
    const movies = await db.collection('movies').find().toArray();
    return movies;
  } catch (error) {
    throw new Error(`Error fetching movies: ${error.message}`);
  }
};

module.exports = {
  getAll,
};
