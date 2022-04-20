// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }


import {MongoClient} from 'mongodb'

const handler = async (req, res) =>{
  try{
    if(req.method === 'POST'){
      const data = req.body;

      const client = await MongoClient.connect(process.env.MONGO_URI);
      const db = client.db()
      const memoryCollection = db.collection('memories')
      const result = await memoryCollection.insertOne(data)

      client.close()

      res.status(201).json({message: 'Memory added'})
    }
  } catch(err){
    console.log(err)
  }
}

export default handler;