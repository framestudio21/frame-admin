import dynamic from "next/dynamic";

import Navbar from "../component/navbar"

import styles from "../styles/comment.module.css"

export default dynamic(() => Promise.resolve(Comment), { ssr: false });
const Comment = () => {

    // sample data
    const data = [
        {
            firstname: "sumit",
            lastname: "duary",
            email: "duary.sumit21@gmail.com",
            reference: "http://localhost:3000/contact",
            massage: "The Sakhi Saheli training manual includes 9 meeting sessions which are to be carried out by the peer educators with the adolescent girls. This project looked at designing the first five sessions. These meetings will be conducted for adolescent girls in villages of Rajasthan to empower and support them. The content of the training manual includes a variety of topics ranging from uplifting the confidence of the girls to providing them sex education.",
            date: "wed 12 oct 2023",
            time: "21:10 pm"
        },
    ]
return (
    <>
    <Navbar/>
    <main className="mainpagebody">
        <div className={styles.contactpagemainbody}>
            <div className={styles.header}>comment data</div>
            <div className={styles.contactdatabody}>
                {data.map((item) => {
                    return (
                        <div className={styles.cardbody}>
                            <div className={styles.datafield}><span className={styles.fieldname}>massage :</span>{item.massage}</div>
                            <div className={styles.datafield}><span className={styles.fieldname}>Client Name :</span>{item.firstname} {item.lastname}</div>
                            <div className={styles.datafield}><span className={styles.fieldname}>email :</span>{item.email}</div>
                            <div className={styles.datafield}><span className={styles.fieldname}>reference :</span>{item.reference}</div>
                            <div className={styles.datafield}><span className={styles.fieldname}>date :</span>{item.date}</div>
                            <div className={styles.datafield}><span className={styles.fieldname}>time :</span>{item.time}</div>
                            <button className={styles.deletebtn}>delete</button>
                        </div>
                    )
                })}
            </div>
        </div>
    </main>
    </>
)}