import Head from 'next/head';
import styles from './Layout.module.css';
import Link from 'next/link';

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
        <Link href="/">
          <a className={styles.title}>
            <h1 tabIndex={0}>
              Spacestagram
            </h1>
          </a>
        </Link>
        <h2 tabIndex={0}>Image-sharing from the final frontier</h2>
        {children}
      </main>

      <footer className={styles.footer}>By Aiden Kerr</footer>
    </div>
  );
}
