const { MongoClient } = require('mongodb');

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const MONGO_DB_URL = 'mongodb://127.0.0.1:27017';
const DB_NAME = 'TodoList';

let db = null;

const connection = async () => {
  if (db) return Promise.resolve(db);
  const conn = await MongoClient.connect(MONGO_DB_URL, OPTIONS);
  db = conn.db(DB_NAME);
  return db;
};

module.exports = {
  connection
};
