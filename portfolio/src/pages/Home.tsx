import React from 'react'

import { BsChevronDoubleDown } from 'react-icons/bs'

import avatar1 from '../img/avatar/avatar1.PNG'

import avatar3 from '../img/avatar/avatar3.PNG'



import Social from '../shared/Social'
import ContactForm from './components/contacts/ContactForm'
import Contacts from './components/contacts/Contacts'
import HomePortfolio from './components/portfolio/HomePortfolio'
import SectionInfo from './components/section/SectionInfo'
import Skills from './components/skills/Skills'
import Skill from './components/skills/SkillSingle';

type Props = {}

const Home = (props: Props) => {
    return (
        <main>
            <div id="home" className="hero">
                <div className="hero-content">
                    <h1>Front-end developer</h1>
                    <h3>Andrea Troccolo</h3>
                    <p>Ciao! Mi chiamo <strong>Andrea</strong> e sono un <strong>front-end developer</strong>!
                        <br />Ho 20 anni e sono appassionato al mondo dell'informatica, della programmazione e del UI/UX design.
                        <br />Attualmente sono iscritto alla facoltà di Informatica presso l'Università degli studi di Milano.
                    </p>
                    <a href='#portfolio' className='btn btn-fill'>Vedi Portfolio</a>
                    <a href='#contact' className='btn btn-empty'>Contatti</a>
                    <img src={avatar1} alt="andrea" className="avatar" id="avatar-1" />
                </div>
                <a href='#skills'><BsChevronDoubleDown className='arrow-down' /></a>
            </div>
            <Skills />
            <HomePortfolio />
            <Contacts />
        </main>
    )
}

export default Home