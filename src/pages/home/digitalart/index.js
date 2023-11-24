import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useContext } from "react";

import { AuthContext } from "../../../component/context";
import Navbar from "../../../component/navbar";
import UploadFooterBar from "../../../component/uploadnavbar";
import TaptoTop from "../../../component/taptotopbtn";

import styles from "../styles/subpage.module.css"

export default dynamic(() => Promise.resolve(DigitalArt), { ssr: false });
const DigitalArt = () => {
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
  const [productAll, setProductAll] = useState([]);
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    const url = process.env.NEXT_PUBLIC_API_URL + "/digitalart";
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
      fetch(process.env.NEXT_PUBLIC_API_URL+`/digitalart/${id}`, { method: "delete" })
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
        <UploadFooterBar />
        <div className={styles.subpagemainbody}>

          
          <div className={styles.filternav}>
            <Link href="/home/product">
              <button className={styles.filterbtn}>product</button>
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
                <button key={item._id} onClick={() => filterItem(item)} className={styles.filterbtn}>{item}</button>
                </>
              )
            })}
                <button onClick={() => setProduct(productAll)} className={styles.filterbtn}>All</button>
          </div>

          <div className={styles.cardmainbody}>
            {product.map((item) => {
              const datestring = new Date(item.date).toDateString();
              const createdatdate = new Date(item.createdAt).toUTCString();
              const updatedatdate = new Date(item.updatedAt).toUTCString();
              return (
                <>
                  <div className={styles.cardbody} key={item._id}>
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
                      <div className={styles.authorsection}>
                        Author Name : {item.author}
                      </div>
                      <div className={styles.authorsection}>
                        Image Size : {item.imageratio}
                      </div>
                      <div className={styles.authorsection}>
                        Tag : {item.tag}
                      </div>
                      <div className={styles.datesection}>
                        created At : {createdatdate}
                        <br/>
                        updated At : {updatedatdate}
                      </div>
                      <div className={styles.barsection}></div>
                      <div className={styles.btnsection}>
                        <Link href="#">
                          <button className={styles.btn}>update</button>
                        </Link>
                          <button onClick={() => deleteProduct(item._id)} className={styles.btn}>delete</button>
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
