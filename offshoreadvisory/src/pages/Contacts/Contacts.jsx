import React from 'react';
import style from './contacts.module.scss'

const Contacts = () => {

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
                            <form action="post">
                                <div className={style.contacts__contactFieldGroup}>
                                    <div className={style.contacts__contactFieldName}>Name</div>
                                    <input type="text" placeholder='Enter your name' />
                                </div>

                                <div className={style.contacts__contactFieldGroup}>
                                    <div className={style.contacts__contactFieldName}>Email</div>
                                    <input type='email' placeholder='Enter your email' />
                                </div>

                                <div className={style.contacts__contactFieldGroup}>
                                    <div className={style.contacts__contactFieldName}>Phone number</div>
                                    <input type='phone' placeholder='Enter your phone number' />
                                </div>

                                <div className={style.contacts__contactFieldGroup}>
                                    <div className={style.contacts__contactFieldName}>Message</div>
                                    <textarea type='text' placeholder='Enter your message' />
                                </div>

                                <div className={style.contacts__contactFormBottom}>
                                    <h3 className={style.contacts__contactFormSuccess} style={{opacity: '0'}}>Success!</h3>
                                    <button type='submit'>Send message</button>
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