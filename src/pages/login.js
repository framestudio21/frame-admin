import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useState, useEffect } from "react";

import styles from "../styles/login.module.css";

import logo from "../image/spacelogoblack.svg";

export default dynamic(() => Promise.resolve(Home), { ssr: false });
function Home() {

  const [formData, setFormData] = useState({});
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  }
  console.log(formData)

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
            loading="lazy"
          />
          <div className={styles.topsection}>
            <div className={styles.header}>welcome back admin</div>
            <div className={styles.text}>
              enter your credentials to access your account.
            </div>
          </div>
          <form method="POST" className={styles.bottomsection}>
            <input
              name="userid"
              className={styles.inputfield}
              type="text"
                    value={formData.userid || ""}
                    onChange={handleInputChange}
                    placeholder="enter your userid"
            />
            <input
              name="password"
              className={styles.inputfield}
              type="password"
                    value={formData.password || ""}
                    onChange={handleInputChange}
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
