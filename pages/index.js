import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout/layout.js';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <h1>Base site</h1>
      </section>
    </Layout>
  );
}