import Head from "next/head";
import styles from "./Layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Spacestagram: Image-sharing from the final frontier</title>
        <meta
          name="description"
          content="Image-sharing from the final frontier"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title} tabIndex={0}>Spacestagram</h1>
        <h2 tabIndex={0}>Image-sharing from the final frontier</h2>
        {children}
      </main>

      <footer className={styles.footer}>By Aiden Kerr</footer>
    </div>
  );
}
