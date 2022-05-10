import React, { useEffect, useState } from 'react'
import '../css/Shared.css'      

import logo from '../img/avatar/avatarlogo.PNG'
import ScrollToTop from '../pages/components/ScrollToTop';

type Props = {}


function Navbar({ }: Props) {
    const [scroll, setScroll] = useState(false);

 useEffect(() => {
   window.addEventListener("scroll", () => {
     setScroll(window.scrollY > 10);
   });
 }, []); 

    

    return (
        <nav className={scroll ? "navbar navbar-expand-lg fixed-top my-navbar-dark" :  "navbar navbar-expand-lg fixed-top my-navbar-white"}>
            <div className="container">
                <a href="#home" className={scroll ? "navbar-brand nb-d" : "navbar-brand nb-w"}>{'< '}<img src={logo} width={60}/> {scroll ? 'andreatroccolo />' : 'at />'}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className={scroll ? "nav-link nl-d" : "nav-link nl-w"} aria-current="page" href="/#home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className={scroll ? "nav-link nl-d" : "nav-link nl-w"} href="/#skills">Skills</a>
                        </li>
                        <li className="nav-item">
                            <a className={scroll ? "nav-link nl-d" : "nav-link nl-w"} href="/#portfolio">Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className={scroll ? "nav-link nl-d" : "nav-link nl-w"} href='/#contact'>Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
            {scroll ? <ScrollToTop/> : <></>}
        </nav>
    )
}

export default Navbar