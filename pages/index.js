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
        <article>
          <Link href="/">
            <img
              src="images/thumbnail01.jpg"
              className={styles.thumbnailImage}
            />
          </Link>
          <Link legacyBehavior href="/">
            <a className={utilStyle.boldText}>
              SSGとSSRの使い分けの場面はいつなのか？
            </a>
          </Link>
          <br />
          <small className={utilStyle.lightText}>February 23, 2020</small>
        </article>
        <article>
          <Link href="/">
            <img
              src="images/thumbnail02.jpg"
              className={styles.thumbnailImage}
            />
          </Link>
          <Link legacyBehavior href="/">
            <a className={utilStyle.boldText}>
              SSGとSSRの使い分けの場面はいつなのか？ 2
            </a>
          </Link>
          <br />
          <small className={utilStyle.lightText}>February 23, 2020</small>
        </article>
        <article>
          <Link href="/">
            <img
              src="images/thumbnail03.jpeg"
              className={styles.thumbnailImage}
            />
          </Link>
          <Link legacyBehavior href="/">
            <a className={utilStyle.boldText}>
              SSGとSSRの使い分けの場面はいつなのか？ 3
            </a>
          </Link>
          <br />
          <small className={utilStyle.lightText}>February 23, 2020</small>
        </article>
        <article>
          <Link href="/">
            <img
              src="images/thumbnail04.jpg"
              className={styles.thumbnailImage}
            />
          </Link>
          <Link legacyBehavior href="/">
            <a className={utilStyle.boldText}>
              SSGとSSRの使い分けの場面はいつなのか？ 4
            </a>
          </Link>
          <br />
          <small className={utilStyle.lightText}>February 23, 2020</small>
        </article>
      </div>
    </section>
  </Layout>
}
