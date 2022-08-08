import React from 'react';
import Image from 'next/image';
import styles from '../styles/categorycomp.module.css';

function Categoryitems({ imageurl, cname }) {
  return (
    <div className={styles.catitems}>
      <div className={styles.image}>
        <img src={imageurl} width={30} height={30} />
      </div>
      <div>{cname}</div>
    </div>
  );
}

export default Categoryitems;
