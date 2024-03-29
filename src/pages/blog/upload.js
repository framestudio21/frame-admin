import Dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import { AiFillFileText, AiFillFileImage } from "react-icons/ai";
import { FaHeading, FaQuoteRight } from "react-icons/fa";

import Navbar from "../../component/navbar";
import BackBtn from "../../component/backbtn"
import TaptoTop from "../../component/taptotopbtn"

import styles from "./styles/blogupload.module.css";

const Input = (props) => {
  return (
    <div className={styles.textarea}>
      <textarea
        value={`formData.${props.placeholder}` || ""}
        // onChange={handleInputChange}
        name={props.placeholder}
        className={styles.textareainputfield}
        placeholder={"enter your " + props.placeholder}
      />
    </div>
  );
};

export default Dynamic(() => Promise.resolve(BlogUpload), { ssr: false });
const BlogUpload = () => {
  // blog tag input selection
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

  // function fot new form adding
  const [inputList, setInputList] = useState([]);
  const [textno, setTextNo] = useState(0);
  const [imageno, setImageNo] = useState(0);
  const [headingno, setHeadingNo] = useState(0);
  const [quoteno, setQuoteNo] = useState(0);
  const onAddTextBtnClick = () => {
    setTextNo(textno + 1);
    setInputList(
      inputList.concat(
        <Input key={inputList.length} placeholder={`text${textno}`} />
      )
    );
  };
  const onAddImageBtnClick = () => {
    setImageNo(imageno + 1);
    setInputList(
      inputList.concat(
        <Input key={inputList.length} placeholder={`image${imageno}`} />
      )
    );
  };
  const onAddHeadingBtnClick = () => {
    setHeadingNo(headingno + 1);
    setInputList(
      inputList.concat(
        <Input key={inputList.length} placeholder={`heading${headingno}`} />
      )
    );
  };
  const onAddquoteBtnClick = () => {
    setQuoteNo(quoteno + 1);
    setInputList(
      inputList.concat(
        <Input key={inputList.length} placeholder={`quote${quoteno}`} />
      )
    );
  };

  // function for from submit
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // function for store formdata
  const [formData, setFormData] = useState({});
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  }

  console.log(formData);

  const PostData = async (e) => {
    e.preventDefault();
  };

  // function for reset button of form
  const reset = () => {
    setFormData({});
  };

  return (
    <>
      <Navbar />
      <main className="mainpagebody">
        <div className={styles.uploadpagemainbody}>
        <BackBtn/>
          <form
            className={styles.formdiv}
            onSubmit={handleSubmit}
            method="POST"
            id="product"
          >
            <div className={styles.header}>blog upload</div>

            <div className={styles.mandatoryinputdiv}>
              <div className={styles.divleftside}>
                <label className={styles.text}>the mandatory section</label>
                <input
                  type="text"
                  placeholder="enter project title"
                  name="title"
                  className={styles.inputfield}
                />
                <input
                  type="text"
                  placeholder="enter project thumbnail link"
                  name="thumbnail"
                  className={styles.inputfield}
                />
                <input
                  type="date"
                  name="date"
                  placeholder="enter project creation date"
                  className={styles.inputfield}
                />
                <label for="category" className={styles.text}>
                  select the category
                </label>
                <select
                  id="product-category-select"
                  name="category"
                  className={styles.inputfield}
                >
                  <option value="">select type</option>
                  <option value="graphic">graphic design</option>
                  <option value="website">web design</option>
                </select>

                <div className={styles.tagdiv} id="graphic-tag-div">
                  <label id="graphic" className={styles.text}>
                    select the graphic tag
                  </label>
                  <select
                    id="graphic"
                    name="tag1"
                    className={styles.inputfield}
                  >
                    <option value="">Select type</option>
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
                  <select
                    id="graphic"
                    name="tag2"
                    className={styles.inputfield}
                  >
                    <option value="">Select type</option>
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
                  <select
                    id="graphic"
                    name="tag3"
                    className={styles.inputfield}
                  >
                    <option value="">Select type</option>
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
                  <label id="website" className={styles.text}>
                    select the website tag
                  </label>
                  <select
                    id="website"
                    name="tag1"
                    className={styles.inputfield}
                  >
                    <option value="">Select type</option>
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
              </div>
              <div className={styles.divrightside}>
                <label className={styles.text}>
                  the Social media Link section
                </label>
                <input
                  type="text"
                  placeholder="enter project facebook link"
                  name="facebooklink"
                  className={styles.inputfield}
                />
                <input
                  type="text"
                  placeholder="enter project instagram link"
                  name="instagramlink"
                  className={styles.inputfield}
                />
                <input
                  type="text"
                  placeholder="enter project pinterest link"
                  name="pinterestlink"
                  className={styles.inputfield}
                />
                <input
                  type="text"
                  placeholder="enter project dribble link"
                  name="dribblelink"
                  className={styles.inputfield}
                />
                <input
                  type="text"
                  placeholder="enter project twitter link"
                  name="twitterlink"
                  className={styles.inputfield}
                />
                <input
                  type="text"
                  placeholder="enter project behance link"
                  name="behancelink"
                  className={styles.inputfield}
                />
                <input
                  type="text"
                  placeholder="enter project google drive link"
                  name="googledrivelink"
                  className={styles.inputfield}
                />
              </div>
            </div>

            <div className={styles.newaddinputdiv}>
              <div className={styles.descriptionarea} id="descriptionarea">
                <textarea
                  className={styles.textareainputfield}
                  name="description"
                  placeholder="enter project short description"
                  value={formData.description || ""}
                  onChange={handleInputChange}
                />
              </div>

              {inputList}
            </div>
            <div className={styles.btnsection}>
              <button
                type="submit"
                className={styles.submitbtn}
                onClick={PostData}
              >
                Submit
              </button>
              <button type="reset" className={styles.resetbtn} onClick={reset}>
                reset
              </button>
            </div>
          </form>

          {/* add field navbar section */}
          <div className={styles.navbarsection}>
            <button
              onClick={() => onAddTextBtnClick()}
              className={styles.icons}
              title="text-box"
            >
              <AiFillFileText className={styles.icon} />
            </button>
            <button
              onClick={() => onAddImageBtnClick()}
              className={styles.icons}
              title="image"
            >
              <AiFillFileImage className={styles.icon} />
            </button>
            <button
              onClick={() => onAddHeadingBtnClick()}
              className={styles.icons}
              title="header-tag"
            >
              <FaHeading className={styles.icon} />
            </button>
            <button
              onClick={() => onAddquoteBtnClick()}
              className={styles.icons}
              title="quote-box"
            >
              <FaQuoteRight className={styles.icon} />
            </button>
          </div>
        </div>
        <TaptoTop/>
      </main>
    </>
  );
};
