import React from 'react'
import Social from '../../../shared/Social'
import avatar3 from '../../../img/avatar/avatar3.PNG'
import SectionInfo from '../section/SectionInfo'
import ContactForm from './ContactForm'

type Props = {}

function Contacts({ }: Props) {
    return (
        <section id="contact" className='container'>
            <div className="row">
                <div className="col-md-4 ">
                    <SectionInfo title={'Get in touch!'} customComponent={<Social />} description={''} image={avatar3} imgAlt={'andrea'} imgId={'avatar-2'} imgClass={'img-fluid avatar'} />
                </div>
                <div className="col-md-8">
                    <ContactForm />
                </div>
            </div>
        </section>
    )
}

export default Contacts