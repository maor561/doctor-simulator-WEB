import { getLatestNews } from '../lib/db.js';

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const limit = parseInt(req.query.limit) || 10;
    const news = await getLatestNews(limit);

    res.setHeader('Cache-Control', 'max-age=60');
    return res.status(200).json({
      success: true,
      count: news.length,
      news: news.map(item => ({
        _id: item._id.toString(),
        source: item.source,
        title: item.title,
        description: item.description,
        link: item.link,
        publishedAt: item.publishedAt,
        image: item.image
      }))
    });
  } catch (error) {
    console.error('Error fetching news:', error);
    return res.status(500).json({
      success: false,
      error: error.message
    });
  }
}
