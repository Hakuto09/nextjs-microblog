import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import Layout from "@/components/Layout";
import utilStype from "../styles/utils.module.css"
export default function Home() {
  return <Layout>
    <a href="https://www.hakuto.co.jp/">Hakuto site (test)</a>
    <section className={utilStyle.headingMd}>
      <p>
        フルスタックエンジニアです。
      </p>
    </section>

    <section>
      <h2>📝エンジニアのブログ</h2>
      <div>
        <article>
          <Link href="/">
            <img src="images/thumbnail01.jpg" alt="" />
          </Link>
          <Link href="/">
            <a>SSGとSSRの使い分けの場面はいつなのか？</a>
          </Link>
          <br />
          <small>February 23, 2020</small>
        </article>
      </div>
    </section>
  </Layout>
}
