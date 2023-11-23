import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { useRouter} from "next/router"
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

  const router = useRouter()
  const logout = () => {
    router.push("/");
  }

  const {isAdmin} = useContext(AuthContext)
  if (isAdmin == "no" || !isAdmin)
    return (
      <>
        <div className="restrictedmainbody">
          <div className="restrictedbody">
            <h1 className="restrictedbodyh1">Restricted Web Page</h1>
            <button onClick={() => logout()} className="restrictedbodybtn">Refresh</button>
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

  // home page product api data
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const url = process.env.NEXT_PUBLIC_API_URL + "/product";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch(() => router.push("/404"));
  }, []);

  return (
    <>
      <Navbar />
      <main className="mainpagebody">
        <UploadFooterBar />
        <div className={styles.homepagemainbody}>

          {/* product div */}
          <div className={styles.productrowmaindiv}>
            <div className={styles.displaynamediv}>
              <div className={styles.text}>product</div>
            </div>
            <div className={styles.displayitemdiv}>
              {products.slice(0, 7).map((item, i) => {
                return (
                  <div className={styles.cardbody} key={i}>
                    <Image
                      src={item.thumbnail}
                      width={0}
                      height={0}
                      className={styles.imagesection}
                      alt={item.title}
                      loading="lazy"
                    />
                    <div className={styles.text}>
                      <BsFillArrowRightCircleFill />
                      <br />
                      <p>{item.title}</p>
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

          {/* digital art div */}
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

          {/* ai art div */}
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

          {/* photography div */}
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