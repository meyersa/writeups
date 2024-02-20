import Head from 'next/head';
import Header from '../components/header';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '../components/footer';
import styles from '../components/layout.module.css'

export var siteTitle = 'Meyersa Writeups';

export default function Layout({ children, data }) {
  if (!Object.is(data, null) && data != undefined) {
    if (String(data).length > 10) {
      siteTitle = data.slice(10) + siteTitle;

    }
    siteTitle = data;

  }


  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={siteTitle} key="title" />
        <title>{siteTitle}</title>
      </Head>
      <Header />
      <div className={styles.container}>
        {children}
      </div>
      <Footer />
    </div>
  );
}