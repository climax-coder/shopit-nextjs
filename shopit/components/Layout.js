import React from 'react';
import Nav from './Nav';
import Category from './Category/Category';
import styles from '../styles/Layout.module.css';

function Layout({ children }) {
  return (
    <div>
      <Nav />
      <Category />
      <div className={styles.margin}>{children}</div>
    </div>
  );
}

export default Layout;
