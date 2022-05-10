import React, { useEffect, useState } from 'react'
import '../css/Shared.css'

import logo from '../img/avatar/avatarlogo.PNG'

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
                <a className={scroll ? "navbar-brand nb-d" : "navbar-brand nb-w"} href="#">{'< '}<img src={logo} width={60}/> {scroll ? 'andreatroccolo />' : 'at />'}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className={scroll ? "nav-link nl-d" : "nav-link nl-w"} aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className={scroll ? "nav-link nl-d" : "nav-link nl-w"} href="#">Skills</a>
                        </li>
                        <li className="nav-item">
                            <a className={scroll ? "nav-link nl-d" : "nav-link nl-w"} href="#">Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className={scroll ? "nav-link nl-d" : "nav-link nl-w"} href='#'>Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar