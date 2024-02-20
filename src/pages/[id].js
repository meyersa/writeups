/* 
 * Slug matching page for all markdown posts
 * Uses the internal API to render pages when called
 * Uses the internal API to get all page data when rendered originally
 */

import Layout from '../components/layout';
import { getAllPostIds, getPostData } from '../lib/posts';
import Date from '../components/date';
import Author from '../components/author';
import Image from 'next/image';
import Flex from '../components/flex';

export default function Post({ postData }) {
  return (
    <Layout data={postData.title}>
      <div className="content">
        <Flex>
          <div className="left">
            <h1>{postData.title}</h1>
            <Date dateString={postData.date} />
          </div>
          <div className="right">
            <Author author={[postData.author, postData.authorImg, postData.authorLink]} />
          </div>
        </Flex>
        <Image src={postData.image} alt="Cover image" width={500} height={500} style={{ width: '100%', height: '15rem' }} />
        <div className="innerHTML" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}