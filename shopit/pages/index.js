import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';
import Products from '../components/Products/Products';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Shopit</title>
        <meta name="description" content="An ecommerce website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <Layout>
          <Products />
        </Layout>
      </div>
    </div>
  );
}
