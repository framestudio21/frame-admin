import dynamic from "next/dynamic";

import Navbar from "../component/navbar"

import styles from "../styles/blog.module.css"

export default dynamic(() => Promise.resolve(Blog), { ssr: false });
const Blog = () => {
return (
    <>
    <Navbar/>
    <main className="mainpagebody">
        blog page
    </main>
    </>
)}