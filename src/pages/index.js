import Head from 'next/head';
import Layout from '../components/layout';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
import Author from '../components/author' 

export default function Home({ allPostsData }) {
  return (
    <Layout>
      <div className="content">
        <h2>Blog</h2>
        <ul>
          {allPostsData.map(({ id, date, title, except, author, authorImg }) => (
            <li key={id}>
              <Link href={`${id}`}>{title}</Link>
              <br />
              <Date dateString={date} />
              <Author author={{author, authorImg}}/>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}