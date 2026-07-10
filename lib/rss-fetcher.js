import Parser from 'rss-parser';
import { addNews, deleteOldestNews } from './db.js';

const parser = new Parser();

const RSS_FEEDS = [
  {
    name: 'Simple Flying',
    url: 'https://simpleflying.com/feed/'
  },
  {
    name: 'The Points Guy - Aviation',
    url: 'https://thepointsguy.com/feed/'
  },
  {
    name: 'AVweb',
    url: 'https://www.avweb.com/feed/'
  },
  {
    name: 'FlightRadar24 Blog',
    url: 'https://www.flightradar24.com/blog/feed/'
  },
  {
    name: 'PMDG News',
    url: 'https://www.pmdg.com/news/'
  }
];

const KEYWORDS = [
  'MSFS',
  'Microsoft Flight Simulator',
  'סימולציה',
  'תעופה',
  'flight',
  'aviation',
  'pilot',
  'טייס',
  'טיסה',
  'airport',
  'שדה תעופה',
  'simulator',
  'DCS',
  'X-Plane',
  'Prepar3D'
];

function containsKeywords(text) {
  if (!text) return false;
  const lowerText = text.toLowerCase();
  return KEYWORDS.some(keyword =>
    lowerText.includes(keyword.toLowerCase())
  );
}

export async function fetchAndUpdateNews() {
  console.log('Starting RSS fetch at', new Date().toISOString());

  const allArticles = [];

  for (const feed of RSS_FEEDS) {
    try {
      console.log(`Fetching from ${feed.name}...`);
      const rss = await parser.parseURL(feed.url);

      for (const item of rss.items.slice(0, 5)) {
        const title = item.title || '';
        const description = item.content || item.summary || '';
        const fullText = `${title} ${description}`;

        if (containsKeywords(fullText)) {
          allArticles.push({
            source: feed.name,
            title: title,
            description: description.substring(0, 200),
            link: item.link,
            publishedAt: new Date(item.pubDate || Date.now()),
            createdAt: new Date(),
            image: item.enclosures?.[0]?.url || null
          });
        }
      }
    } catch (error) {
      console.error(`Error fetching ${feed.name}:`, error.message);
    }
  }

  // Save articles to database
  for (const article of allArticles) {
    try {
      await addNews(article);
    } catch (error) {
      if (error.code === 11000) {
        // Duplicate key error (article already exists)
        console.log(`Article already exists: ${article.link}`);
      } else {
        console.error('Error saving article:', error);
      }
    }
  }

  // Delete oldest news if more than 10
  await deleteOldestNews();

  console.log(`Fetched and processed ${allArticles.length} new articles`);
  return allArticles.length;
}
