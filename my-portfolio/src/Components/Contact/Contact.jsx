
import emailjs  from '@emailjs/browser';
import { useEffect, useRef, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import './Contact.scss';

const Contact = () =>{
    const[letterClass , setLetterClass] = useState('text-animate');

    const refForm = useRef();

    useEffect(() => {
         setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 2000);
    } ,[]) 

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_ve7mkjy',
            'template_p5xdjgc',
            refForm.current,
            'ts3h4JLP-reIlwFkG'
            ).then(
                () => {
                    alert("Message Sent Successfully");
                    window.location.reload(false);
                },
                () => {
                    alert("Failed to send Message, Please try again")
                }
            )
        }


    return(
        <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray = {['C','o','n','t','a','c','t',' ','M','e']} idx={15} />
                </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum eos iure beatae molestiae totam, repudiandae minus consequatur doloribus nobis dignissimos?
                </p>
                <div className='contact-form'>
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type="text" name="name" placeholder='name' required />
                            </li>
                            <li className='half'>
                                <input type='email' name="email" placeholder='Email' required />
                            </li>
                            <li>
                                <input type="text" name='text' placeholder='Subject' required />
                            </li>
                            <li>
                                <textarea name="message"  placeholder='Message' required ></textarea>
                            </li>
                            <li>
                                <input type="submit" value="SEND" className='flat-button' />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
        </>
    )

}

export default Contact;