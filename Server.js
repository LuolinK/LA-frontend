require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongodb = require('mongodb');
const bcrypt = require('bcrypt');

const app = express();
app.use(cors());
app.use(express.json());

const uri = process.env.DB_URI;
const client = new mongodb.MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000
});

const dbName = process.env.DB_NAME;
const collectionName = process.env.COLLECTION_NAME;

app.post('/login', async (req, res) => {
  try {
    const { userName, passWord } = req.body;
    await client.connect();

    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    const user = await collection.findOne({ "user.userName": userName });
    console.log(user);
    if (!user) {
      return res.status(401).send({ message: 'Invalid credentials' });
    }
    res.status(200).send({ message: 'Login successful', user });
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: 'Error occurred during login' });
  } finally {
    await client.close();
  }
});



app.post('/register', async (req, res) => {
  try {
    const { userName, passWord } = req.body;
    await client.connect();

    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    const hash = await bcrypt.hash(passWord, 10);
    const result = await collection.insertOne({ userName, passWord: hash });

    res.status(200).send({ message: 'User registered successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: 'Error occurred during user registration' });
  } finally {
    await client.close();
  }
});

app.listen(3000, () => console.log('Server is running on port 3000'));