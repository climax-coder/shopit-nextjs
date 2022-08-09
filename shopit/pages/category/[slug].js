import React from 'react';
import Head from 'next/head';
import { categoryslug, getCategorybySlug } from '../../Graphql/queries';
import Client from '../../Apollo_client';
import ProductItem from '../../components/Products/productitem';
import Layout from '../../components/Layout';
import styles from '../../styles/Product.module.css';

function CategoryItem({ data }) {
  return (
    <div>
      <Head>
        <title>{data.categories.data[0].attributes.cslug}</title>
      </Head>
      <Layout>
        <div className={styles.product}>
          {data.categories.data[0].attributes.products.data.map((prod) => (
            <div key={prod.id}>
              <ProductItem
                imageurl={`http://localhost:1337${prod.attributes.pimage.data[0].attributes.url}`}
                pname={prod.attributes.pname}
                price={prod.attributes.price}
                slug={prod.attributes.pslug}
              />
            </div>
          ))}
        </div>
      </Layout>
    </div>
  );
}

export async function getStaticPaths() {
  const { data } = await Client.query({ query: categoryslug });

  const paths = data.categories.data.map((categ) => ({
    params: { slug: categ.attributes.cslug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { data } = await Client.query({
    query: getCategorybySlug(params.slug),
  });

  return {
    props: {
      data,
    },
  };
}

export default CategoryItem;
