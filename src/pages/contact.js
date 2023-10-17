import dynamic from "next/dynamic";

import Navbar from "../component/navbar"

import styles from "../styles/contact.module.css"

export default dynamic(() => Promise.resolve(Contact), { ssr: false });
const Contact = () => {
return (
    <>
    <Navbar/>
    <main className="mainpagebody">
        contact page
    </main>
    </>
)}