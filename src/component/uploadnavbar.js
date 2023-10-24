import Link from "next/link"
import { IoMdArrowDroprightCircle } from 'react-icons/io';

import styles from "./styles/uploadnavbar.module.css"

export default function UploadFooterBar() {
  return (
    <>
    <div className={styles.uploadnavbarmaindiv}>
        <div className={styles.text}>upload and a new project</div>
        <Link className={styles.link} href="/upload">
            <span>upload</span>
            <IoMdArrowDroprightCircle className={styles.icon}/>
        </Link>
    </div>
    </>
  )
}