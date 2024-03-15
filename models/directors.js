const { getDb } = require('../db/connect');

const getAll = async () => {
    try {
        const db = getDb();
        const recipes = await db.collection('directors').find().toArray();
        return recipes;
    } catch (error) {
        throw new Error(`Error fetching directors: ${error.message}`);
    }
};

module.exports = {
    getAll
};