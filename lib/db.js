import { MongoClient } from 'mongodb';

const MONGODB_URI = process.env.MONGODB_URI;
const DATABASE_NAME = 'doctor-simulator';
const COLLECTION_NAME = 'news';

let cachedClient = null;
let cachedDb = null;

export async function connectToDatabase() {
  if (!MONGODB_URI) {
    throw new Error('MONGODB_URI environment variable is not set');
  }

  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb, collection: cachedDb.collection(COLLECTION_NAME) };
  }

  try {
    const client = new MongoClient(MONGODB_URI);
    await client.connect();
    const db = client.db(DATABASE_NAME);

    // Ensure collection exists with index
    const collection = db.collection(COLLECTION_NAME);
    await collection.createIndex({ publishedAt: -1 });
    await collection.createIndex({ link: 1 }, { unique: true });

    cachedClient = client;
    cachedDb = db;

    return { client, db, collection };
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
    throw error;
  }
}

export async function addNews(newsItem) {
  const { collection } = await connectToDatabase();

  try {
    const result = await collection.updateOne(
      { link: newsItem.link },
      { $set: newsItem },
      { upsert: true }
    );
    return result;
  } catch (error) {
    console.error('Error adding news:', error);
    throw error;
  }
}

export async function getLatestNews(limit = 10) {
  const { collection } = await connectToDatabase();

  try {
    const news = await collection
      .find({})
      .sort({ publishedAt: -1 })
      .limit(limit)
      .toArray();

    return news;
  } catch (error) {
    console.error('Error fetching news:', error);
    throw error;
  }
}

export async function deleteOldestNews() {
  const { collection } = await connectToDatabase();

  try {
    const count = await collection.countDocuments();

    if (count > 10) {
      const oldest = await collection
        .find({})
        .sort({ publishedAt: 1 })
        .limit(count - 10)
        .toArray();

      const idsToDelete = oldest.map(doc => doc._id);

      await collection.deleteMany({
        _id: { $in: idsToDelete }
      });

      console.log(`Deleted ${idsToDelete.length} old news items`);
    }
  } catch (error) {
    console.error('Error deleting old news:', error);
    throw error;
  }
}
