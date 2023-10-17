import dynamic from "next/dynamic";

import Navbar from "../component/navbar"

import styles from "../styles/upload.module.css"

export default dynamic(() => Promise.resolve(Upload), { ssr: false });
const Upload = () => {
return (
    <>
    <Navbar/>
    <main className="mainpagebody">
        upload page
    </main>
    </>
)}