import Image from 'next/image';
import styles from './author.module.css';
import Link from 'next/link';

export default function Author({ author }) {
    return (
        <div className={styles.container}>
            <div className={styles.inside}>
                <p>Written by </p>
                <Link href="/"><h3>{author[0]}</h3></Link>
            </div>
            <Image src={author[1]} alt="Picture of the author" width={500} height={500} />
        </div>
    );
}