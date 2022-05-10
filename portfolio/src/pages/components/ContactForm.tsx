import React, { useState } from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import { FaCheck, FaEnvelope } from 'react-icons/fa';
import { IoIosSend } from 'react-icons/io'
import { IoCloseOutline } from 'react-icons/io5'
import Social from '../../shared/Social';
import emailjs from '@emailjs/browser';

type Inputs = {
    name: string,
    email: string,
    message: string
};





const ContactForm = () => {
    const [IsSent, setIsSent] = useState(false);

    const { register, handleSubmit, reset, formState: { errors } } = useForm<Inputs>();

    const sendEmail = (formData: any) => {
        emailjs
            .send("service_na1q62f", "template_ept3c5j", formData, "FjgB3FLCZgP5SdIoD")
            .then(
                (result: any) => {
                    console.log(result.text);
                },
                (error: any) => {
                    console.log(error.text);
                }
            );
        reset();
        setIsSent(true);
    };

    return (
        <>
            <p>Mettiamoci in contatto! Inviami un messaggio con questa form!</p>
            <form onSubmit={handleSubmit(sendEmail)}>
                <div className="form-group mb-4">
                    <input className={`form-control ${errors.email && 'is-invalid'}`} {...register("name", { required: true })} placeholder="name" name='name' />
                    {errors.name && <span className='invalid-feedback'>Il nome è obbligatorio!</span>}
                </div>
                <div className="form-group mb-4">
                    <input type="email" className={`form-control ${errors.email && 'is-invalid'}`} {...register("email", { required: true })} placeholder="Email" name='email' />
                    {errors.email && <span className='invalid-feedback'>L'indirizzo email è obbligatorio!</span>}
                </div>
                <div className="form-group mb-4">
                    <textarea rows={4} className={`form-control ${errors.message && 'is-invalid'}`} {...register("message", { required: true })} placeholder="Lascia qui il tuo messaggio..." name='message' />
                    {errors.message && <span className='invalid-feedback'>Il messaggio è obbligatorio!</span>}
                </div>
                {IsSent ? <><button className='btn btn-fill-success'><FaCheck /> Inviato!</button>
                <p className="success-text">Grazie! Ti risponderò il prima possibile!</p></> : <button type="submit" className='btn btn-fill'><IoIosSend /> Invia</button> }
                
                
            </form>
        </>
    )
}

export default ContactForm