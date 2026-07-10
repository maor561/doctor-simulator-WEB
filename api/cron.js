import { fetchAndUpdateNews } from '../lib/rss-fetcher.js';

export default async function handler(req, res) {
  // Verify request is from Vercel Cron
  const authHeader = req.headers.authorization;
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
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
}
