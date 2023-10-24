import dynamic from "next/dynamic";
import Link from "next/link";
import Slider from 'react-slick';
import Image from "next/image";

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import Navbar from "../../component/navbar";

import styles from "./styles/advertisement.module.css";

export default dynamic(() => Promise.resolve(Advertisement), { ssr: false });
const Advertisement = () => {
    // slider settings
    var settings = {
        // dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        speed: 500,
        pauseOnHover: true,
        focusOnSelect: true,
        initialSlide: 0,
        arrows: false,
      };

    //   sample data
    const data = [
        {
            name: "logo design offer",
            thumbnail: "https://images.pexels.com/photos/18047275/pexels-photo-18047275/free-photo-of-hands-with-wristwatch.jpeg",
            date: "wed 21 oct 2023",
            time: "21:09 pm",
            category: "graphic",
            author: "sumit daury",
            tag: "logo design"
        },
        {
            name: "forum website design offer",
            thumbnail: "https://images.pexels.com/photos/5635102/pexels-photo-5635102.jpeg",
            date: "wed 21 oct 2023",
            time: "21:09 pm",
            category: "website",
            author: "gourav daury",
            tag: "logo design"
        },
        {
            name: "typography design offer",
            thumbnail: "https://images.pexels.com/photos/14730188/pexels-photo-14730188.jpeg",
            date: "wed 21 oct 2023",
            time: "21:09 pm",
            category: "graphic",
            author: "gourav daury",
            tag: "logo design"
        },
        {
            name: "typography design offer",
            thumbnail: "https://images.pexels.com/photos/2817868/pexels-photo-2817868.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            date: "wed 21 oct 2023",
            time: "21:09 pm",
            category: "website",
            author: "gourav daury",
            tag: "logo design"
        },
        {
            name: "forum website design offer",
            thumbnail: "https://images.pexels.com/photos/5635102/pexels-photo-5635102.jpeg",
            date: "wed 21 oct 2023",
            time: "21:09 pm",
            category: "website",
            author: "gourav daury",
            tag: "logo design"
        },
        {
            name: "typography design offer",
            thumbnail: "https://images.pexels.com/photos/2817868/pexels-photo-2817868.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            date: "wed 21 oct 2023",
            time: "21:09 pm",
            category: "website",
            author: "gourav daury",
            tag: "logo design"
        },
        {
            name: "logo design offer",
            thumbnail: "https://images.pexels.com/photos/18047275/pexels-photo-18047275/free-photo-of-hands-with-wristwatch.jpeg",
            date: "wed 21 oct 2023",
            time: "21:09 pm",
            category: "graphic",
            author: "sumit daury",
            tag: "logo design"
        },
        {
            name: "typography design offer",
            thumbnail: "https://images.pexels.com/photos/2817868/pexels-photo-2817868.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            date: "wed 21 oct 2023",
            time: "21:09 pm",
            category: "website",
            author: "gourav daury",
            tag: "logo design"
        },
    ]
  return (
    <>
      <Navbar />
      <main className="mainpagebody">
      <div className={styles.advertisement}>
        {/* advertisement top navbar */}
        <div className={styles.advertisementtopnavbar}>
          <div className={styles.text}>add a new addvertisement</div>
          <Link href="/advertisement/upload">
            <button className={styles.btn}>add new</button>
          </Link>
        </div>
        <div className={styles.advertisementbody}>
            <div className={styles.advertisementcarousel}>
                <Slider {...settings} className={styles.sliderbody}>
                    {data.map((item) => {
                        return (
                            <>
                            <Image src={item.thumbnail} alt={item.name} width={0} height={0} className={styles.sliderimage}/>
                            </>
                        )
                    })}
                </Slider>
            </div>
            <div className={styles.advertisementitem}>
                {data.map((item) => {
                    return (
                        <>
                        <div className={styles.advertisementcarddiv}>
                            <Image src={item.thumbnail} width={0} height={0} alt={item.name} className={styles.cardimage}/>
                            <div className={styles.cardbody}>
                                <div className={styles.datetimesection}>
                                    <div className={styles.date}>{item.date}</div>
                                    <div className={styles.date}>{item.time}</div>
                                </div>
                                <div className={styles.headersection}>{item.name}</div>
                                <div className={styles.categorytagsection}>
                                    <div className={styles.category}>category : {item.category}</div>
                                <div className={styles.tag}>tag : {item.tag}</div>
                                </div>
                                <div className={styles.btnsection}>
                                    <button className={styles.deletebtn}>delete</button>
                                </div>
                            </div>
                        </div>
                        </>
                    )
                })}
            </div>
        </div>
      </div>
      </main>
    </>
  );
};
