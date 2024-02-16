import styles from './footer.module.css';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Link href="/"><p>writeups.meyersa.com</p></Link>
      </div>
      <div className={styles.right}>
        <p>&copy; 2024 August Meyers</p>
      </div>
    </div>
  );
}