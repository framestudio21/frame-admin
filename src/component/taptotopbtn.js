import React from 'react'
import { useState} from 'react'
import { BsFillArrowUpCircleFill } from 'react-icons/bs';

import styles from "./styles/taptotopbtn.module.css"

export default function taptotopbtn() {

      // scroll to top button
  const [visible, setVisible] = useState(false)
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 150) {
      setVisible(true)
    }
    else if (scrolled <= 150) {
      setVisible(false)
    }
  }
  // scroll to top button
  const scrollToTop = () => {
    window.scrollTo ({
      top: 0,
      behavior: 'smooth'
    })
  }
window.addEventListener('scroll', toggleVisible)

  return (
    <>
    <button className={styles.taptotopbtn} onClick={scrollToTop} 
    style={{display: visible ? 'flex' : 'none'}} 
    ><BsFillArrowUpCircleFill/></button>
    </>
  )
}