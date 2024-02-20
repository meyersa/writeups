/*
 * Provides the small text/image for author on posts page
 * Takes in an optional author array of 
 * author[0] Name
 * author[1] Link to picture 
 * author[3] Personal link
 */

import Image from 'next/image';
import styles from './author.module.css';
import Link from 'next/link';

export default function Author({ author }) {
    var authorName = "August Meyers";
    var authorPic = "https://raw.githubusercontent.com/meyersa/assets/f7bb5f0924c0bc3406233f3e58f800b7b2e208de/icons/portrait.jpg";
    var authorLink = "https://meyersa.com";

    // If authorName is valid
    if (!Object.is(author[0], null) && author[0] != undefined) {
        authorName = author[0];

    }

    // If authorPic is valid
    if (!Object.is(author[1], null) && author[1] != undefined) {
        authorPic = author[1];

    }

    // If authorLink is valid
    if (!Object.is(author[2], null) && author[2] != undefined) {
        authorLink = author[2];

    }

    return (
        <div className={styles.container}>
            <div className={styles.inside}>
                <p>Written by </p>
                <Link href={authorLink}><h3>{authorName}</h3></Link>
            </div>
            <Image src={authorPic} alt="Picture of the author" width={500} height={500} />
        </div>
    );
}