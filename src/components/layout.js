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
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={siteTitle} key="title" />
        <title>{siteTitle}</title>
      </Head>
      <div>
        <Header />
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
}