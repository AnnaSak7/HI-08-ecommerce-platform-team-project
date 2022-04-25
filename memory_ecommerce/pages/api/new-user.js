import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  try {
    if (req.method === "POST") {
      const data = req.body;
      const client = await MongoClient.connect(process.env.MONGO_URI);
      const db = client.db();
      const userCollection = db.collection("users");
      const result = await userCollection.insertOne(data);

      client.close();

      res.status(201).json({ message: "New User added" });
    }
  } catch (err) {
    console.log(err);
  }
};

export default handler;
