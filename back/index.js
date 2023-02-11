const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');


let db;

const getMongoDB = async () => {
  
  const uri = "mongodb+srv://codemash:codemash@cluster0.8eri7zv.mongodb.net/?retryWrites=true&w=majority";
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
  client.connect(err => {
    db = client.db("books");
    console.log("DB Connected");
  });
}

getMongoDB();

const app = express();
app.use(cors());
app.use(express.json());


app.get("/books", async (req, res) => {
  let coll = await db.collection("books");
  let data = await coll.find().toArray();
  res.send(data).status(200);
});

app.get("/book/:id", async (req, res) => {
  let coll = await db.collection("books");
  let data = await coll.findOne({_id: ObjectId(req.params.id)});
  res.send(data).status(200);
});

app.post("/book", async (req, res) => {
  let coll = await db.collection("books");
  let result = await coll.insertOne(req.body);
  res.send(result).status(201);
});

app.delete("/book/:id", async (res, res) => {
  let coll = await db.collection("books");
  let result = await coll.deleteOne({_id: ObjectId(req.params.id)});
  res.send(result).status(200);
});

app.put("/book/:id", async (res, req) => {
  let coll = await db.collection("books");
  let result = await coll.updateOne({_id: ObjectId(req.params.id)}, req.body);
  res.send(result).status(200);
});

app.get("/book/count", async (res, req) => {
  let coll = await db.collection("books");
  let data = await coll.aggregate([
    {
      '$count': 'books'
    }
  ]).toArray();
  res.send(data).status(200);
});

app.listen(5050, () => console.log("Server started"));