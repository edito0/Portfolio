
import Navbar from './Navbar';
import '../App.css';
import './css/contact.css'

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function ContactMe() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_v9nn7ah', 'template_mmwf3tc', form.current, 'Nkl3iSyx8GRemXGPa')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('phone').value = '';
        document.getElementById('message').value = '';


    };

    return (


        <>
            <div className='bg'>
                <Navbar />

                <div className='contact_container'>
                    <h2>CONTACT ME</h2>
                    <p>Got a question? I love to hear from you. Send me a message and I will respond soon as possible</p>
                    <div className='contact'>
                        <div className='contact_left'>
                            <form ref={form} onSubmit={sendEmail}>

                                <label htmlFor="">Name -</label>
                                <input type="text" placeholder='Your Name' id='name' name='name' />
                                <label htmlFor="">Email -</label>
                                <input type="email" placeholder='Your Email' id='email' name='email' />
                                <label htmlFor="">Phone no. -</label>
                                <input type="tel " placeholder='Your Phone no.' id='phone' name='phone' />
                                <label htmlFor="">Message - </label>
                                <textarea cols="30" rows="10" placeholder='Your Message' id='message' name='message' ></textarea>
                                <input type="submit" value="Send" />
                            </form>
                        </div>

                        <div className='contact_right'>
                            <div>
                                <i class="fa-solid fa-location-dot"></i>
                                <p>Udaipur, Rajasthan, India</p>
                            </div>

                            <div>
                                <i class="fa-solid fa-phone"></i>
                                <p>+91-9351731524</p>
                            </div>

                            <div>
                                <i class="fa-solid fa-envelope"></i>
                                <p>mohitbagdi280@gmail.com</p>
                            </div>

                            <div className='break_line'></div>

                            <div className='social_media'>
                                <a href='https://www.linkedin.com/in/mohit-bagdi-356463240/' target='_blank'><i class="fa-brands fa-linkedin-in"></i></a>
                                <a href='https://www.instagram.com/edito_/ ' target='_blank'> <i class="fa-brands fa-instagram"></i></a>
                                <a href='https://github.com/edito0' target='_blank'><i class="fa-brands fa-github"></i></a>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    );
}

export default ContactMe;
