import { BsArrowBarLeft } from "react-icons/bs";
import { useRouter } from "next/router";
import React from "react";

import styles from "./styles/backbtn.module.css";
export default function backbtn() {
  const router = useRouter();
  return (
    <>
      <button onClick={() => router.back()} className={styles.closebtn}>
        <BsArrowBarLeft className={styles.leftarrow} />
        Back
      </button>
    </>
  );
}
