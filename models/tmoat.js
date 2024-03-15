const { getDb } = require('../db/connect');

const getAll = async () => {
    try {
        const db = getDb();
        const recipes = await db.collection('tmoat').find().toArray();
        return recipes;
    } catch (error) {
        throw new Error(`Error fetching tmoat: ${error.message}`);
    }
};

module.exports = {
    getAll
};