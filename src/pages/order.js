import dynamic from "next/dynamic";
import { useContext } from "react";
import {AuthContext} from '../component/context' 
import Navbar from "../component/navbar"

import styles from "../styles/order.module.css"

export default dynamic(() => Promise.resolve(Order), { ssr: false });
const Order = () => {

    const {isAdmin} = useContext(AuthContext)
  if (isAdmin == "no" || !isAdmin)
    return (
      <>
        <div className="restrictedmainbody">
          <div className="restrictedbody">
            <h1 className="restrictedbodyh1">Restricted Web Page</h1>
            {/* <button onClick={() => loginPage()} className="restrictedbodybtn">Refresh</button> */}
          </div>
        </div>
      </>
    );

return (
    <>
    <Navbar/>
    <main className="mainpagebody">
        order page
    </main>
    </>
)}