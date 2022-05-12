import React, { useEffect, useState } from 'react'
import '../css/Shared.css'

import { AiOutlineMenu } from 'react-icons/ai'
import logo from '../img/avatar/avatarlogo.PNG'
import ScrollToTop from './ScrollToTop';
import { HashLink as Link } from 'react-router-hash-link';

type Props = {}


function Navbar({ }: Props) {
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 10);
        });
    }, []);



    return (
        <header>
            <nav className={scroll ? "navbar navbar-expand-lg fixed-top my-navbar-dark" : "navbar navbar-expand-lg fixed-top my-navbar-white"}>
                <div className="container">
                    <Link to="/#home" className={scroll ? "navbar-brand nb-d" : "navbar-brand nb-w"}>{'< '}<img src={logo} width={60} /> {scroll ? 'andreatroccolo />' : 'at />'}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"><AiOutlineMenu className={scroll ? "menu-d" : "menu-w"} /></span>
                    </button>
                    <div className={scroll ? "collapse navbar-collapse navbar-collapse-d" : "collapse navbar-collapse navbar-collapse-w"} id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className={scroll ? "nav-link nl-d" : "nav-link nl-w"} aria-current="page" to="/#home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={scroll ? "nav-link nl-d" : "nav-link nl-w"} to="/#skills">Skills</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={scroll ? "nav-link nl-d" : "nav-link nl-w"} to="/#portfolio">Portfolio</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={scroll ? "nav-link nl-d" : "nav-link nl-w"} to='/#contact'>Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                {scroll ? <ScrollToTop /> : <></>}
            </nav>
        </header>
    )
}

export default Navbar