import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useContext } from "react";

import { AuthContext } from "../../component/context";
import Navbar from "../../component/navbar";
import UploadFooterBar from "../../component/uploadnavbar";
import TaptoTop from "../../component/taptotopbtn";

import styles from "./styles/subpage.module.css";

export default dynamic(() => Promise.resolve(Home), { ssr: false });
const Home = () => {
  const router = useRouter();
  const logout = () => {
    router.push("/");
  };

  // const { isAdmin } = useContext(AuthContext);
  // if (isAdmin == "no" || !isAdmin)
  //   return (
  //     <>
  //       <div className="restrictedmainbody">
  //         <div className="restrictedbody">
  //           <h1 className="restrictedbodyh1">Restricted Web Page</h1>
  //           <button onClick={() => logout()} className="restrictedbodybtn">
  //             Refresh
  //           </button>
  //         </div>
  //       </div>
  //     </>
  //   );

  const [product, setProduct] = useState([]);
  useEffect(() => {
    const url = process.env.NEXT_PUBLIC_API_URL + "/product";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch(() => router.push("/404"));
  }, []);

  const productCategory = [...new Set(product.map((item) => item.category))]

  const filterItem = (curcat) => {
    const newItem = product.filter((newCategory) => {
      return newCategory.category === curcat;
    });
    setProduct(newItem)
  }

  return (
    <>
      <Navbar />
      <main className="mainpagebody">
        <UploadFooterBar />
        <div className={styles.subpagemainbody}>

          
          <div className={styles.filternav}>
            <Link href="/home/product">
              <button className={styles.filterbtn}>product</button>
            </Link>
            <Link href="/home/digitalart">
              <button className={styles.filterbtn}>digital art</button>
            </Link>
            <Link href="/home/aiart">
              <button className={styles.filterbtn}>ai art</button>
            </Link>
            <Link href="/home/photography">
              <button className={styles.filterbtn}>photography</button>
            </Link>
          </div>

          <div className={styles.filternav}>
            {productCategory.map((item, index) => {
              return (
                <>
                <button key={index} onClick={() => filterItem(item)} className={styles.filterbtn}>{item}</button>
                </>
              )
            })}
                <button onClick={() => setProduct(Data)} className={styles.filterbtn}>All</button>
          </div>

          <div className={styles.cardmainbody}>
            {product.map((item, index) => {
              // const dateoptions = { year: 'numeric', month: 'short', day: 'numeric' };
              //  const datestring = new Date(item.date).toLocaleDateString([], dateoptions)
              const datestring = new Date(item.date).toDateString();
              return (
                <>
                  <div className={styles.cardbody} key={index}>
                    <Image
                      src={item.thumbnail}
                      className={styles.imagesection}
                      width={0}
                      height={0}
                      alt={item.title}
                      loading="lazy"
                    />
                    <div className={styles.bodysection}>
                      <div className={styles.datecategorysection}>
                        <div className={styles.date}>{datestring}</div>
                        <div className={styles.category}>{item.category}</div>
                      </div>
                      <div className={styles.headersection}>{item.title}</div>
                      <div className={styles.textsection}>
                        {item.description}
                      </div>
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
