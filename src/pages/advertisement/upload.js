import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useContext } from "react";
import { AuthContext } from '../../component/context'
import Navbar from "../../component/navbar"
import BackBtn from "../../component/backbtn"

import styles from "./styles/upload.module.css"

export default dynamic(() => Promise.resolve(Advertisement), { ssr: false });
const Advertisement = () => {

  const { isAdmin } = useContext(AuthContext)
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

  // product tag input selection
  useEffect(() => {
    const selectElement = document.getElementById("product-category-select");
    const productTagGraphic = document.getElementById("graphic-tag-div");
    const productTagWebsite = document.getElementById("website-tag-div");

    selectElement.addEventListener("change", (event) => {
      if (event.target.value === "graphic") {
        productTagGraphic.style.display = "flex";
        productTagWebsite.style.display = "none";
      } else if (event.target.value === "website") {
        productTagWebsite.style.display = "flex";
        productTagGraphic.style.display = "none";
      } else {
        productTagGraphic.style.display = "none";
        productTagWebsite.style.display = "none";
      }
    });
  });

  const [data, setData] = useState({})
  const handleData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await fetch(process.env.NEXT_PUBLIC_API_URL + "/advertisement", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({...data}),
    });
    setData({})
  }

  const reset = () => {
    setData({})
  }

  return (
    <>
      <Navbar />
      <main className="mainpagebody">
        <div className={styles.advertisementuploadmaindiv}>
          <BackBtn />
          <div className={styles.headersection}>upload advertisement</div>
          <div>
            <form method="POST" className={styles.fromdivsection} onSubmit={handleSubmit}>
              <input type="text" name="name" value={data.name || ""} onChange={handleData} placeholder="enter advertisement name" className={styles.inputfield} />
              <input type="url" name="thumbnail" value={data.thumbnail || ""} onChange={handleData} placeholder="enter advertisement thumbnail" className={styles.inputfield} />

              <div className={styles.selectfielddiv}>
                <label htmlFor="category" className={styles.text}>select the category</label>
                <select
                  id="product-category-select"
                  name="category"
                  onChange={handleData}
                  value={data.category || ""}
                  className={styles.selectfield}
                >
                  <option value="">select type</option>
                  <option value="graphic">graphic design</option>
                  <option value="website">web design</option>
                </select>
              </div>

              <div className={styles.tagdiv} id="graphic-tag-div">
                <label id="graphic" className={styles.text}>select the tag</label>
                <select id="graphic"
                  name="tag" onChange={handleData} value={data.tag || ""} className={styles.selectfield}
                >
                  <option value="">Select graphic tag type</option>
                  <option value="logo">logo</option>
                  <option value="visualidentity">visual identity</option>
                  <option value="advertisement">advertisement</option>
                  <option value="publication">publication</option>
                  <option value="motion">motion</option>
                  <option value="environmental">environmental</option>
                  <option value="informational">informational</option>
                  <option value="branding">branding</option>
                  <option value="illustration">illustration</option>
                  <option value="layout">layout</option>
                  <option value="packaging">packaging</option>
                  <option value="typography">typography</option>
                </select>
              </div>

              <div className={styles.tagdiv} id="website-tag-div">
                <label id="website" className={styles.text}>select the website tag</label>
                <select id="website" onChange={handleData} value={data.tag || ""} name="tag" className={styles.selectfield}>
                  <option value="">Select website tag type</option>
                  <option value="e-commercs">e-commerce site</option>
                  <option value="business">business site</option>
                  <option value="blog">blog site</option>
                  <option value="portfolio">portfolio site</option>
                  <option value="personal">personal site</option>
                  <option value="informational">informational site</option>
                  <option value="event">event site</option>
                  <option value="nonprofit">nonprofit site</option>
                  <option value="membership">membership site</option>
                  <option value="online">online forum</option>
                  <option value="other">other type site</option>
                </select>
              </div>

              <textarea name="description" onChange={handleData} value={data.description || ""} className={styles.textarea} placeholder="enter advertisement description"></textarea>

              <div className={styles.btnsection}>
                <button className={styles.submitbtn} type="submit" >submit</button>
                <button className={styles.resetbtn} type="reset" onClick={reset} >reset</button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  )
}