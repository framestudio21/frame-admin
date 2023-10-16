import React from "react";
import dynamic from "next/dynamic";
import Slider from "react-slick";
import Image from "next/image";

// import react slick carousel css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "../styles/home.module.css";

export default dynamic(() => Promise.resolve(Home), { ssr: false });
function Home() {
  var settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 500,
    pauseOnHover: false,
    focusOnSelect: false,
    initialSlide: 0,
    arrows: false,
  };

  const photos = [
    {
      src: "https://images.pexels.com/photos/7218647/pexels-photo-7218647.jpeg",
    },
    {
      src: "https://images.pexels.com/photos/16455158/pexels-photo-16455158/free-photo-of-u-bahn-viadukt.jpeg",
    },
    {
      src: "https://images.pexels.com/photos/15484561/pexels-photo-15484561/free-photo-of-a-train-station-with-a-roof-and-a-train-track.jpeg",
    },
  ];

  return (
    <>
      <div className={styles.mainbody}>
        <div className={styles.cardmainbody}>
          <div className={styles.leftside}>
          <Slider {...settings} className={styles.carouselbody}>
          {photos.map((item) =>
           <Image
           key={item._id}
           src={item.src}
           className={styles.carouselimage}
           alt={item.name}
           width={0}
           height={0}
           loading="lazy"
           unoptimized
         />
          )}
        </Slider>
          </div>
          <div className={styles.rightside}>jhdsifbs</div>
        </div>
      </div>
    </>
  );
}
