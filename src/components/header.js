import Head from 'next/head';
import Image from 'next/image';
import styles from './header.module.css';
import Link from 'next/link';

export default function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h1>Writeups.Meyersa.Com</h1>
      </div>
      <div className={styles.right}>

      </div>
    </div>
  );
}