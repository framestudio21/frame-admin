import dynamic from "next/dynamic";

import styles from "../styles/home.module.css"
export default dynamic(() => Promise.resolve(Home), { ssr: false });
const Home = () => {
return (
    <>
    home page
    </>
)}