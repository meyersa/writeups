import Head from 'next/head';
import Layout from '../components/layout';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
import Author from '../components/author'
import Image from 'next/image'

export default function Home({ allPostsData }) {
  return (
    <Layout>
      <div className="content">
        <h2>Welcome to my Blog!</h2>
        <p>I&apos;m August. I&apos;m currently pursuing a double major in Information Technology and Computer Science with a minor in Math at Central Michigan University. While here, I&apos;m working as a Student Technician for the Office of Information Technology helping support Faculty and Staff with their technology. In my free time I&apos;m either experimenting in my lab learning something new, out exploring the world with my camera, or playing video games (if I have time)</p>
        <div className="divider" />
      </div>
      <div className="content">
        <h2 >Latest Posts</h2>
      </div>
      <ul>
        {allPostsData.map(({ id, date, title, exerpt, author, authorImg, image }, index) => (
          <li key={id}>
            <div className="content">
              <Link href={`${id}`}>{title}</Link>
              <br />
              <Date dateString={date} />
              <Image src={image} alt="Cover image" width={500} height={500} style={{ width: '100%', height: '10rem' }} />
              <p>{exerpt}</p>
              {index !== allPostsData.length - 1 && <div className="divider" />}
            </div>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}