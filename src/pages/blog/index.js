import Link from "next/link";
import Dynamic from "next/dynamic";
import Image from "next/image";

import {AuthContext} from '../../component/context' 
import Navbar from "../../component/navbar"

import styles from "./styles/bloghome.module.css"
import { useContext } from "react";

export default Dynamic(() => Promise.resolve(Blog), { ssr: false });
const Blog = () => {

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
  const product = [
    {
      thumbnail:
        "https://images.pexels.com/photos/18401184/pexels-photo-18401184/free-photo-of-a-man-standing-head-to-head-with-a-horse.jpeg",
      name: "logo design",
      category: "graphic",
      description:
        "The Sakhi Saheli training manual includes 9 meeting sessions which are to be carried out by the peer educators with the adolescent girls. This project looked at designing the first five sessions. These meetings will be conducted for adolescent girls in villages of Rajasthan to empower and support them. The content of the training manual includes a variety of topics ranging from uplifting the confidence of the girls to providing them sex education.",
      date: "wed 12 oct 2023",
      author: "sumit duary",
    },
    {
        thumbnail:
          "https://images.pexels.com/photos/18401184/pexels-photo-18401184/free-photo-of-a-man-standing-head-to-head-with-a-horse.jpeg",
        name: "logo design",
        category: "graphic",
        description:
          "The Sakhi Saheli training manual includes 9 meeting sessions which are to be carried out by the peer educators with the adolescent girls. This project looked at designing the first five sessions. These meetings will be conducted for adolescent girls in villages of Rajasthan to empower and support them. The content of the training manual includes a variety of topics ranging from uplifting the confidence of the girls to providing them sex education.",
        date: "wed 12 oct 2023",
        author: "sumit duary",
      },
      {
        thumbnail:
          "https://images.pexels.com/photos/18401184/pexels-photo-18401184/free-photo-of-a-man-standing-head-to-head-with-a-horse.jpeg",
        name: "logo design",
        category: "graphic",
        description:
          "The Sakhi Saheli training manual includes 9 meeting sessions which are to be carried out by the peer educators with the adolescent girls. This project looked at designing the first five sessions. These meetings will be conducted for adolescent girls in villages of Rajasthan to empower and support them. The content of the training manual includes a variety of topics ranging from uplifting the confidence of the girls to providing them sex education.",
        date: "wed 12 oct 2023",
        author: "sumit duary",
      },
      {
        thumbnail:
          "https://images.pexels.com/photos/18401184/pexels-photo-18401184/free-photo-of-a-man-standing-head-to-head-with-a-horse.jpeg",
        name: "logo design",
        category: "graphic",
        description:
          "The Sakhi Saheli training manual includes 9 meeting sessions which are to be carried out by the peer educators with the adolescent girls. This project looked at designing the first five sessions. These meetings will be conducted for adolescent girls in villages of Rajasthan to empower and support them. The content of the training manual includes a variety of topics ranging from uplifting the confidence of the girls to providing them sex education.",
        date: "wed 12 oct 2023",
        author: "sumit duary",
      },
      {
        thumbnail:
          "https://images.pexels.com/photos/18401184/pexels-photo-18401184/free-photo-of-a-man-standing-head-to-head-with-a-horse.jpeg",
        name: "logo design",
        category: "graphic",
        description:
          "The Sakhi Saheli training manual includes 9 meeting sessions which are to be carried out by the peer educators with the adolescent girls. This project looked at designing the first five sessions. These meetings will be conducted for adolescent girls in villages of Rajasthan to empower and support them. The content of the training manual includes a variety of topics ranging from uplifting the confidence of the girls to providing them sex education.",
        date: "wed 12 oct 2023",
        author: "sumit duary",
      },
      {
        thumbnail:
          "https://images.pexels.com/photos/18401184/pexels-photo-18401184/free-photo-of-a-man-standing-head-to-head-with-a-horse.jpeg",
        name: "logo design",
        category: "graphic",
        description:
          "The Sakhi Saheli training manual includes 9 meeting sessions which are to be carried out by the peer educators with the adolescent girls. This project looked at designing the first five sessions. These meetings will be conducted for adolescent girls in villages of Rajasthan to empower and support them. The content of the training manual includes a variety of topics ranging from uplifting the confidence of the girls to providing them sex education.",
        date: "wed 12 oct 2023",
        author: "sumit duary",
      },
      {
        thumbnail:
          "https://images.pexels.com/photos/18401184/pexels-photo-18401184/free-photo-of-a-man-standing-head-to-head-with-a-horse.jpeg",
        name: "logo design",
        category: "graphic",
        description:
          "The Sakhi Saheli training manual includes 9 meeting sessions which are to be carried out by the peer educators with the adolescent girls. This project looked at designing the first five sessions. These meetings will be conducted for adolescent girls in villages of Rajasthan to empower and support them. The content of the training manual includes a variety of topics ranging from uplifting the confidence of the girls to providing them sex education.",
        date: "wed 12 oct 2023",
        author: "sumit duary",
      },
      {
        thumbnail:
          "https://images.pexels.com/photos/18401184/pexels-photo-18401184/free-photo-of-a-man-standing-head-to-head-with-a-horse.jpeg",
        name: "logo design",
        category: "graphic",
        description:
          "The Sakhi Saheli training manual includes 9 meeting sessions which are to be carried out by the peer educators with the adolescent girls. This project looked at designing the first five sessions. These meetings will be conducted for adolescent girls in villages of Rajasthan to empower and support them. The content of the training manual includes a variety of topics ranging from uplifting the confidence of the girls to providing them sex education.",
        date: "wed 12 oct 2023",
        author: "sumit duary",
      },
      {
        thumbnail:
          "https://images.pexels.com/photos/18401184/pexels-photo-18401184/free-photo-of-a-man-standing-head-to-head-with-a-horse.jpeg",
        name: "logo design",
        category: "graphic",
        description:
          "The Sakhi Saheli training manual includes 9 meeting sessions which are to be carried out by the peer educators with the adolescent girls. This project looked at designing the first five sessions. These meetings will be conducted for adolescent girls in villages of Rajasthan to empower and support them. The content of the training manual includes a variety of topics ranging from uplifting the confidence of the girls to providing them sex education.",
        date: "wed 12 oct 2023",
        author: "sumit duary",
      },

      {
        thumbnail:
          "https://images.pexels.com/photos/18401184/pexels-photo-18401184/free-photo-of-a-man-standing-head-to-head-with-a-horse.jpeg",
        name: "logo design",
        category: "graphic",
        description:
          "The Sakhi Saheli training manual includes 9 meeting sessions which are to be carried out by the peer educators with the adolescent girls. This project looked at designing the first five sessions. These meetings will be conducted for adolescent girls in villages of Rajasthan to empower and support them. The content of the training manual includes a variety of topics ranging from uplifting the confidence of the girls to providing them sex education.",
        date: "wed 12 oct 2023",
        author: "sumit duary",
      },
       {
        thumbnail:
          "https://images.pexels.com/photos/18401184/pexels-photo-18401184/free-photo-of-a-man-standing-head-to-head-with-a-horse.jpeg",
        name: "logo design",
        category: "graphic",
        description:
          "The Sakhi Saheli training manual includes 9 meeting sessions which are to be carried out by the peer educators with the adolescent girls. This project looked at designing the first five sessions. These meetings will be conducted for adolescent girls in villages of Rajasthan to empower and support them. The content of the training manual includes a variety of topics ranging from uplifting the confidence of the girls to providing them sex education.",
        date: "wed 12 oct 2023",
        author: "sumit duary",
      },
  ];

return (
    <>
    <Navbar/>
    <main className="mainpagebody">
        <div className={styles.addblogbtn}>
            <p className={styles.text}>add a new blog</p>
            <Link href="/blog/upload">
            <button className={styles.addbtn}>add new</button>
            </Link>
        </div>
        <div className={styles.blogdatasection}>
            {product.map((item) => {
            return (
              <>
                <div className={styles.cardmainbody}>
                  <Image
                    src={item.thumbnail}
                    className={styles.imagesection}
                    width={0}
                    height={0}
                    alt={item.name}
                  />
                  <div className={styles.bodysection}>
                    <div className={styles.datecategorysection}>
                      <div className={styles.date}>{item.date}</div>
                      <div className={styles.category}>{item.category}</div>
                    </div>
                    <div className={styles.headersection}>{item.name}</div>
                    <div className={styles.textsection}>{item.description}</div>
                    <div className={styles.barsection}></div>
                    <div className={styles.btnsection}>
                      <Link href="#">
                        <button className={styles.btn}>review</button>
                      </Link>
                      <Link href="#">
                        <button className={styles.btn}>update</button>
                      </Link>
                      <Link href="#">
                        <button className={styles.btn}>delete</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
    </main>
    </>
)}