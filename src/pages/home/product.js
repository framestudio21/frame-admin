import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import {AuthContext} from '../../component/context' 
import Navbar from "../../component/navbar";
import UploadFooterBar from "../../component/uploadnavbar";
import TaptoTop from "../../component/taptotopbtn";

import styles from "./styles/subpage.module.css";

export default dynamic(() => Promise.resolve(Home), { ssr: false });
const Home = () => {

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
      <Navbar />
      <main className="mainpagebody">
        <UploadFooterBar />
        <div className={styles.subpagemainbody}>
          
          <div className={styles.filternav}>
            <button className={styles.filterbtn}>all</button>
            <button className={styles.filterbtn}>graphic</button>
            <button className={styles.filterbtn}>product</button>
          </div>

          <div className={styles.cardmainbody}>
          {product.map((item, index) => {
            return (
              <>
                <div className={styles.cardbody} key={index}>
                  <Image
                    src={item.thumbnail}
                    className={styles.imagesection}
                    width={0}
                    height={0}
                    alt={item.name}
                    loading="lazy"
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
        </div>
        <TaptoTop />
      </main>
    </>
  );
};
