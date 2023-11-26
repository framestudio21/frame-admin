import dynamic from "next/dynamic";
import Image from "next/image"
import { useRouter } from "next/router";
import { useContext } from "react";
import { useEffect, useState } from "react";
import Navbar from "../component/navbar";

import { AuthContext } from "../component/context";

import styles from "../styles/contact.module.css";

import contactImage from "../image/chat.svg"

export default dynamic(() => Promise.resolve(Contact), { ssr: false });
const Contact = () => {

  const router = useRouter();
  const logout = () => {
    router.push("/");
  };


  //     const {isAdmin} = useContext(AuthContext)
  //   if (isAdmin == "no" || !isAdmin)
  //     return (
  //       <>
  //         <div className="restrictedmainbody">
  //           <div className="restrictedbody">
  //             <h1 className="restrictedbodyh1">Restricted Web Page</h1>
  //             {/* <button onClick={() => loginPage()} className="restrictedbodybtn">Refresh</button> */}
  //           </div>
  //         </div>
  //       </>
  //     );

  const [data, setData] = useState([]);
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    const url = process.env.NEXT_PUBLIC_API_URL + "/contact";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch(() => router.push("/404"));
  }, [refresh]);

  const deleteProduct = async (id) => {
    const isOkay = confirm("Are you sure to delete it?");
    if (isOkay) {
      fetch(process.env.NEXT_PUBLIC_API_URL+`/contact/${id}`, { method: "delete" })
        .then(() => alert("done"))
        .then(() => {
          if (refresh == true) {
            setRefresh(false)
          }
          else setRefresh(true)
        })
        .catch((err) => alert(err));
    }
  };

  return (
    <>
      <Navbar />
      <main className="mainpagebody">
        <div className={styles.contactpagemainbody}>
          <div className={styles.header}>contact data</div>
          <div className={styles.contactdatabody}>
            {data.map((item) => {
               const createdatdate = new Date(item.createdAt).toUTCString();
               const updatedatdate = new Date(item.updatedAt).toUTCString();
              return (
                <div className={styles.cardbody}>
                  <div className={styles.image}>
                    <Image className={styles.imageelement} src={contactImage} width={0} height={0} alt="frame-contact-chat-image"/>
                  </div>
                  <div className={styles.element}>
                    <div className={styles.datafield}>
                      <span className={styles.fieldname}>Client Name :</span>
                      {item.firstname} {item.lastname}
                    </div>
                    <div className={styles.datafield}>
                      <span className={styles.fieldname}>email :</span>
                      {item.email}
                    </div>
                    <div className={styles.datafield}>
                      <span className={styles.fieldname}>city :</span>
                      {item.city}
                    </div>
                    <div className={styles.datafield}>
                      <span className={styles.fieldname}>phone :</span>
                      {item.phone}
                    </div>
                    <div className={styles.datafield}>
                      <span className={styles.fieldname}>category :</span>
                      {item.category}
                    </div>
                    <div className={styles.datafield}>
                      <span className={styles.fieldname}>subject :</span>
                      {item.subject}
                    </div>
                    <div className={styles.datafield}>
                      <span className={styles.fieldname}>massage :</span>
                      {item.message}
                    </div>
                    <div className={styles.datafield}>
                      <span className={styles.fieldname}>date :</span>
                      {createdatdate}
                    </div>
                    <div className={styles.statusdiv}>
                      <form className={styles.formdiv}>
                      <select name="status" className={styles.selectinputdiv}>
                        <option value=" " className={styles.optionfield}>select query status</option>
                        <option value="pending" className={styles.optionfield}>pending status</option>
                        <option value="processing" className={styles.optionfield}>processing status</option>
                        <option value="complete" className={styles.optionfield}>complete status</option>
                      </select>
                      <button type="submit" className={styles.statusbtn}>set status</button>
                      </form>
                    </div>
                    <button className={styles.deletebtn} onClick={() => deleteProduct(item._id)} >delete</button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
};
