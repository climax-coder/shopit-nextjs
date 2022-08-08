import React from 'react';
import Client from '../../Apollo_client';
import Head from 'next/head';
import { productslug, getProductbySlug } from '../../Graphql/queries';
import Layout from '../../components/Layout';
import Markdown2Html from '../../utils/markdconv';
import styles from '../../styles/ProdItem.module.css';

function Product({ data }) {
  return (
    <div>
      <Head>
        <title>{data.products.data[0].attributes.pname}</title>
      </Head>
      <Layout>
        {data.products.data.map((prod) => (
          <div key={prod.attributes.pid} className={styles.proditem}>
            <div className={styles.image}>
              <img
                src={`http://localhost:1337${prod.attributes.pimage.data[0].attributes.url}`}
              />
            </div>
            <div>
              <div className={styles.pname}>{prod.attributes.pname}</div>
              <div className={styles.price}>Ksh {prod.attributes.price}</div>
              <button className={styles.cartbtn}>Add To Cart</button>
              <div className={styles.desc}>Descriptions</div>
              <div
                dangerouslySetInnerHTML={Markdown2Html(
                  prod.attributes.pdescription
                )}
              />
            </div>
          </div>
        ))}
      </Layout>
    </div>
  );
}

export async function getStaticPaths() {
  const { data } = await Client.query({ query: productslug });

  const paths = data.products.data.map((prod) => ({
    params: { slug: prod.attributes.pslug },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { data } = await Client.query({
    query: getProductbySlug(params.slug),
  });
  return {
    props: {
      data,
    },
  };
}

export default Product;
