import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";

const name = "Hakuto site"      // Temporary!!
export const siteTitle = "Next.js blog"

function Layout({ children, home }) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header className={styles.header}>
                {home ? (
                    <>
                        <img
                            src="/images/Hakuto_logo.jpg"
                            className={`${utilStyles.borderCircle} ${styles.headerHomeImage}`}
                        />
                        <a
                            className={utilStyles.heading2Xl}
                            href="https://www.hakuto.co.jp/">
                            {name}
                        </a>
                    </>
                ) : (
                    <>
                        <img
                            src="/images/Hakuto_logo.jpg"
                            className={`${utilStyles.borderCircle} ${styles.headerImage}`}
                        />
                        <a
                            className={utilStyles.headingXl}
                            href="https://www.hakuto.co.jp/">
                            {name}
                        </a>
                    </>
                )}
            </header>
            <main>{children}</main>
        </div>
    );
}

export default Layout;