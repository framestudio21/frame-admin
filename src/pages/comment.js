import dynamic from "next/dynamic";

import Navbar from "../component/navbar"

import styles from "../styles/comment.module.css"

export default dynamic(() => Promise.resolve(Comment), { ssr: false });
const Comment = () => {
return (
    <>
    <Navbar/>
    <main className="mainpagebody">
        Comment data page
    </main>
    </>
)}