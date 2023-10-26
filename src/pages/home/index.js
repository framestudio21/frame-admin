import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { BsFillArrowRightCircleFill } from 'react-icons/bs';

import Navbar from "../../component/navbar";
import UploadFooterBar from "../../component/uploadnavbar";
import TaptoTop from "../../component/taptotopbtn";

import styles from "./styles/home.module.css";

export default dynamic(() => Promise.resolve(Home), { ssr: false });
const Home = () => {
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
                
                {product.slice(0, 7).map((item) => {
                  return (
                    <div className={styles.cardbody}>
                    <Image src={item.thumbnail} width={0} height={0} className={styles.imagesection} alt={item.name}/>
                    <div className={styles.text}>
                    <BsFillArrowRightCircleFill />
                      <br />
                      <p>{item.name}</p>
                    </div>
                  </div>
                  )
                })}


                <Link href="/home/product" className={styles.seemorediv}>
                  <BsFillArrowRightCircleFill className={styles.icon}/>
                  <div className={styles.text}>
                  see more
                </div>
                </Link>


            </div>
          </div>



          <div className={styles.digitalartrowmaindiv}>
            <div className={styles.displaynamediv}>
              <div className={styles.text}>digital art</div>
            </div>
            <div className={styles.displayitemdiv}>


            {product.slice(0, 7).map((item) => {
                  return (
                    <div className={styles.cardbody}>
                    <Image src={item.thumbnail} width={0} height={0} className={styles.imagesection} alt={item.name}/>
                    <div className={styles.text}>
                    <BsFillArrowRightCircleFill />
                      <br />
                      <p>{item.name}</p>
                    </div>
                  </div>
                  )
                })}


                <Link href="/home/digitalart" className={styles.seemorediv}>
                  <BsFillArrowRightCircleFill className={styles.icon}/>
                  <div className={styles.text}>
                  see more
                </div>
                </Link>

            </div>
          </div>


          <div className={styles.aiartrowmaindiv}>
            <div className={styles.displaynamediv}>
              <div className={styles.text}>ai art</div>
            </div>
            <div className={styles.displayitemdiv}>

                
            {product.slice(0, 7).map((item) => {
                  return (
                    <div className={styles.cardbody}>
                    <Image src={item.thumbnail} width={0} height={0} className={styles.imagesection} alt={item.name}/>
                    <div className={styles.text}>
                    <BsFillArrowRightCircleFill />
                      <br />
                      <p>{item.name}</p>
                    </div>
                  </div>
                  )
                })}


                <Link href="/home/aiart" className={styles.seemorediv}>
                  <BsFillArrowRightCircleFill className={styles.icon}/>
                  <div className={styles.text}>
                  see more
                </div>
                </Link>

            </div>
          </div>


          <div className={styles.photographyrowmaindiv}>
            <div className={styles.displaynamediv}>
              <div className={styles.text}>photography</div>
            </div>
            <div className={styles.displayitemdiv}>

                
            {product.slice(0, 7).map((item) => {
                  return (
                    <div className={styles.cardbody}>
                    <Image src={item.thumbnail} width={0} height={0} className={styles.imagesection} alt={item.name}/>
                    <div className={styles.text}>
                    <BsFillArrowRightCircleFill />
                      <br />
                      <p>{item.name}</p>
                    </div>
                  </div>
                  )
                })}


                <Link href="/home/photography" className={styles.seemorediv}>
                  <BsFillArrowRightCircleFill className={styles.icon}/>
                  <div className={styles.text}>
                  see more
                </div>
                </Link>

            </div>
          </div>




        </div>
        <TaptoTop />
      </main>
    </>
  );
};

{
  /* <div className={styles.homemainbody}>
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
</div> */
}
