/*
 * Footer on page
 */

import styles from './footer.module.css';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className={styles.container}>
      <Link href="/"><p>writeups.meyersa.com</p></Link>
      <p>&copy; 2024 August Meyers</p>
    </div>
  );
}