import { GetStaticPaths, GetStaticProps } from "next";
import { getAllPostIds, getPostsData } from "@/lib/post";
import Head from "next/head";
import postStyles from "@/styles/Post.module.css";

interface Post {
  id: string;
  title: string;
  date: string;
  contentHtml: string;
}

export default function Post({ postData }: { postData: Post }) {
  //   console.log(postData);
  return (
    <div className={postStyles.container}>
      <Head>
        <title> {postData.title}</title>
      </Head>
      <article>
        <h1 className={postStyles.headingLg}>{postData.title}</h1>
        <div className={postStyles.lightText}>{postData.date}</div>
        <div
          className={postStyles.listItem}
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
      </article>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  // [{params: {id: 'pre-rendering'}},{params: {id: 'ssg-ssr'}}]
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostsData(params?.id as string);
  return {
    props: { postData },
  };
};
