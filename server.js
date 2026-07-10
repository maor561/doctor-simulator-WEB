import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { getLatestNews } from './lib/db.js';
import { fetchAndUpdateNews } from './lib/rss-fetcher.js';

dotenv.config({ path: '.env.local' });

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('.'));

// API: Get latest news
app.get('/api/news', async (req, res) => {
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
});

// Cron endpoint: Fetch RSS feeds
app.post('/api/cron', async (req, res) => {
  const authHeader = req.headers.authorization;
  const cronSecret = process.env.CRON_SECRET;

  if (authHeader !== `Bearer ${cronSecret}`) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    console.log('Cron job triggered at', new Date().toISOString());
    const articlesCount = await fetchAndUpdateNews();

    return res.status(200).json({
      success: true,
      message: `Processed ${articlesCount} articles`,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Cron error:', error);
    return res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Catch all static files
app.get('*', (req, res) => {
  res.sendFile('./index.html', { root: '.' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`API available at http://localhost:${PORT}/api/news`);
});
