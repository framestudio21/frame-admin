import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

import Navbar from "../../component/navbar"
import BackBtn from "../../component/backbtn"

import styles from "./styles/upload.module.css"

export default dynamic(() => Promise.resolve(Advertisement), { ssr: false });
const Advertisement = () => {

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

return (
    <>
    <Navbar/>
    <main className="mainpagebody">
        <div className={styles.advertisementuploadmaindiv}>
        <BackBtn/>
            <div className={styles.headersection}>upload advertisement</div>
            <div>
                <form method="POST" className={styles.fromdivsection}>
                    <input name="name" placeholder="enter advertisement name" className={styles.inputfield} />
                    <input name="thumbnail" placeholder="enter advertisement thumbnail" className={styles.inputfield} />

                    <div className={styles.selectfielddiv}>
                    <label for="category" className={styles.text}>select the category</label>
                  <select
                    id="product-category-select"
                    name="category"
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
                     name="tag" className={styles.selectfield}
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
                  <select id="website" name="tag" className={styles.selectfield}>
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

                  <textarea name="description" className={styles.textarea} placeholder="enter advertisement description" />

                  <div className={styles.btnsection}>
                    <button className={styles.submitbtn} type="submit" >submit</button>
                    <button className={styles.resetbtn} type="reset" >reset</button>
                  </div>
                </form>
            </div>
        </div>
    </main>
    </>
)}