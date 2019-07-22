const express = require('express');
const bodyParser = require('body-parser');

const todo = require('./routes/product.route'); // Imports routes for the todos
const app = express();

// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb+srv://someone_user:useruseruser@clusterofdasha-s5hux.mongodb.net/todoes?retryWrites=true&w=majority';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

/* const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://someone_user:<password>@clusterofdasha-s5hux.mongodb.net/todoes?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("todoes").collection("devices");
  // perform actions on the collection object
  client.close();
}); */

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/todos', todo);

let port = 1234;
app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});