import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import {
  AiFillFileText,
  AiFillFileImage,
  AiFillCloseCircle,
} from "react-icons/ai";
import { FaHeading, FaQuoteRight } from "react-icons/fa";

import Navbar from "../../component/navbar";

import styles from "./style/upload.module.css";

export default dynamic(() => Promise.resolve(Upload), { ssr: false });
const Upload = () => {
  // click to add new field
  const [val, setVal] = useState([]);
  let [cname, setCname] = useState();

  const handleAdd = () => {
    const abc = [...val, []];
    setVal(abc);
    setCname("text");
  };
  const handleImageAdd = () => {
    const abc = [...val, []];
    setVal(abc);
    setCname("image");
  };
  const handleChange = (onChangevalue, i) => {
    const inputdata = [...val];
    inputdata[i] = onChangevalue.target.value;
    setVal(inputdata);
  };
  const handleDelete = (i) => {
    const deletVal = [...val];
    deletVal.splice(i, 1);
    setVal(deletVal);
  };

  // function for from submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setVal([]);
  };


  // useEffect(() => {
  //   const handleAdd = () => {
  //     const abc = [...val, []];
  //     setVal(abc);
  //     setCname("text");
  //   };
  //   const handleImageAdd = () => {
  //     const abc = [...val, []];
  //     setVal(abc);
  //     setCname("image");
  //   };
  //   const handleChange = (onChangevalue, i) => {
  //     const inputdata = [...val];
  //     inputdata[i] = onChangevalue.target.value;
  //     setVal(inputdata);
  //   };
  //   const handleDelete = (i) => {
  //     const deletVal = [...val];
  //     deletVal.splice(i, 1);
  //     setVal(deletVal);
  //   };
  // }, [])

  return (
    <>
      <Navbar />
      <main className="mainpagebody">
        <div className={styles.uploadpagemainbody}>
          <div className={styles.uploadsection}>
            <div className={styles.headertext}>Project Upload Section</div>

            {/* <div className={styles.selecttype}>
            <div className={styles.text}>
              Select type to upload product, design, blog, advertisement or
              photography
            </div>
            <select className={styles.selectsection}>
              <option selected className={styles.selecttypeoption}>
                select type
              </option>
              <option className={styles.selecttypeoption}>
                graphic design
              </option>
              <option className={styles.selecttypeoption}>
                website design
              </option>
              <option className={styles.selecttypeoption}>Digital art</option>
              <option className={styles.selecttypeoption}>ai art</option>
              <option className={styles.selecttypeoption}>photography</option>
              <option className={styles.selecttypeoption}>blog</option>
              <option className={styles.selecttypeoption}>advertisement</option>
            </select>
          </div> */}

            {/* graphic upload form */}
            <form
              className={styles.formdiv}
              onSubmit={handleSubmit}
              method="post"
            >
              {/* <div className={styles.header}>Graphic Design Upload Form</div>

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
                <input type="date" name="date" placeholder="enter project creation date" className={styles.inputfield} />
                <select
                  id="input-select"
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
                  id="input-select"
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
                  id="input-select"
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
            </div> */}

              <div className={styles.newaddinputdiv}>
                <div className={styles.descriptionarea} id="descriptionarea">
                  <textarea
                    className={styles.textareainputfield}
                    placeholder="enter project short description"
                  />
                </div>

                {val.map((data, i) => {
                  return (
                    <>
                      <div className={styles.textarea} key={i}>
                        <textarea
                          value={data}
                          onChange={e=>handleChange(e,i)}
                          name={`${cname}${i}`}
                          className={styles.textareainputfield}
                          placeholder={`enter your ${cname}${i}`}
                        />
                        <button
                          onClick={() => handleDelete(i)}
                          className={styles.divclosebtn}
                        >
                          <AiFillCloseCircle />
                        </button>
                      </div>
                    </>
                  );
                })}
              </div>
              <div className={styles.btnsection}>
                <button type="submit" className={styles.submitbtn}>
                  Submit
                </button>
                <button type="reset" className={styles.resetbtn}>
                  reset
                </button>
              </div>
            </form>
          </div>
          <div className={styles.navbarsection}>
            <button
              onClick={() => handleAdd()}
              className={styles.icons}
              title="text-box"
            >
              <AiFillFileText className={styles.icon} />
            </button>
            <button
              onClick={() => handleImageAdd()}
              className={styles.icons}
              title="image"
            >
              <AiFillFileImage className={styles.icon} />
            </button>
            <button className={styles.icons} title="header-tag">
              <FaHeading className={styles.icon} />
            </button>
            <button className={styles.icons} title="quote-box">
              <FaQuoteRight className={styles.icon} />
            </button>
          </div>
        </div>
      </main>
    </>
  );
};
