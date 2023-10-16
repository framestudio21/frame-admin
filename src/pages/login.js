import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

import styles from "../styles/login.module.css";

import logo from "../image/spacelogoblack.svg";

export default dynamic(() => Promise.resolve(Home), { ssr: false });
function Home() {

  return (
    <>
      <div className={styles.mainbody}>
        <div className={styles.formbody}>
          <Image
            src={logo}
            className={styles.logo}
            alt="frame-logo"
            width={0}
            height={0}
          />
          <div className={styles.topsection}>
            <div className={styles.header}>welcome back admin</div>
            <div className={styles.text}>
              enter your credentials to access your account.
            </div>
          </div>
          <form className={styles.bottomsection}>
            <input
              name="userid"
              className={styles.inputfield}
              type="text"
              placeholder="enter your userid"
            />
            {/* <input name="email" className={styles.inputfield} type="email" placeholder="enter your email"/> */}
            <input
              name="password"
              className={styles.inputfield}
              type="password"
              placeholder="enter your password"
            />
            <button type="submit" className={styles.submitbtn}>
              login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
