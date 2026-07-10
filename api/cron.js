export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Verify request is from Vercel Cron
  const authHeader = req.headers.authorization;
  const cronSecret = process.env.CRON_SECRET;

  if (!cronSecret || authHeader !== `Bearer ${cronSecret}`) {
    console.log('Unauthorized cron request', { authHeader, cronSecret: !!cronSecret });
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    console.log('Cron job triggered at', new Date().toISOString());

    // Dynamic import to avoid load-time errors
    const { fetchAndUpdateNews } = await import('../lib/rss-fetcher.js');
    const articlesCount = await fetchAndUpdateNews();

    return res.status(200).json({
      success: true,
      message: `Processed ${articlesCount} articles`,
      timestamp: new Date().toISOString(),
      count: articlesCount
    });
  } catch (error) {
    console.error('Cron error:', error);
    return res.status(500).json({
      success: false,
      error: error.message,
      timestamp: new Date().toISOString()
    });
  }
}
