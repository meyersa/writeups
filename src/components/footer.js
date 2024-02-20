/*
 * Footer on page
 */

import styles from './footer.module.css';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className={styles.container}>
      <p>&copy; 2024 August Meyers</p>
    </div>
  );
}