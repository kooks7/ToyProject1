const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = cb => {
  MongoClient.connect('mongodb://localhost:27017/test1')
    .then(client => {
      console.log('Connected');
      _db = client.db();
      cb(client);
    })
    .catch(err => {
      throw err;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw 'No database';
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
