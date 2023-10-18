import Head from 'next/head';
import axios from 'axios';
import { API_URL } from 'constants/index';
import matter from 'gray-matter';
import CategoryPageContent from 'containers/CategoryPageContent';
import React from 'react';
import { readMarkdown } from '../../utils';

export default function BestCasinos({ casinos, metadata, content }) {
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

export async function getServerSideProps() {
  try {
    const { data } = await axios.get(`${API_URL}/casinos`);
    const markdown = readMarkdown('texts/page/casinos-sports-betting.md');

    const matterResult = matter(markdown);
    const metadata = matterResult.data;
    const content = matterResult.content;

    return {
      props: {
        casinos: data,
        metadata,
        content,
      },
    };
  } catch (e) {
    if (process.env.npm_lifecycle_event === 'build')
      return {
        notFound: true,
      };
    return {
      redirect: {
        permanent: false,
        destination: '/404',
      },
    };
  }
}
