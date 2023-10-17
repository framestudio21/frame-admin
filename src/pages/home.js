import dynamic from "next/dynamic";

import Navbar from "../component/navbar"

import styles from "../styles/home.module.css"

export default dynamic(() => Promise.resolve(Home), { ssr: false });
const Home = () => {
return (
    <>
    <Navbar/>
    <main className="mainpagebody">
        home page
    </main>
    </>
)}