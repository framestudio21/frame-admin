import React, {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BsArrowLeft } from 'react-icons/bs';

import logo from "../image/spacelogowhite.svg"

import styles from "./styles/navbar.module.css"

export default function navbar() {

  // toggle button 
  const [isShown, SetIsShown] = useState(false);
  const handleClick = () => {
    SetIsShown(!isShown)
  }

  return (
    <>
    <div>
        <nav className={styles.navbarmainbody}>
        <div className={styles.sidenavbar}>
            <button className={styles.menubtn} onClick={handleClick} ><GiHamburgerMenu className={styles.menubtnicon} /></button>
            <Image src={logo} className={styles.logo} width={0} height={0} alt='frame-logo'/>
        </div>
        <div className={styles.navbody} style={{ display: isShown ? 'flex' : 'none'}}>
            <Link href="/home" className={styles.navlist}>Home</Link>
            <Link href="/upload" className={styles.navlist}>Upload section</Link>
            <Link href="/blog" className={styles.navlist}>blog section</Link>
            <Link href="/data" className={styles.navlist}>data section</Link>
            <Link href="/order" className={styles.navlist}>order section</Link>
            <Link href="/contact" className={styles.navlist}>contact section</Link>
            <button className={styles.logoutbtn}><BsArrowLeft/>Logout</button>
        </div>
        </nav>
    </div>
    </>
  )
}