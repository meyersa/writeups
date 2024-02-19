import Layout from '../components/layout';
import { getAllPostIds, getPostData } from '../lib/posts';
import Date from '../components/date';
import Author from '../components/author';
import Image from 'next/image'

export default function Post({ postData }) {
  return (
    <Layout data={postData.title}>
      <div className="content">
        <h1>{postData.title}</h1>
        <Image src={postData.image} alt="Cover image" width={500} height={500} style={{width: '100%', height: '20rem'}} />
        <div>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        <Author author={[postData.author, postData.authorImg ]} />
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