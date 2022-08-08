import React from 'react';
import { useQuery } from '@apollo/client';
import { productsquery } from '../../Graphql/queries';
import styles from '../../styles/Product.module.css';
import ProductItem from './productitem';

function Products() {
  const { loading, error, data } = useQuery(productsquery);
  if (loading) return <div>loading...</div>;
  if (error) return <div>{error.message}</div>;
  return (
    <div className={styles.product}>
      {data.products.data.map((prod) => (
        <div key={prod.pid}>
          <ProductItem
            imageurl={`http://localhost:1337${prod.attributes.pimage.data[0].attributes.url}`}
            pname={prod.attributes.pname}
            price={prod.attributes.price}
            slug={prod.attributes.pslug}
          />
        </div>
      ))}
    </div>
  );
}

export default Products;
