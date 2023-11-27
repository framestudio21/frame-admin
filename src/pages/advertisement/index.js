import dynamic from "next/dynamic";
import Link from "next/link";
import Slider from 'react-slick';
import { useContext, useEffect, useState } from "react";
import Image from "next/image";

// import {AuthContext} from '../../component/context'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import Navbar from "../../component/navbar";

import styles from "./styles/advertisement.module.css";

export default dynamic(() => Promise.resolve(Advertisement), { ssr: false });
const Advertisement = () => {

  //   const { isAdmin } = useContext(AuthContext);
  // if (isAdmin == "no" || !isAdmin)
  //   return (
  //     <>
  //       <div className="restrictedmainbody">
  //         <div className="restrictedbody">
  //           <h1 className="restrictedbodyh1">Restricted Web Page</h1>
  //           {/* <button onClick={() => loginPage()} className="restrictedbodybtn">Refresh</button> */}
  //         </div>
  //       </div>
  //     </>
  //   );

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


      const [product, setProduct] = useState([]);
      const [productAll, setProductAll] = useState([]);
      const [refresh, setRefresh] = useState(false);
      useEffect(() => {
        const url = process.env.NEXT_PUBLIC_API_URL + "/advertisement";
        fetch(url)
          .then((res) => res.json())
          .then((data) => {setProduct(data); setProductAll(data)})
          .catch(() => router.push("/404"));
      }, [refresh]);
    console.log(product);
      const productCategory = [...new Set(product.map((item) => item.category))]
    
      const filterItem = (curcat) => {
        const newItem = product.filter((newCategory) => {
          return newCategory.category === curcat;
        });
        setProduct(newItem)
      }
    
      const deleteProduct = async (id) => {
        const isOkay = confirm("Are you sure to delete it?");
        if (isOkay) {
          fetch(process.env.NEXT_PUBLIC_API_URL+`/advertisement/${id}`, { method: "delete" })
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
      <div className={styles.advertisement}>
        {/* advertisement top navbar */}
        <div className={styles.advertisementtopnavbar}>
          <div className={styles.text}>add a new addvertisement</div>
          <Link href="/advertisement/upload">
            <button className={styles.btn}>add new advertisement</button>
          </Link>
        </div>
        <div className={styles.advertisementbody}>
            <div className={styles.advertisementcarousel}>
                <Slider {...settings} className={styles.sliderbody}>
                    {product.map((item) => {
                        return (
                            <Image src={item.thumbnail} alt={item.name} width={0} height={0} className={styles.sliderimage} key={item._id}/>
                        )
                    })}
                </Slider>
            </div>
            <div className={styles.advertisementitem}>
                {product.map((item) => {
                  // const datestring = new Date(item.date).toDateString();
                  const createdatdate = new Date(item.createdAt).toUTCString();
                  const updatedatdate = new Date(item.updatedAt).toUTCString();
                    return (
                        <>
                        <div className={styles.advertisementcarddiv} key={item._id}>
                            <Image src={item.thumbnail} width={0} height={0} alt={item.name} className={styles.cardimage}/>
                            <div className={styles.cardbody}>
                                <div className={styles.datetimesection}>
                                    <div className={styles.date}>{createdatdate}</div>
                                    <div className={styles.category}>{item.category}</div>

                                    {/* <div className={styles.date}>{updatedatdate}</div> */}
                                </div>
                                <div className={styles.headersection}>{item.name}</div>
                                <div className={styles.descriptionsection}>{item.description}</div>
                                <div className={styles.categorytagsection}>
                                <div className={styles.tag}>tag : {item.tag}</div>
                                </div>
                                <div className={styles.btnsection}>
                                    <button className={styles.deletebtn} onClick={() => deleteProduct(item._id)}>delete</button>
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
