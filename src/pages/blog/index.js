import Link from "next/link";
import dynamic from "next/dynamic";

import Navbar from "../../component/navbar"

import styles from "./styles/bloghome.module.css"

export default dynamic(() => Promise.resolve(Blog), { ssr: false });
const Blog = () => {
return (
    <>
    <Navbar/>
    <main className="mainpagebody">
        <div className={styles.addblogbtn}>
            <p className={styles.text}>add a new blog</p>
            <Link href="#">
            <button className={styles.addbtn}>add new</button>
            </Link>
        </div>
        <div className={styles.blogcard}>
            
        </div>
    </main>
    </>
)}