import Image from 'next/image';
import styles from './author.module.css';
import Link from 'next/link';

export default function Author({ author }) {
    return (
        <div className={styles.container}>
            <Link href="/"><h2>{author[0]}</h2></Link>
            <Image src={author[1]} alt="Picture of the author" width={500} height={500} />
        </div>
    );
}