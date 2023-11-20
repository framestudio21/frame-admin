import Dynamic from "next/dynamic";
import { useEffect, useState, useContext } from "react";
import { AiFillFileText, AiFillFileImage } from "react-icons/ai";
import { FaHeading, FaQuoteRight } from "react-icons/fa";

import Navbar from "../../component/navbar";
import TaptoTop from "../../component/taptotopbtn";
import Backbtn from "../../component/backbtn";

import { AuthContext } from "../../component/context";

import styles from "./styles/upload.module.css";

export default Dynamic(() => Promise.resolve(Upload), { ssr: false });
const Upload = () => {
  const { isAdmin } = useContext(AuthContext);
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

  // digital art tag input selection
  useEffect(() => {
    const selectElement = document.getElementById("category-select");
    const digitalArtTagGraphic = document.getElementById("graphic-design-tag");
    const digitalArtTagWebsite = document.getElementById("website-design-tag");

    selectElement.addEventListener("change", (event) => {
      if (event.target.value === "graphic") {
        digitalArtTagGraphic.style.display = "flex";
        digitalArtTagWebsite.style.display = "none";
      } else if (event.target.value === "website") {
        digitalArtTagWebsite.style.display = "flex";
        digitalArtTagGraphic.style.display = "none";
      } else {
        digitalArtTagGraphic.style.display = "none";
        digitalArtTagWebsite.style.display = "none";
      }
    });
  });
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
  // select upload section
  useEffect(() => {
    const uploadselectElement = document.getElementById("upload-select");
    const productUploadDiv = document.getElementById("product-upload-div");
    const digitalartUploadDiv = document.getElementById(
      "digitalart-upload-div"
    );
    const aiartUploadDiv = document.getElementById("aiart-upload-div");
    const photographyUploadDiv = document.getElementById(
      "photography-upload-div"
    );

    uploadselectElement.addEventListener("change", (event) => {
      if (event.target.value === "product") {
        productUploadDiv.style.display = "block";
        digitalartUploadDiv.style.display = "none";
        aiartUploadDiv.style.display = "none";
        photographyUploadDiv.style.display = "none";
      } else if (event.target.value === "digitalart") {
        digitalartUploadDiv.style.display = "block";
        productUploadDiv.style.display = "none";
        aiartUploadDiv.style.display = "none";
        photographyUploadDiv.style.display = "none";
      } else if (event.target.value === "aiart") {
        aiartUploadDiv.style.display = "block";
        productUploadDiv.style.display = "none";
        digitalartUploadDiv.style.display = "none";
        photographyUploadDiv.style.display = "none";
      } else if (event.target.value === "photography") {
        photographyUploadDiv.style.display = "block";
        productUploadDiv.style.display = "none";
        digitalartUploadDiv.style.display = "none";
        aiartUploadDiv.style.display = "none";
      } else {
        productUploadDiv.style.display = "none";
        digitalartUploadDiv.style.display = "none";
        aiartUploadDiv.style.display = "none";
        photographyUploadDiv.style.display = "none";
      }
    });
  });

  //input component
  const Input = (props) => {
    const placeholder = props.placeholder;
    return (
      <div className={styles.textarea}>
        <textarea
          className={styles.textareainputfield}
          name={props.placeholder}
          // value={formData.placeholder || ""}
          onChange={handleInputChange}
          placeholder={"enter your " + placeholder}
        />
      </div>
    );
  };

  // function fot new form adding
  const [inputList, setInputList] = useState([]);
  const [textno, setTextNo] = useState(1);
  const [imageno, setImageNo] = useState(1);
  const [headingno, setHeadingNo] = useState(1);
  const [quoteno, setQuoteNo] = useState(1);
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

  // function to store formdata
  const [formData, setFormData] = useState({});
  const [designType, setDesignType] = useState();
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  }
  const changeDesignType = (e) => {
    setDesignType(e.target.value);
  };
  const PostData = async (e) => {
    e.preventDefault();
    await fetch(process.env.NEXT_PUBLIC_API_URL + "/" + designType, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({designType, ...formData}),
    });
    setFormData({});
  };
  
  // function for reset button of form
  const reset = () => {
    setFormData({});
  };

  return (
    <>
      <Navbar />
      <main className="mainpagebody">
        <Backbtn />
        <div className={styles.uploadpagemainbody}>
          <div className={styles.uploadsection}>
            <div className={styles.headertext}>project Upload Section</div>
            <div className={styles.selecttype}>
              <div className={styles.text}>
                Select type to upload product, design and photography
              </div>
              <select
                className={styles.selectsection}
                id="upload-select"
                onChange={changeDesignType}
              >
                <option value="" className={styles.selecttypeoption}>
                  select type
                </option>
                <option value="product" className={styles.selecttypeoption}>
                  product
                </option>
                <option value="digitalart" className={styles.selecttypeoption}>
                  Digital art
                </option>
                <option value="aiart" className={styles.selecttypeoption}>
                  ai art
                </option>
                <option vaule="photography" className={styles.selecttypeoption}>
                  photography
                </option>
              </select>
            </div>

            {/* product upload form */}
            <div className={styles.uploaddiv} id="product-upload-div">
              <form className={styles.formdiv} method="POST" id="product">
                <div className={styles.header}>product upload</div>

                <div className={styles.mandatoryinputdiv}>
                  <div className={styles.divleftside}>
                    <label className={styles.text}>the mandatory section</label>
                    <input
                      type="text"
                      placeholder="enter project title"
                      name="title"
                      className={styles.inputfield}
                      value={formData.title || ""}
                      onChange={handleInputChange}
                    />
                    <input
                      type="text"
                      placeholder="enter project thumbnail link"
                      name="thumbnail"
                      className={styles.inputfield}
                      value={formData.thumbnail || ""}
                      onChange={handleInputChange}
                    />
                    <input
                      type="text"
                      placeholder="enter project author"
                      name="author"
                      className={styles.inputfield}
                      value={formData.author || ""}
                      onChange={handleInputChange}
                    />
                    <input
                      type="date"
                      name="date"
                      placeholder="enter project creation date"
                      className={styles.inputfield}
                      value={formData.date || ""}
                      onChange={handleInputChange}
                    />
                    <label for="category" className={styles.text}>
                      select the category
                    </label>
                    <select
                      id="product-category-select"
                      name="category"
                      className={styles.inputfield}
                      value={formData.category || ""}
                      onChange={handleInputChange}
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
                        name="tag"
                        className={styles.inputfield}
                        value={formData.tag || ""}
                        onChange={handleInputChange}
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
                        name="tag1"
                        className={styles.inputfield}
                        value={formData.tag1 || ""}
                        onChange={handleInputChange}
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
                        value={formData.tag2 || ""}
                        onChange={handleInputChange}
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
                        name="tag"
                        className={styles.inputfield}
                        value={formData.tag || ""}
                        onChange={handleInputChange}
                      >
                        <option value="">Select type</option>
                        <option value="e-commercs">e-commerce site</option>
                        <option value="business">business site</option>
                        <option value="blog">blog site</option>
                        <option value="portfolio">portfolio site</option>
                        <option value="personal">personal site</option>
                        <option value="informational">
                          informational site
                        </option>
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
                      value={formData.facebooklink || ""}
                      onChange={handleInputChange}
                    />
                    <input
                      type="text"
                      placeholder="enter project instagram link"
                      name="instagramlink"
                      className={styles.inputfield}
                      value={formData.instagramlink || ""}
                      onChange={handleInputChange}
                    />
                    <input
                      type="text"
                      placeholder="enter project pinterest link"
                      name="pinterestlink"
                      className={styles.inputfield}
                      value={formData.pinterestlink || ""}
                      onChange={handleInputChange}
                    />
                    <input
                      type="text"
                      placeholder="enter project dribble link"
                      name="dribblelink"
                      className={styles.inputfield}
                      value={formData.dribblelink || ""}
                      onChange={handleInputChange}
                    />
                    <input
                      type="text"
                      placeholder="enter project twitter link"
                      name="twitterlink"
                      className={styles.inputfield}
                      value={formData.twitterlink || ""}
                      onChange={handleInputChange}
                    />
                    <input
                      type="text"
                      placeholder="enter project behance link"
                      name="behancelink"
                      className={styles.inputfield}
                      value={formData.behancelink || ""}
                      onChange={handleInputChange}
                    />
                    <input
                      type="text"
                      placeholder="enter project google drive link"
                      name="googledrivelink"
                      className={styles.inputfield}
                      value={formData.googledrivelink || ""}
                      onChange={handleInputChange}
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
                  <button
                    type="reset"
                    className={styles.resetbtn}
                    onClick={reset}
                  >
                    reset
                  </button>
                </div>
              </form>
            </div>

            {/* digital art upload form */}
            <div className={styles.uploaddiv} id="digitalart-upload-div">
              <form className={styles.formdiv} method="POST" id="digitalart">
                <div className={styles.mandatoryinputdiv}>
                  <div className={styles.divleftside}>
                    <label className={styles.text}>the mandatory section</label>
                    <input
                      type="text"
                      placeholder="enter project title"
                      name="title"
                      className={styles.inputfield}
                      value={formData.title || ""}
                      onChange={handleInputChange}
                    />
                    <input
                      type="text"
                      placeholder="enter project thumbnail link"
                      name="thumbnail"
                      className={styles.inputfield}
                      value={formData.thumbnail || ""}
                      onChange={handleInputChange}
                    />
                    <input
                      type="date"
                      name="date"
                      placeholder="enter project creation date"
                      className={styles.inputfield}
                      value={formData.date || ""}
                      onChange={handleInputChange}
                    />
                    <label className={styles.text}>select the category</label>
                    <select
                      id="category-select"
                      name="category"
                      className={styles.inputfield}
                      value={formData.category || ""}
                      onChange={handleInputChange}
                    >
                      <option value="">select category type</option>
                      <option value="graphic">graphic design</option>
                      <option value="website">website design</option>
                    </select>

                    <div className={styles.tagdiv} id="graphic-design-tag">
                      <label id="graphic" className={styles.text}>
                        select the tag
                      </label>
                      <select
                        id="graphic"
                        name="tag"
                        className={styles.inputfield}
                        value={formData.tag || ""}
                        onChange={handleInputChange}
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
                    <div className={styles.tagdiv} id="website-design-tag">
                      <label id="website" className={styles.text}>
                        select the tag
                      </label>
                      <select
                        id="website"
                        name="tag"
                        className={styles.inputfield}
                        value={formData.tag || ""}
                        onChange={handleInputChange}
                      >
                        <option value="">Select website tag type</option>
                        <option value="e-commercs">e-commerce site</option>
                        <option value="business">business site</option>
                        <option value="blog">blog site</option>
                        <option value="portfolio">portfolio site</option>
                        <option value="personal">personal site</option>
                        <option value="informational">
                          informational site
                        </option>
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
                      value={formData.facebooklink || ""}
                      onChange={handleInputChange}
                    />
                    <input
                      type="text"
                      placeholder="enter project instagram link"
                      name="instagramlink"
                      className={styles.inputfield}
                      value={formData.instagramlink || ""}
                      onChange={handleInputChange}
                    />
                    <input
                      type="text"
                      placeholder="enter project pinterest link"
                      name="pinterestlink"
                      className={styles.inputfield}
                      value={formData.pinterestlink || ""}
                      onChange={handleInputChange}
                    />
                    <input
                      type="text"
                      placeholder="enter project dribble link"
                      name="dribblelink"
                      className={styles.inputfield}
                      value={formData.dribblelink || ""}
                      onChange={handleInputChange}
                    />
                    <input
                      type="text"
                      placeholder="enter project twitter link"
                      name="twitterlink"
                      className={styles.inputfield}
                      value={formData.twitterlink || ""}
                      onChange={handleInputChange}
                    />
                    <input
                      type="text"
                      placeholder="enter project behance link"
                      name="behancelink"
                      className={styles.inputfield}
                      value={formData.behancelink || ""}
                      onChange={handleInputChange}
                    />
                    <input
                      type="text"
                      placeholder="enter project google drive link"
                      name="googledrivelink"
                      className={styles.inputfield}
                      value={formData.googledrivelink || ""}
                      onChange={handleInputChange}
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

                  <input
                    className={styles.inputfield}
                    name="author"
                    placeholder="enter project author name"
                    value={formData.author || ""}
                    onChange={handleInputChange}
                  />

                  <label for="imageratio" className={styles.text}>
                    select the image size ratio
                  </label>
                  <select
                    name="imageratio"
                    className={styles.selectsection}
                    value={formData.imageratio || ""}
                    onChange={handleInputChange}
                  >
                    <option className={styles.selecttypeoption} value="">
                      select image ratio type
                    </option>
                    <option className={styles.selecttypeoption} value="425px">
                      1 : 1
                    </option>
                    <option className={styles.selecttypeoption} value="500px">
                      9 : 16
                    </option>
                    <option className={styles.selecttypeoption} value="350px">
                      16 : 19
                    </option>
                  </select>
                </div>

                <div className={styles.btnsection}>
                  <button
                    type="submit"
                    className={styles.submitbtn}
                    onClick={PostData}
                  >
                    Submit
                  </button>
                  <button
                    type="reset"
                    className={styles.resetbtn}
                    onClick={reset}
                  >
                    reset
                  </button>
                </div>
              </form>
            </div>

            {/* ai art upload form */}
            <div className={styles.uploaddiv} id="aiart-upload-div">
              <form className={styles.formdiv} method="POST" id="aiart">
                <div className={styles.mandatoryinputdiv}>
                  <div className={styles.divleftside}>
                    <label className={styles.text}>the mandatory section</label>
                    <input
                      type="text"
                      placeholder="enter project title"
                      name="title"
                      className={styles.inputfield}
                      value={formData.title || ""}
                      onChange={handleInputChange}
                    />
                    <input
                      type="text"
                      placeholder="enter project thumbnail link"
                      name="thumbnail"
                      className={styles.inputfield}
                      value={formData.thumbnail || ""}
                      onChange={handleInputChange}
                    />
                    <input
                      type="date"
                      name="date"
                      placeholder="enter project creation date"
                      className={styles.inputfield}
                      value={formData.date || ""}
                      onChange={handleInputChange}
                    />
                    <label className={styles.text}>select the category</label>
                    <select
                      id="category-select"
                      name="category"
                      className={styles.inputfield}
                      value={formData.category || ""}
                      onChange={handleInputChange}
                    >
                      <option value="">select category type</option>
                      <option value="graphic">graphic design</option>
                      <option value="website">website design</option>
                    </select>
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
                      value={formData.facebooklink || ""}
                      onChange={handleInputChange}
                    />
                    <input
                      type="text"
                      placeholder="enter project instagram link"
                      name="instagramlink"
                      className={styles.inputfield}
                      value={formData.instagramlink || ""}
                      onChange={handleInputChange}
                    />
                    <input
                      type="text"
                      placeholder="enter project pinterest link"
                      name="pinterestlink"
                      className={styles.inputfield}
                      value={formData.pinterestlink || ""}
                      onChange={handleInputChange}
                    />
                    <input
                      type="text"
                      placeholder="enter project dribble link"
                      name="dribblelink"
                      className={styles.inputfield}
                      value={formData.dribblelink || ""}
                      onChange={handleInputChange}
                    />
                    <input
                      type="text"
                      placeholder="enter project twitter link"
                      name="twitterlink"
                      className={styles.inputfield}
                      value={formData.twitterlink || ""}
                      onChange={handleInputChange}
                    />
                    <input
                      type="text"
                      placeholder="enter project behance link"
                      name="behancelink"
                      className={styles.inputfield}
                      value={formData.behancelink || ""}
                      onChange={handleInputChange}
                    />
                    <input
                      type="text"
                      placeholder="enter project google drive link"
                      name="googledrivelink"
                      className={styles.inputfield}
                      value={formData.googledrivelink || ""}
                      onChange={handleInputChange}
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

                  <input
                    className={styles.inputfield}
                    name="author"
                    placeholder="enter project author name"
                    value={formData.author || ""}
                    onChange={handleInputChange}
                  />
                  <input
                    className={styles.inputfield}
                    name="aiwebsiteurl"
                    placeholder="enter ai website name or url"
                    value={formData.aiwebsiteurl || ""}
                    onChange={handleInputChange}
                  />

                  <label for="imageratio" className={styles.text}>
                    select the image size ratio
                  </label>
                  <select
                    name="imageratio"
                    className={styles.selectsection}
                    value={formData.imageratio || ""}
                    onChange={handleInputChange}
                  >
                    <option className={styles.selecttypeoption} value="">
                      select image ratio type
                    </option>
                    <option className={styles.selecttypeoption} value="425px">
                      1 : 1
                    </option>
                    <option className={styles.selecttypeoption} value="500px">
                      9 : 16
                    </option>
                    <option className={styles.selecttypeoption} value="350px">
                      16 : 19
                    </option>
                  </select>
                </div>

                <div className={styles.btnsection}>
                  <button
                    type="submit"
                    className={styles.submitbtn}
                    onClick={PostData}
                  >
                    Submit
                  </button>
                  <button
                    type="reset"
                    className={styles.resetbtn}
                    onClick={reset}
                  >
                    reset
                  </button>
                </div>
              </form>
            </div>

            {/* photography upload form */}
            <div className={styles.uploaddiv} id="photography-upload-div">
              <form className={styles.formdiv} method="POST" id="photography">
                <div className={styles.mandatoryinputdiv}>
                  <div className={styles.divleftside}>
                    <label className={styles.text}>the mandatory section</label>
                    <input
                      type="text"
                      placeholder="enter project title"
                      name="title"
                      className={styles.inputfield}
                      value={formData.title || ""}
                      onChange={handleInputChange}
                    />
                    <input
                      type="text"
                      placeholder="enter project thumbnail link"
                      name="thumbnail"
                      className={styles.inputfield}
                      value={formData.thumbnail || ""}
                      onChange={handleInputChange}
                    />
                    <input
                      type="date"
                      name="date"
                      placeholder="enter project creation date"
                      className={styles.inputfield}
                      value={formData.date || ""}
                      onChange={handleInputChange}
                    />
                    <input
                      type="text"
                      placeholder="enter photography tag"
                      name="phototag"
                      className={styles.inputfield}
                      value={formData.phototag || ""}
                      onChange={handleInputChange}
                    />
                    <input
                      type="text"
                      placeholder="enter photography special tag"
                      name="specialphototag"
                      className={styles.inputfield}
                      value={formData.specialphototag || ""}
                      onChange={handleInputChange}
                    />
                    <select
                      id="input-select"
                      name="devicetype"
                      className={styles.inputfield}
                      value={formData.devicetype || ""}
                      onChange={handleInputChange}
                    >
                      <option>select device type</option>
                      <option value="mobile">Mobile</option>
                      <option value="camera">camera</option>
                    </select>
                    <input
                      type="text"
                      placeholder="enter device name"
                      name="devicename"
                      className={styles.inputfield}
                      value={formData.devicename || ""}
                      onChange={handleInputChange}
                    />
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
                      value={formData.facebooklink || ""}
                      onChange={handleInputChange}
                    />
                    <input
                      type="text"
                      placeholder="enter project instagram link"
                      name="instagramlink"
                      className={styles.inputfield}
                      value={formData.instagramlink || ""}
                      onChange={handleInputChange}
                    />
                    <input
                      type="text"
                      placeholder="enter project pinterest link"
                      name="pinterestlink"
                      className={styles.inputfield}
                      value={formData.pinterestlink || ""}
                      onChange={handleInputChange}
                    />
                    <input
                      type="text"
                      placeholder="enter project dribble link"
                      name="dribblelink"
                      className={styles.inputfield}
                      value={formData.dribblelink || ""}
                      onChange={handleInputChange}
                    />
                    <input
                      type="text"
                      placeholder="enter project twitter link"
                      name="twitterlink"
                      className={styles.inputfield}
                      value={formData.twitterlink || ""}
                      onChange={handleInputChange}
                    />
                    <input
                      type="text"
                      placeholder="enter project behance link"
                      name="behancelink"
                      className={styles.inputfield}
                      value={formData.behancelink || ""}
                      onChange={handleInputChange}
                    />
                    <input
                      type="text"
                      placeholder="enter project google drive link"
                      name="googledrivelink"
                      className={styles.inputfield}
                      value={formData.googledrivelink || ""}
                      onChange={handleInputChange}
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

                  <input
                    className={styles.inputfield}
                    name="photographer"
                    placeholder="enter photographer name"
                    value={formData.photographer || ""}
                    onChange={handleInputChange}
                  />
                  <input
                    className={styles.inputfield}
                    name="edtitor"
                    placeholder="enter edtitor name"
                    value={formData.edtitor || ""}
                    onChange={handleInputChange}
                  />

                  <label for="imageratio" className={styles.text}>
                    select the image size ratio
                  </label>
                  <select
                    name="imageratio"
                    className={styles.selectsection}
                    value={formData.imageratio || ""}
                    onChange={handleInputChange}
                  >
                    <option className={styles.selecttypeoption} value="">
                      select image ratio type
                    </option>
                    <option className={styles.selecttypeoption} value="425px">
                      1 : 1
                    </option>
                    <option className={styles.selecttypeoption} value="500px">
                      9 : 16
                    </option>
                    <option className={styles.selecttypeoption} value="350px">
                      16 : 19
                    </option>
                  </select>
                </div>

                <div className={styles.btnsection}>
                  <button
                    type="submit"
                    className={styles.submitbtn}
                    onClick={PostData}
                  >
                    Submit
                  </button>
                  <button
                    type="reset"
                    className={styles.resetbtn}
                    onClick={reset}
                  >
                    reset
                  </button>
                </div>
              </form>
            </div>
          </div>

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
        <TaptoTop />
      </main>
    </>
  );
};
