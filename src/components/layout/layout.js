import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import Link from 'next/link';

const name = '[Your Name]';
export const siteTitle = 'Next Sample Website';

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />

      </Head>
      <header className={styles.header}></header>
      <main>{children}</main>
    </div>
  );
}