import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import homeStyles from "@/styles/Home.module.css";
import { getSortedPostsData } from "@/lib/post";

interface allPost {
  id: string;
  title: string;
  date: string;
}

export default function Home({ allPostData }: { allPostData: allPost[] }) {
  return (
    <div className={homeStyles.container}>
      <Head>
        <title>NextJS_Typescript</title>
        <meta name="description" content="Generated by NextJS_Typescript app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={homeStyles.headingMd}>
        <p>[ssiking91 Introduction]</p>
        <br />
        <p>(This is a website)</p>
      </section>
      <section className={homeStyles.headingMd}>
        <h2
          className={homeStyles.headingLg}
          //
        >
          Blog
        </h2>
        <ul
          className={homeStyles.list}
          //
        >
          {allPostData?.map(({ id, title, date }) => {
            return (
              <li key={id} className={homeStyles.listItem}>
                <Link href={`posts/${id}`}>{title}</Link>
                <br />
                <small className={homeStyles.lightText}>{date}</small>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostData = getSortedPostsData();

  return {
    props: { allPostData }, // will be passed to the page component as props
  };
};
