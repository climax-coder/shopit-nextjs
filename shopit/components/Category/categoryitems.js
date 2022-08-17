import React from 'react';
import Link from 'next/link';
import styles from '../../styles/categorycomp.module.css';

function Categoryitems({ imageurl, cname, slug }) {
  return (
    <Link href={`/category/${slug}`}>
      <div className={styles.catitems}>
        <div className={styles.image}>
          <img src={imageurl} width={30} height={30} />
        </div>
        <div>{cname}</div>
      </div>
    </Link>
  );
}

export default Categoryitems;
