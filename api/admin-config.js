export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    const { connectToDatabase } = await import('../lib/db.js');
    const { db } = await connectToDatabase();

    const configCollection = db.collection('admin-config');

    // GET — קרא קונפיגורציה
    if (req.method === 'GET') {
      const config = await configCollection.findOne({ _id: 'whatsapp-links' });
      return res.status(200).json({
        success: true,
        links: config?.links || {
          general: 'https://wa.me/',
          buysell: 'https://wa.me/',
          dcs: 'https://wa.me/',
          cvfr: 'https://wa.me/'
        }
      });
    }

    // POST — שמור קונפיגורציה
    if (req.method === 'POST') {
      const { links } = req.body;

      if (!links || typeof links !== 'object') {
        return res.status(400).json({
          success: false,
          error: 'Invalid links format'
        });
      }

      await configCollection.updateOne(
        { _id: 'whatsapp-links' },
        { $set: { links, updatedAt: new Date() } },
        { upsert: true }
      );

      return res.status(200).json({
        success: true,
        message: 'Configuration saved successfully',
        links
      });
    }

    return res.status(405).json({ error: 'Method not allowed' });
  } catch (error) {
    console.error('Admin config error:', error);
    return res.status(500).json({
      success: false,
      error: error.message
    });
  }
}
