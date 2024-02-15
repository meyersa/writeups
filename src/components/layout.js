import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import Link from 'next/link';

export var siteTitle = 'Meyersa Writeups';

export default function Layout({ children, data }) {
  if (!Object.is(data, null)) {
    siteTitle = data;

  }

  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={siteTitle} key="title" />
        <title>{siteTitle}</title>
      </Head>
      <header className={styles.header}></header>
      <main>{children}</main>
    </div>
  );
}