import dynamic from "next/dynamic";
import { useContext } from "react";
import {AuthContext} from '../component/context' 
import Navbar from "../component/navbar"

import styles from "../styles/contact.module.css"

export default dynamic(() => Promise.resolve(Contact), { ssr: false });
const Contact = () => {

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
    
    // sample data
    const data = [
        {
            firstname: "sumit",
            lastname: "duary",
            email: "duary.sumit21@gmail.com",
            city: "uluberia",
            phone: "+91 6290985252",
            subject: "i need a graphic design",
            category: "graphicdesign",
            massage: "The Sakhi Saheli training manual includes 9 meeting sessions which are to be carried out by the peer educators with the adolescent girls. This project looked at designing the first five sessions. These meetings will be conducted for adolescent girls in villages of Rajasthan to empower and support them. The content of the training manual includes a variety of topics ranging from uplifting the confidence of the girls to providing them sex education.",
            date: "wed 12 oct 2023",
            time: "21:10 pm"
        },
        {
            firstname: "sumit",
            lastname: "duary",
            email: "duary.sumit21@gmail.com",
            city: "uluberia",
            phone: "+91 6290985252",
            subject: "i need a graphic design",
            category: "graphicdesign",
            massage: "The Sakhi Saheli training manual includes 9 meeting sessions which are to be carried out by the peer educators with the adolescent girls. This project looked at designing the first five sessions. These meetings will be conducted for adolescent girls in villages of Rajasthan to empower and support them. The content of the training manual includes a variety of topics ranging from uplifting the confidence of the girls to providing them sex education.",
            date: "wed 12 oct 2023",
            time: "21:10 pm"
        },
        {
            firstname: "sumit",
            lastname: "duary",
            email: "duary.sumit21@gmail.com",
            city: "uluberia",
            phone: "+91 6290985252",
            subject: "i need a graphic design",
            category: "graphicdesign",
            massage: "The Sakhi Saheli training manual includes 9 meeting sessions which are to be carried out by the peer educators with the adolescent girls. This project looked at designing the first five sessions. These meetings will be conducted for adolescent girls in villages of Rajasthan to empower and support them. The content of the training manual includes a variety of topics ranging from uplifting the confidence of the girls to providing them sex education.",
            date: "wed 12 oct 2023",
            time: "21:10 pm"
        },
        {
            firstname: "sumit",
            lastname: "duary",
            email: "duary.sumit21@gmail.com",
            city: "uluberia",
            phone: "+91 6290985252",
            subject: "i need a graphic design",
            category: "graphicdesign",
            massage: "The Sakhi Saheli training manual includes 9 meeting sessions which are to be carried out by the peer educators with the adolescent girls. This project looked at designing the first five sessions. These meetings will be conducted for adolescent girls in villages of Rajasthan to empower and support them. The content of the training manual includes a variety of topics ranging from uplifting the confidence of the girls to providing them sex education.",
            date: "wed 12 oct 2023",
            time: "21:10 pm"
        },
        {
            firstname: "sumit",
            lastname: "duary",
            email: "duary.sumit21@gmail.com",
            city: "uluberia",
            phone: "+91 6290985252",
            subject: "i need a graphic design",
            category: "graphicdesign",
            massage: "The Sakhi Saheli training manual includes 9 meeting sessions which are to be carried out by the peer educators with the adolescent girls. This project looked at designing the first five sessions. These meetings will be conducted for adolescent girls in villages of Rajasthan to empower and support them. The content of the training manual includes a variety of topics ranging from uplifting the confidence of the girls to providing them sex education.",
            date: "wed 12 oct 2023",
            time: "21:10 pm"
        },
        {
            firstname: "sumit",
            lastname: "duary",
            email: "duary.sumit21@gmail.com",
            city: "uluberia",
            phone: "+91 6290985252",
            subject: "i need a graphic design",
            category: "graphicdesign",
            massage: "The Sakhi Saheli training manual includes 9 meeting sessions which are to be carried out by the peer educators with the adolescent girls. This project looked at designing the first five sessions. These meetings will be conducted for adolescent girls in villages of Rajasthan to empower and support them. The content of the training manual includes a variety of topics ranging from uplifting the confidence of the girls to providing them sex education.",
            date: "wed 12 oct 2023",
            time: "21:10 pm"
        },
        {
            firstname: "sumit",
            lastname: "duary",
            email: "duary.sumit21@gmail.com",
            city: "uluberia",
            phone: "+91 6290985252",
            subject: "i need a graphic design",
            category: "graphicdesign",
            massage: "The Sakhi Saheli training manual includes 9 meeting sessions which are to be carried out by the peer educators with the adolescent girls. This project looked at designing the first five sessions. These meetings will be conducted for adolescent girls in villages of Rajasthan to empower and support them. The content of the training manual includes a variety of topics ranging from uplifting the confidence of the girls to providing them sex education.",
            date: "wed 12 oct 2023",
            time: "21:10 pm"
        },
        {
            firstname: "sumit",
            lastname: "duary",
            email: "duary.sumit21@gmail.com",
            city: "uluberia",
            phone: "+91 6290985252",
            subject: "i need a graphic design",
            category: "graphicdesign",
            massage: "The Sakhi Saheli training manual includes 9 meeting sessions which are to be carried out by the peer educators with the adolescent girls. This project looked at designing the first five sessions. These meetings will be conducted for adolescent girls in villages of Rajasthan to empower and support them. The content of the training manual includes a variety of topics ranging from uplifting the confidence of the girls to providing them sex education.",
            date: "wed 12 oct 2023",
            time: "21:10 pm"
        },
        {
            firstname: "sumit",
            lastname: "duary",
            email: "duary.sumit21@gmail.com",
            city: "uluberia",
            phone: "+91 6290985252",
            subject: "i need a graphic design",
            category: "graphicdesign",
            massage: "The Sakhi Saheli training manual includes 9 meeting sessions which are to be carried out by the peer educators with the adolescent girls. This project looked at designing the first five sessions. These meetings will be conducted for adolescent girls in villages of Rajasthan to empower and support them. The content of the training manual includes a variety of topics ranging from uplifting the confidence of the girls to providing them sex education.",
            date: "wed 12 oct 2023",
            time: "21:10 pm"
        },
        {
            firstname: "sumit",
            lastname: "duary",
            email: "duary.sumit21@gmail.com",
            city: "uluberia",
            phone: "+91 6290985252",
            subject: "i need a graphic design",
            category: "graphicdesign",
            massage: "The Sakhi Saheli training manual includes 9 meeting sessions which are to be carried out by the peer educators with the adolescent girls. This project looked at designing the first five sessions. These meetings will be conducted for adolescent girls in villages of Rajasthan to empower and support them. The content of the training manual includes a variety of topics ranging from uplifting the confidence of the girls to providing them sex education.",
            date: "wed 12 oct 2023",
            time: "21:10 pm"
        },
        {
            firstname: "sumit",
            lastname: "duary",
            email: "duary.sumit21@gmail.com",
            city: "uluberia",
            phone: "+91 6290985252",
            subject: "i need a graphic design",
            category: "graphicdesign",
            massage: "The Sakhi Saheli training manual includes 9 meeting sessions which are to be carried out by the peer educators with the adolescent girls. This project looked at designing the first five sessions. These meetings will be conducted for adolescent girls in villages of Rajasthan to empower and support them. The content of the training manual includes a variety of topics ranging from uplifting the confidence of the girls to providing them sex education.",
            date: "wed 12 oct 2023",
            time: "21:10 pm"
        },
        {
            firstname: "sumit",
            lastname: "duary",
            email: "duary.sumit21@gmail.com",
            city: "uluberia",
            phone: "+91 6290985252",
            subject: "i need a graphic design",
            category: "graphicdesign",
            massage: "The Sakhi Saheli training manual includes 9 meeting sessions which are to be carried out by the peer educators with the adolescent girls. This project looked at designing the first five sessions. These meetings will be conducted for adolescent girls in villages of Rajasthan to empower and support them. The content of the training manual includes a variety of topics ranging from uplifting the confidence of the girls to providing them sex education.",
            date: "wed 12 oct 2023",
            time: "21:10 pm"
        },
        {
            firstname: "sumit",
            lastname: "duary",
            email: "duary.sumit21@gmail.com",
            city: "uluberia",
            phone: "+91 6290985252",
            subject: "i need a graphic design",
            category: "graphicdesign",
            massage: "The Sakhi Saheli training manual includes 9 meeting sessions which are to be carried out by the peer educators with the adolescent girls. This project looked at designing the first five sessions. These meetings will be conducted for adolescent girls in villages of Rajasthan to empower and support them. The content of the training manual includes a variety of topics ranging from uplifting the confidence of the girls to providing them sex education.",
            date: "wed 12 oct 2023",
            time: "21:10 pm"
        },
        {
            firstname: "sumit",
            lastname: "duary",
            email: "duary.sumit21@gmail.com",
            city: "uluberia",
            phone: "+91 6290985252",
            subject: "i need a graphic design",
            category: "graphicdesign",
            massage: "The Sakhi Saheli training manual includes 9 meeting sessions which are to be carried out by the peer educators with the adolescent girls. This project looked at designing the first five sessions. These meetings will be conducted for adolescent girls in villages of Rajasthan to empower and support them. The content of the training manual includes a variety of topics ranging from uplifting the confidence of the girls to providing them sex education.",
            date: "wed 12 oct 2023",
            time: "21:10 pm"
        },
        {
            firstname: "sumit",
            lastname: "duary",
            email: "duary.sumit21@gmail.com",
            city: "uluberia",
            phone: "+91 6290985252",
            subject: "i need a graphic design",
            category: "graphicdesign",
            massage: "The Sakhi Saheli training manual includes 9 meeting sessions which are to be carried out by the peer educators with the adolescent girls. This project looked at designing the first five sessions. These meetings will be conducted for adolescent girls in villages of Rajasthan to empower and support them. The content of the training manual includes a variety of topics ranging from uplifting the confidence of the girls to providing them sex education.",
            date: "wed 12 oct 2023",
            time: "21:10 pm"
        },
        {
            firstname: "sumit",
            lastname: "duary",
            email: "duary.sumit21@gmail.com",
            city: "uluberia",
            phone: "+91 6290985252",
            subject: "i need a graphic design",
            category: "graphicdesign",
            massage: "The Sakhi Saheli training manual includes 9 meeting sessions which are to be carried out by the peer educators with the adolescent girls. This project looked at designing the first five sessions. These meetings will be conducted for adolescent girls in villages of Rajasthan to empower and support them. The content of the training manual includes a variety of topics ranging from uplifting the confidence of the girls to providing them sex education.",
            date: "wed 12 oct 2023",
            time: "21:10 pm"
        },
        {
            firstname: "sumit",
            lastname: "duary",
            email: "duary.sumit21@gmail.com",
            city: "uluberia",
            phone: "+91 6290985252",
            subject: "i need a graphic design",
            category: "graphicdesign",
            massage: "The Sakhi Saheli training manual includes 9 meeting sessions which are to be carried out by the peer educators with the adolescent girls. This project looked at designing the first five sessions. These meetings will be conducted for adolescent girls in villages of Rajasthan to empower and support them. The content of the training manual includes a variety of topics ranging from uplifting the confidence of the girls to providing them sex education.",
            date: "wed 12 oct 2023",
            time: "21:10 pm"
        },
        {
            firstname: "sumit",
            lastname: "duary",
            email: "duary.sumit21@gmail.com",
            city: "uluberia",
            phone: "+91 6290985252",
            subject: "i need a graphic design",
            category: "graphicdesign",
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
            <div className={styles.header}>contact data</div>
            <div className={styles.contactdatabody}>
                {data.map((item) => {
                    return (
                        <div className={styles.cardbody}>
                            <div className={styles.datafield}><span className={styles.fieldname}>Client Name :</span>{item.firstname} {item.lastname}</div>
                            <div className={styles.datafield}><span className={styles.fieldname}>email :</span>{item.email}</div>
                            <div className={styles.datafield}><span className={styles.fieldname}>city :</span>{item.city}</div>
                            <div className={styles.datafield}><span className={styles.fieldname}>phone :</span>{item.phone}</div>
                            <div className={styles.datafield}><span className={styles.fieldname}>category :</span>{item.category}</div>
                            <div className={styles.datafield}><span className={styles.fieldname}>subject :</span>{item.subject}</div>
                            <div className={styles.datafield}><span className={styles.fieldname}>massage :</span>{item.massage}</div>
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