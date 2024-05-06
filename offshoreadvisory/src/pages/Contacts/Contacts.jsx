import React, { useState } from 'react';
import axios from 'axios';
import style from './contacts.module.scss'

const Contacts = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const [success, setSuccess] = useState(false);

    let apiUrl = 'https://assembly.tehnik.tech/api/send_form/from';
    const objective = 'send message';

    const handleSubmit = async (e) => {
      e.preventDefault();

      const formData = {
        project: "offshoreadvisory",
        subject: objective,
        data: {
            name: name,
            email: email,
            phone: phone,
            message: message,
        }
      };

      try {
        const response = await axios.post(apiUrl, formData);
        // console.log(response.data);
        setSuccess(true);
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
      } catch (error) {
        console.error(error);
      }
    };

    return (
        <>
            <div className={style.contacts}>
                <div className={style.contacts__start}>
                    <div className={style.contacts_startContent}>
                        <h1>Contact Us</h1>
                        <h3>
                            Embark on a journey of offshore business excellence with Offshore Licensing solution, 
                            contact us now to explore the possibilities and secure your license in Western Sahara, 
                            St. Lucia, St. Vincent, or Comoros.
                        </h3>
                    </div>
                </div>
                <div className={style.contacts__contactForm}>
                    <div className={style.contacts__contactFormContent}>
                        <div className={style.contacts__contactFormText}>
                            <h3 className={style.contacts__contactFormTitle}>Feel free to contact us any time!</h3>
                            <div className={style.contacts__contactFormDesc}>We’ll get back<br/>to you as soon<br/>as we can.</div>
                        </div>
                        <div className={style.contacts__contactFormForm}>
                            <form onSubmit={handleSubmit}>
                                <div className={style.contacts__contactFieldGroup}>
                                    <div className={style.contacts__contactFieldName}>Name</div>
                                    <input type="text" 
                                           placeholder='Enter your name'
                                           value={name}
                                           onChange={(e) => setName(e.target.value)}
                                     />
                                </div>

                                <div className={style.contacts__contactFieldGroup}>
                                    <div className={style.contacts__contactFieldName}>Email</div>
                                    <input type='email' 
                                           placeholder='Enter your email' 
                                           value={email}
                                           onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>

                                <div className={style.contacts__contactFieldGroup}>
                                    <div className={style.contacts__contactFieldName}>Phone number</div>
                                    <input type='phone' 
                                           placeholder='Enter your phone number'
                                           value={phone}
                                           onChange={(e) => setPhone(e.target.value)} 
                                    />
                                </div>

                                <div className={style.contacts__contactFieldGroup}>
                                    <div className={style.contacts__contactFieldName}>Message</div>
                                    <textarea type='text' 
                                              placeholder='Enter your message' 
                                              value={message}
                                              onChange={(e) => setMessage(e.target.value)}
                                    />
                                </div>

                                <div className={style.contacts__contactFormBottom}>
                                    <h3 className={style.contacts__contactFormSuccess} style={{opacity: success ? '1' : '0'}}>Success!</h3>
                                    <button type='submit' style={{cursor: "pointer"}}>Send message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className={style.contacts__picture}></div>
                <div className={style.contacts__learnMore}>
                    <div className={style.contacts__learnMoreContent}>
                        <div className={style.contacts__learnMoreText}>
                            <p>
                                Learn more about how<br/>Offshore Advisory can be your<br/>trusted partner in navigating<br/>offshore opportunities.
                            </p>
                        </div>
                        <div className={style.contacts__learnMoreInfo}>
                            <div className={style.contacts__learnMoreCard}>
                                <div className={style.contacts__learnMoreName}>Contact us by sending us an email:</div>
                                <h3 className={style.contacts__learnMoreValue}>
                                    <a href='mailto:info@offshoreadvisory.pro'>info@offshoreadvisory.pro</a>
                                </h3>
                            </div>

                            <div className={style.contacts__learnMoreCard}>
                                <div className={style.contacts__learnMoreName}>Or contact us by calling us at:</div>
                                <h3 className={style.contacts__learnMoreValue}>
                                    <a href='tel:+447700306856'>+447700306856</a>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contacts;