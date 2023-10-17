import dynamic from "next/dynamic";

import Navbar from "../component/navbar"

import styles from "../styles/data.module.css"

export default dynamic(() => Promise.resolve(Data), { ssr: false });
const Data = () => {
return (
    <>
    <Navbar/>
    <main className="mainpagebody">
        data page
    </main>
    </>
)}