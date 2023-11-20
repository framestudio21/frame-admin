import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

import Navbar from "../../component/navbar";
import UploadFooterBar from "../../component/uploadnavbar";
import TaptoTop from "../../component/taptotopbtn";

import styles from "./styles/home.module.css";

import { AuthContext } from "../../component/context";

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
      date: "wed 12 oct 2023",
    },
    {
      thumbnail:
        "https://images.pexels.com/photos/18401184/pexels-photo-18401184/free-photo-of-a-man-standing-head-to-head-with-a-horse.jpeg",
      name: "logo design",
      category: "graphic",
      date: "wed 12 oct 2023",
    },
    {
      thumbnail:
        "https://images.pexels.com/photos/18401184/pexels-photo-18401184/free-photo-of-a-man-standing-head-to-head-with-a-horse.jpeg",
      name: "logo design",
      category: "graphic",
      date: "wed 12 oct 2023",
    },
    {
      thumbnail:
        "https://images.pexels.com/photos/18401184/pexels-photo-18401184/free-photo-of-a-man-standing-head-to-head-with-a-horse.jpeg",
      name: "logo design",
      category: "graphic",
      date: "wed 12 oct 2023",
    },
    {
      thumbnail:
        "https://images.pexels.com/photos/18401184/pexels-photo-18401184/free-photo-of-a-man-standing-head-to-head-with-a-horse.jpeg",
      name: "logo design",
      category: "graphic",
      date: "wed 12 oct 2023",
    },
    {
      thumbnail:
        "https://images.pexels.com/photos/18401184/pexels-photo-18401184/free-photo-of-a-man-standing-head-to-head-with-a-horse.jpeg",
      name: "logo design",
      category: "graphic",
      date: "wed 12 oct 2023",
    },
    {
      thumbnail:
        "https://images.pexels.com/photos/18401184/pexels-photo-18401184/free-photo-of-a-man-standing-head-to-head-with-a-horse.jpeg",
      name: "logo design",
      category: "graphic",
      date: "wed 12 oct 2023",
    },
    {
      thumbnail:
        "https://images.pexels.com/photos/18401184/pexels-photo-18401184/free-photo-of-a-man-standing-head-to-head-with-a-horse.jpeg",
      name: "logo design",
      category: "graphic",
      date: "wed 12 oct 2023",
    },
    {
      thumbnail:
        "https://images.pexels.com/photos/18401184/pexels-photo-18401184/free-photo-of-a-man-standing-head-to-head-with-a-horse.jpeg",
      name: "logo design",
      category: "graphic",
      date: "wed 12 oct 2023",
    },
    {
      thumbnail:
        "https://images.pexels.com/photos/18401184/pexels-photo-18401184/free-photo-of-a-man-standing-head-to-head-with-a-horse.jpeg",
      name: "logo design",
      category: "graphic",
      date: "wed 12 oct 2023",
    },
    {
      thumbnail:
        "https://images.pexels.com/photos/18401184/pexels-photo-18401184/free-photo-of-a-man-standing-head-to-head-with-a-horse.jpeg",
      name: "logo design",
      category: "graphic",
      date: "wed 12 oct 2023",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="mainpagebody">
        <UploadFooterBar />
        <div className={styles.homepagemainbody}>
          <div className={styles.productrowmaindiv}>
            <div className={styles.displaynamediv}>
              <div className={styles.text}>product</div>
            </div>
            <div className={styles.displayitemdiv}>
              {product.slice(0, 7).map((item, i) => {
                return (
                  <div className={styles.cardbody} key={i}>
                    <Image
                      src={item.thumbnail}
                      width={0}
                      height={0}
                      className={styles.imagesection}
                      alt={item.name}
                      loading="lazy"
                    />
                    <div className={styles.text}>
                      <BsFillArrowRightCircleFill />
                      <br />
                      <p>{item.name}</p>
                    </div>
                  </div>
                );
              })}

              <Link href="/home/product" className={styles.seemorediv}>
                <BsFillArrowRightCircleFill className={styles.icon} />
                <div className={styles.text}>see more</div>
              </Link>
            </div>
          </div>

          <div className={styles.digitalartrowmaindiv}>
            <div className={styles.displaynamediv}>
              <div className={styles.text}>digital art</div>
            </div>
            <div className={styles.displayitemdiv}>
              {product.slice(0, 7).map((item,i) => {
                return (
                  <div className={styles.cardbody} key={i}>
                    <Image
                      src={item.thumbnail}
                      width={0}
                      height={0}
                      className={styles.imagesection}
                      alt={item.name}
                    />
                    <div className={styles.text}>
                      <BsFillArrowRightCircleFill />
                      <br />
                      <p>{item.name}</p>
                    </div>
                  </div>
                );
              })}

              <Link href="/home/digitalart" className={styles.seemorediv}>
                <BsFillArrowRightCircleFill className={styles.icon} />
                <div className={styles.text}>see more</div>
              </Link>
            </div>
          </div>

          <div className={styles.aiartrowmaindiv}>
            <div className={styles.displaynamediv}>
              <div className={styles.text}>ai art</div>
            </div>
            <div className={styles.displayitemdiv}>
              {product.slice(0, 7).map((item,i) => {
                return (
                  <div className={styles.cardbody} key={i}>
                    <Image
                      src={item.thumbnail}
                      width={0}
                      height={0}
                      className={styles.imagesection}
                      alt={item.name}
                    />
                    <div className={styles.text}>
                      <BsFillArrowRightCircleFill />
                      <br />
                      <p>{item.name}</p>
                    </div>
                  </div>
                );
              })}

              <Link href="/home/aiart" className={styles.seemorediv}>
                <BsFillArrowRightCircleFill className={styles.icon} />
                <div className={styles.text}>see more</div>
              </Link>
            </div>
          </div>

          <div className={styles.photographyrowmaindiv}>
            <div className={styles.displaynamediv}>
              <div className={styles.text}>photography</div>
            </div>
            <div className={styles.displayitemdiv}>
              {product.slice(0, 7).map((item,i) => {
                return (
                  <div className={styles.cardbody} key={i}>
                    <Image
                      src={item.thumbnail}
                      width={0}
                      height={0}
                      className={styles.imagesection}
                      alt={item.name}
                    />
                    <div className={styles.text}>
                      <BsFillArrowRightCircleFill />
                      <br />
                      <p>{item.name}</p>
                    </div>
                  </div>
                );
              })}

              <Link href="/home/photography" className={styles.seemorediv}>
                <BsFillArrowRightCircleFill className={styles.icon} />
                <div className={styles.text}>see more</div>
              </Link>
            </div>
          </div>
        </div>
        <TaptoTop />
      </main>
    </>
  );
};