import Head from 'next/head';
import axios from 'axios';
import { API_URL } from 'constants/index';
import matter from 'gray-matter';
import CategoryPageContent from 'containers/CategoryPageContent';
import React from 'react';

export default function CryptoCategory({ casinos, metadata, content }) {
  const { description, keywords, title } = metadata;
  const titleConcat = `${title} | TheGamblr.com`;

  return (
    <>
      <Head>
        <title>{titleConcat}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <CategoryPageContent casinos={casinos} metadata={metadata} />
    </>
  );
}

// const file = () => {
//   const dir = path.join(process.cwd(), 'public/crypto-best.md');
//   const a = fs.readFileSync(dir, 'utf-8');
//   return a;
// };
//
// const reviewData = file();

export async function getServerSideProps(context) {
  try {
    const { category } = context.query;

    const { data: listData } = await axios.get(
      `${API_URL}/casinos/list/crypto`,
    );
    const { data: reviewData } = await axios.get(
      `${API_URL}/page-category/crypto-${category}`,
    );

    const matterResult = matter(reviewData);
    const metadata = matterResult.data;
    const content = matterResult.content;

    return {
      props: {
        casinos: listData,
        metadata,
        content,
      },
    };
  } catch (e) {
    return {
      redirect: {
        permanent: false,
        destination: '/404',
      },
    };
  }
}
