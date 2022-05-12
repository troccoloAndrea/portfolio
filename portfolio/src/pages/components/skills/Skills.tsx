import React from 'react'
import SectionInfo from '../section/SectionInfo'
import Skill from './SkillSingle'

import boostraplogo from '../../../img/skills/bootstrap.svg';
import charp from '../../../img/skills/csharp.svg';
import css from '../../../img/skills/css.svg';
import figma from '../../../img/skills/figma.svg';
import html from '../../../img/skills/html.svg';
import js from '../../../img/skills/js.svg';
import reactlogo from '../../../img/skills/react.svg';
import typescriptlogo from '../../../img/skills/typescript.svg';
import avatar2 from '../../../img/avatar/avatar2.PNG'

type Props = {}

const Skills = (props: Props) => {
    return (
        <section id="skills" className='container'>
            <div className="row">
                <div className="col-sm-12 col-md-4 col-lg-4">
                    <div style={{'marginTop' : '8%'}}>
                        <SectionInfo title={'My Tech Stack'} description={'Le mie tecnologie preferite!'} image={avatar2} imgAlt={'andrea'} imgId={'avatar-2'} imgClass={'img-fluid avatar'} />
                    </div>
                </div>
                <div className="col-sm-12 col-md-8 col-lg-8">
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
    )
}

export default Skills