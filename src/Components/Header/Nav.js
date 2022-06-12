import React from 'react'
import "./Nav.css"
import icotwitter from "../../Assets/twitter.svg"
import icolink from "../../Assets/linkedin.svg"
import icofb from "../../Assets/fb.svg"
import icoig from "../../Assets/ig.svg"
import Link from './Link'

function Nav() {
    return (
        <div className="nav">
            <Link href="/">
                Home
            </Link>
            <Link href="/education">
                Education
            </Link>
            <Link href="/experience">
                Experience
            </Link>
            <Link href="/skills">
                Skills
            </Link>
            <Link href="/projects">
                Projects
            </Link>
            <Link href="/about">
                About
            </Link>
            <Link href="/contact">
                Contact
            </Link>
            <div className="social">
                <a href="/">
                    <img src={icotwitter} alt={icotwitter} />
                </a>
                <a href="/">
                    <img src={icofb} alt={icofb}/>
                </a>
                
            </div>
        </div>
    )
}

export default Nav
