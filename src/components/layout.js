import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import Link from 'next/link';

export const siteTitle = 'Meyersa Writeups';

export default function Layout({ children, title }) {
  if (Object.is(title, null)) {
    title = siteTitle;
    
  }

  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={siteTitle} key="title"/>
      </Head>
      <header className={styles.header}></header>
      <main>{children}</main>
    </div>
  );
}