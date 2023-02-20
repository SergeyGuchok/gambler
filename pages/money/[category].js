import Head from 'next/head';
import axios from 'axios';
import { API_URL } from 'constants/index';
import matter from 'gray-matter';
import React from 'react';

import CategoryPageContent from 'containers/CategoryPageContent';

export default function MoneyCategory({ casinos, metadata, content }) {
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
export async function getServerSideProps(context) {
  try {
    const { category } = context.query;
    const { data: listData } = await axios.get(`${API_URL}/casinos/list/money`);
    const { data: reviewData } = await axios.get(
      `${API_URL}/page-category/money-${category}`,
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
