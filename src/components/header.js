/* 
 * Header on page
 */ 

import styles from './header.module.css';
import Link from 'next/link';

export default function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Link href="/"><h1>writeups.meyersa.com</h1></Link>
      </div>
      <div className={styles.right}>
        <p>Writeups of technical adventures</p>
      </div>
    </div>
  );
}