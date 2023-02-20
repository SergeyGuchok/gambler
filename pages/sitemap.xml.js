import axios from 'axios';
import { API_URL } from '../constants';

const EXTERNAL_DATA_URL = 'https://thegamblr.com';

function generateSiteMap(casinos) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
        <loc>https://thegamblr.com/</loc>
        <changefreq>daily</changefreq>
        <priority>0.7</priority>
    </url>
    <url>
        <loc>https://thegamblr.com/crypto/</loc>
        <changefreq>daily</changefreq>
        <priority>0.7</priority>
    </url>
    <url>
        <loc>https://thegamblr.com/money/</loc>
        <changefreq>daily</changefreq>
        <priority>0.7</priority>
    </url>
    <url>
        <loc>https://thegamblr.com/cases/</loc>
        <changefreq>daily</changefreq>
        <priority>0.7</priority>
    </url>
    <url>
        <loc>https://thegamblr.com/skins/</loc>
        <changefreq>daily</changefreq>
        <priority>0.7</priority>
    </url>
    <url>
        <loc>https://thegamblr.com/privacy-policy/</loc>
        <changefreq>weekly</changefreq>
        <priority>0.5</priority>
    </url>
     ${casinos
       .map(({ name }) => {
         if (!name) return null;
         return `
       <url>
           <loc>${`${EXTERNAL_DATA_URL}/casino/${name}/`}</loc>
           <changefreq>daily</changefreq>
           <priority>0.9</priority>
       </url>
     `;
       })
       .join('')}
    <url>
        <loc>https://thegamblr.com/crypto/sports-betting/</loc>
        <changefreq>daily</changefreq>
        <priority>0.7</priority>
    </url>
    <url>
        <loc>https://thegamblr.com/crypto/fast/</loc>
        <changefreq>daily</changefreq>
        <priority>0.7</priority>
    </url>
    <url>
        <loc>https://thegamblr.com/crypto/best/</loc>
        <changefreq>daily</changefreq>
        <priority>0.7</priority>
    </url>
    <url>
        <loc>https://thegamblr.com/crypto/bonuses/</loc>
        <changefreq>daily</changefreq>
        <priority>0.7</priority>
    </url>
        <url>
        <loc>https://thegamblr.com/money/sports-betting/</loc>
        <changefreq>daily</changefreq>
        <priority>0.7</priority>
    </url>
    <url>
        <loc>https://thegamblr.com/money/fast/</loc>
        <changefreq>daily</changefreq>
        <priority>0.7</priority>
    </url>
    <url>
        <loc>https://thegamblr.com/money/best/</loc>
        <changefreq>daily</changefreq>
        <priority>0.7</priority>
    </url>
    <url>
        <loc>https://thegamblr.com/money/bonuses/</loc>
        <changefreq>daily</changefreq>
        <priority>0.7</priority>
    </url>
    </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  const url =
    process.env.ENVIRONMENT === 'production'
      ? API_URL
      : 'http://localhost:3000/api';
  const result = await axios.get(`${url}/casinos`);
  const { data } = result.data;

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(data);

  res.setHeader('Content-Type', 'text/xml');
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
