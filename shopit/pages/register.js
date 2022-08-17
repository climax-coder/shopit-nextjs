import React from 'react';
import { SignupUser } from '../lib/auth';
import styles from '../styles/Register.module.css';

function Register() {
  function handleSubmit(e) {
    e.preventDefault();
    const { username, password, email } = e.target.elements;
    SignupUser(username.value, email.value, password.value);
  }

  return (
    <div className={styles.register}>
      <div className={styles.fomitems}>
        <div className={styles.logo}>Shopit</div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputs}>
            <label className={styles.label}>Email:</label>
            <input
              className={styles.input}
              type={'email'}
              placeholder="Email"
              id="email"
            />
          </div>
          <div className={styles.inputs}>
            <label className={styles.label}>Username:</label>
            <input
              className={styles.input}
              type={'text'}
              placeholder="Username"
              id="username"
            />
          </div>
          <div className={styles.inputs}>
            <label className={styles.label}>Password:</label>
            <input
              className={styles.input}
              type={'password'}
              placeholder="Password"
              id="password"
            />
          </div>
          <div className={styles.btns}>
            <button type="submit" className={styles.fgt}>
              Have an account ?
            </button>
            <button type="submit" className={styles.lgn}>
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
