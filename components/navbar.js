import React from "react"

import Image from 'next/image'
import Link from "next/link"
import styles from '../styles/Navbar.module.css'

export default function Navbar() {
    const [navigate, setNavigate] = React.useState(false);

    function handleClick(e) {
        setNavigate(prev => !prev)
        console.log(navigate)
    }

    function handleNav(e) {
        setNavigate(false)
    }

    return (
    <nav className={styles.Navbar}>
        <div className={navigate ? "ShownLinks" : "HiddenLinks"}>
            <Link href="/About">
                <a className={styles.li} onClick={handleNav}>About Us</a>
            </Link>
            <Link href="/Teams">
                <a className={styles.li} onClick={handleNav}>Teams</a>
            </Link>
            <Link href="/Contact">
                <a className={styles.li} onClick={handleNav}>Contact Us</a>
            </Link>   
        </div> 
        <div className={styles.Home}>
            <img src="/PULogoOutlined.png" alt="fill" width="70px"/>
            <Link href="/">
                <a className={styles.Name}>Dota 2 Club</a>
            </Link>
        </div>
        <div className={styles.hamburger} onClick={handleClick}>
            <img className={styles.image} src="/Hamburger.png" height="40" />
        </div>
        <div className={styles.link}>
            <Link href="/About">
                <a className={styles.li}>About Us</a>
            </Link>
            <Link href="/Teams">
                <a className={styles.li}>Teams</a>
            </Link>
            <Link href="/Contact">
                <a className={styles.li}>Contact Us</a>
            </Link>
        </div>
    </nav>
    )
}