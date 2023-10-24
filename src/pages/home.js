import dynamic from "next/dynamic";

import Navbar from "../component/navbar"
import UploadFooterBar from "../component/uploadnavbar";
import TaptoTop from "../component/taptotopbtn"

import styles from "../styles/home.module.css"

export default dynamic(() => Promise.resolve(Home), { ssr: false });
const Home = () => {
return (
    <>
    <Navbar/>
    <main className="mainpagebody">
    <UploadFooterBar/>
        <div className={styles.homemainbody}>
            home page<br/>
        </div>
        <TaptoTop/>
    </main>
    </>
)}