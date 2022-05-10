import React from 'react'
import { BsChevronDoubleDown } from 'react-icons/bs'
import avatar1 from '../img/avatar/avatar1.PNG'
import avatar2 from '../img/avatar/avatar2.PNG'
import avatar3 from '../img/avatar/avatar3.PNG'

import boostraplogo from '../img/skills/bootstrap.svg';
import charp from '../img/skills/csharp.svg';
import css from '../img/skills/css.svg';
import figma from '../img/skills/figma.svg';
import html from '../img/skills/html.svg';
import js from '../img/skills/js.svg';
import reactlogo from '../img/skills/react.svg';
import typescriptlogo from '../img/skills/typescript.svg';
import Social from '../shared/Social'
import ContactForm from './components/ContactForm'
import HomePortfolio from './components/HomePortfolio'
import Skill from './components/Skill';

type Props = {}

const Home = (props: Props) => {
    return (
        <main>
            <div className="hero">
                <div className="hero-content">
                    <h1>Front-end developer</h1>
                    <h3>Andrea Troccolo</h3>
                    <p>Ciao! Mi chiamo <strong>Andrea</strong> e sono un <strong>front-end developer</strong>!
                        <br />Ho 20 anni e sono appassionato al mondo dell'informatica, della programmazione e del UI/UX design.
                        <br />Attualmente sono iscritto alla facoltà di Informatica presso l'Università degli studi di Milano.
                    </p>
                    <button className='btn btn-fill'>Vedi Portfolio</button>
                    <button className='btn btn-empty'>Contatti</button>
                    <img src={avatar1} className="avatar" id="avatar-1" />
                </div>
                <BsChevronDoubleDown className='arrow-down' />
            </div>
            <section className='container'>
                <div className="row">
                    <div className="col-md-4 section-info">
                        <div className="section-info-content">
                            <h3>My Tech Stack</h3>
                            <img src={avatar2} className="avatar" id="avatar-2" />
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="row">
                            <Skill image={html} name="html" />
                            <Skill image={css} name="css" />
                            <Skill image={boostraplogo} name="Bootstrap" />
                            <Skill image={charp} name="c#" />
                        </div>
                        <div className="row">
                            <Skill image={js} name="javascript " />
                            <Skill image={typescriptlogo} name="typescript" />
                            <Skill image={reactlogo} name="react" />
                            <Skill image={figma} name="figma" />
                        </div>
                    </div>
                </div>
            </section>

            <HomePortfolio />

            <section className='container'>
                <div className="row">
                    <div className="col-md-4 section-info">
                        <div className="section-info-content">
                            <h3>Get in touch!</h3>
                            <img src={avatar3} className="avatar" id="avatar-2" />
                        </div>
                    </div>
                    <div className="col-md-8">
                        <ContactForm />
                    </div>
                </div>
            </section>




        </main>
    )
}

export default Home