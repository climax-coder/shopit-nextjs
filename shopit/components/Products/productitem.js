import React from 'react';
import Link from 'next/link';
import styles from '../../styles/Product.module.css';

function ProductItem({ imageurl, pname, price, slug }) {
  return (
    <Link href={`/product/${slug}`}>
      <div className={styles.pitem}>
        <div className={styles.image}>
          <img src={imageurl} />
        </div>
        <div className={styles.pname}>{pname}</div>
        <div className={styles.pricetag}>{`Ksh ${price}`}</div>
      </div>
    </Link>
  );
}

export default ProductItem;
