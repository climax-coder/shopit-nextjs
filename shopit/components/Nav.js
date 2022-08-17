import React, { useState } from 'react';
import styles from '../styles/Nav.module.css';
import { FaShoppingBasket, FaHeart, FaSearch, FaUserAlt } from 'react-icons/fa';
import Dropdown from './DropdownBtn/Dropdown';

function Nav() {
  return (
    <div className={styles.nav}>
      <div className={styles.link}>
        <a href="/">Shopit</a>
      </div>
      <div className={styles.search}>
        <input type="text" className={styles.searchinput} />
        <button className={styles.searchbtn}>
          <FaSearch />
        </button>
      </div>
      <div className={styles.icons}>
        <Dropdown />
        <button>
          <FaHeart />
        </button>
        <button>
          <FaShoppingBasket />
        </button>
      </div>
    </div>
  );
}

export default Nav;
