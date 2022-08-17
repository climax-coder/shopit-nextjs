import React, { useState } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import Link from 'next/link';
import styles from './styles/Dropdown.module.css';

function Dropdown() {
  const [click, setClick] = useState(false);
  function toggleClick() {
    setClick(!click);
  }
  return (
    <div className={styles.dropdown}>
      <button onClick={toggleClick} className={styles.dropbtn}>
        <FaUserAlt />
      </button>
      <div className={click ? styles.clicked : styles.unclicked}>
        <Link href={'/login'}>Login</Link>
        <Link href={'/register'}>Signup</Link>
      </div>
    </div>
  );
}

export default Dropdown;
