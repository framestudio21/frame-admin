import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useState, useContext } from "react";
import {useRouter} from 'next/router'
import styles from "../styles/login.module.css";

import logo from "../image/spacelogoblack.svg";
import { AuthContext } from '../component/context'

export default dynamic(() => Promise.resolve(Home), { ssr: false });
const Home = () => {
  
  const router = useRouter()
  const [formData, setFormData] = useState({});
  const { setIsAdmin } = useContext(AuthContext);

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  }

  const PostData = async (e) => {
    e.preventDefault();

    const {email, pass} = formData
    console.log(email + " and " +pass);

    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/admin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        pass,
      }),
    });
    const data = await res.json();
    if (data.status === 200) {
      alert(data.success);
      setIsAdmin("yes");
      router.push("/home");
      setFormData({})
    } else if (data.status) {
      setIsAdmin("no");
      alert(data.failed);
    }
  };

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
          <form method="POST" className={styles.bottomsection} onSubmit={PostData}>
            <input
              name="email"
              className={styles.inputfield}
              type="text"
                    value={formData.email || ""}
                    onChange={handleInputChange}
                    placeholder="enter your user id"
            />
            <input
              name="pass"
              className={styles.inputfield}
              type="password"
                    value={formData.pass || ""}
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
