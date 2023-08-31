import Head from "next/head";
import Link from "next/link";
import styles from "@/styles/styles.module.scss";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Stockopedia Challenge</title>
        <meta
          name="description"
          content="Stockopedia Challenge - Front-end Technical Test"
        />
      </Head>
      <section className={styles.portfolio__wrapper}>
        <div className={styles.portfolio__content}>
          <h1 className={styles.title}>Welcome to Portfolio Page</h1>
          <Link href="/portfolio/1" className={styles.link}>
            Portfolio Page
          </Link>
        </div>
      </section>
    </>
  );
}
