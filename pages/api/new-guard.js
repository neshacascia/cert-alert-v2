import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;

    const client = await MongoClient.connect(process.env.NEXT_PUBLIC_API_TOKEN);

    const db = client.db();
    const guardsCollections = db.collection('guards');

    const result = await guardsCollections.insertOne(data);

    client.close();

    res.status(201).json({ message: 'Guard information inserted!' });
  }
}
