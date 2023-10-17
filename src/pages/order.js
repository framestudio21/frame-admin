import dynamic from "next/dynamic";

import Navbar from "../component/navbar"

import styles from "../styles/order.module.css"

export default dynamic(() => Promise.resolve(Order), { ssr: false });
const Order = () => {
return (
    <>
    <Navbar/>
    <main className="mainpagebody">
        order page
    </main>
    </>
)}