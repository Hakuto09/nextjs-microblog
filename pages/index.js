import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import Layout from "@/components/Layout";
import styles from "../styles/Home.module.css"
import utilStyle from "../styles/utils.module.css"
import { getPostsData } from "../lib/posts";


// SSGの場合
export async function getStaticProps() {
  const func = 'getStaticProps';

  const allPostsData = getPostsData();  // id, titl, date, thumbnail
  console.log(func, ' allPostsData ', allPostsData);

  return {
    props: {
      allPostsData,
    },
  };
}


export default function Home({ allPostsData }) {
  return <Layout>
    <a href="https://www.hakuto.co.jp/">Hakuto site (test)</a>
    <section className={utilStyle.headingMd}>
      <p>
        フルスタックエンジニアです。
      </p>
    </section>

    <section>
      <h2>📝エンジニアのブログ</h2>
      <div className={styles.grid}>
        {allPostsData.map(({ id, title, date, thumbnail }) => (
          <article key={id}>
            <Link href={`/posts/${id}`}>
              <img src={`${thumbnail}`} className={styles.thumbnailImage}/>
            </Link>
            <Link legacyBehavior href={`/posts/${id}`}>
              <a className={utilStyle.boldText}>{title}</a>
            </Link>
            <br />
            <small className={utilStyle.lightText}>{date}</small>
          </article>
        ))}
      </div>
    </section>
  </Layout>
}
