import dynamic from "next/dynamic";

import Navbar from "../../component/navbar"

import styles from "./styles/upload.module.css"

export default dynamic(() => Promise.resolve(Advertisement), { ssr: false });
const Advertisement = () => {
return (
    <>
    <Navbar/>
    <main className="mainpagebody">
        advertisement upload page
    </main>
    </>
)}