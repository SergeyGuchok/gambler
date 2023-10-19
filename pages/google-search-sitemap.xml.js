import axios from 'axios';
import { API_URL } from '../constants';

const EXTERNAL_DATA_URL = 'https://www.thegamblr.com';

function generateSiteMap(casinos, slotsNames, developers) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
        <loc>https://www.thegamblr.com/</loc>
        <changefreq>weekly</changefreq>
        <priority>0.7</priority>
    </url>
    <url>
        <loc>https://www.thegamblr.com/crypto</loc>
        <changefreq>weekly</changefreq>
        <priority>0.7</priority>
    </url>
    <url>
        <loc>https://www.thegamblr.com/money</loc>
        <changefreq>weekly</changefreq>
        <priority>0.7</priority>
    </url>
    <url>
        <loc>https://www.thegamblr.com/cases</loc>
        <changefreq>weekly</changefreq>
        <priority>0.7</priority>
    </url>
    <url>
        <loc>https://www.thegamblr.com/skins</loc>
        <changefreq>weekly</changefreq>
        <priority>0.7</priority>
    </url>
    <url>
        <loc>https://www.thegamblr.com/privacy-policy</loc>
        <changefreq>weekly</changefreq>
        <priority>0.5</priority>
    </url>
    <url>
        <loc>https://www.thegamblr.com/casinos/best</loc>
        <changefreq>daily</changefreq>
        <priority>0.7</priority>
    </url>
    <url>
        <loc>https://www.thegamblr.com/casinos/fast</loc>
        <changefreq>daily</changefreq>
        <priority>0.7</priority>
    </url>
    <url>
        <loc>https://www.thegamblr.com/casinos/sports-betting</loc>
        <changefreq>daily</changefreq>
        <priority>0.7</priority>
    </url>
    <url>
        <loc>https://www.thegamblr.com/casinos/bonuses</loc>
        <changefreq>daily</changefreq>
        <priority>0.7</priority>
    </url>
    <url>
        <loc>https://www.thegamblr.com/slots/review</loc>
        <changefreq>daily</changefreq>
        <priority>0.7</priority>
    </url>
    <url>
        <loc>https://www.thegamblr.com/slots/coming-soon</loc>
        <changefreq>daily</changefreq>
        <priority>0.7</priority>
    </url>
    <url>
        <loc>https://www.thegamblr.com/slots/new</loc>
        <changefreq>daily</changefreq>
        <priority>0.7</priority>
    </url>
    <url>
        <loc>https://www.thegamblr.com/slots/bonus-buy</loc>
        <changefreq>daily</changefreq>
        <priority>0.7</priority>
    </url>
    <url>
        <loc>https://www.thegamblr.com/slots/bonus-buy</loc>
        <changefreq>daily</changefreq>
        <priority>0.7</priority>
    </url>
    <url>
        <loc>https://www.thegamblr.com/slots/unique-features</loc>
        <changefreq>daily</changefreq>
        <priority>0.7</priority>
    </url>
     ${casinos
       .map(({ name }) => {
         if (!name) return null;
         return `
       <url>
           <loc>${`${EXTERNAL_DATA_URL}/casino/${name}`}</loc>
           <changefreq>weekly</changefreq>
           <priority>0.8</priority>
       </url>
     `;
       })
       .join('')}
       
       ${slotsNames.map((name) => {
         if (!name) return null;

         return `
           <url>
             <loc>${`${EXTERNAL_DATA_URL}/slot/${name}`}</loc>
             <changefreq>daily</changefreq>
             <priority>0.7</priority>
           </url>
          `;
       })}
       
       ${developers.map(({ name }) => {
         if (!name) return null;

         return `
           <url>
             <loc>${`${EXTERNAL_DATA_URL}/game-developers/${name}`}</loc>
             <changefreq>daily</changefreq>
             <priority>0.7</priority>
           </url>
          `;
       })}
       <url>
         <loc>${`${EXTERNAL_DATA_URL}/game-developers/review`}</loc>
         <changefreq>daily</changefreq>
         <priority>0.7</priority>
       </url>
       <url>
         <loc>${`${EXTERNAL_DATA_URL}/game-developers/popular`}</loc>
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
  const { data } = await axios.get(`${API_URL}/casinos`);
  const {
    data: { slots: slotsData },
  } = await axios.get(`${API_URL}/slots`);
  const slotsNames = slotsData.map((slot) => slot.name);
  const { data: developersData } = await axios.get(`${API_URL}/developers`);

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(data, slotsNames, developersData);

  res.setHeader('Content-Type', 'text/xml');
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
