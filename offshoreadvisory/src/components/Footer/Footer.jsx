import React from 'react';
import Button from '../UI/ButtonContact/ButtonContact'
import style from './footer.module.scss'
import { Link } from "react-router-dom";
import logo from '../../assets/img/footer-logo.svg'
import phone from '../../assets/img/phone.svg'
import mail from '../../assets/img/mail.svg'
import download from '../../assets/img/download.svg'
import telegram from '../../assets/img/telegram.svg'
import whatsapp from '../../assets/img/whatsapp.svg'
import TermsOfUse from '../../assets/documents/Terms of Use.pdf'
import PrivacyPolicy from '../../assets/documents/Privacy Policy.pdf'

const Footer = () => {

    return (
        <>
            <div className={style.footer}>
                <div className={style.footer__info}>
                    <Link className={style.header_link} to="/">
                        <img src={logo} alt="" className={"logo"} width={235} height={42} />
                    </Link>
                    <div className={style.footer__content}>
                        <div className={style.footer__item}>
                            <a href="" className={style.footer__icon}>
                                <div className={style.footer__icons}>
                                    <a href="tel:+355 69 337 7716" target='_blank' without rel="noreferrer"><img src={phone} alt="" /></a>
                                    <a href='tg://resolve?domain=355693377716' target='_blank' without rel="noreferrer"><img src={telegram} alt="" /></a>
                                    <a href='https://api.whatsapp.com/send?phone=355693377716' target='_blank' without rel="noreferrer"><img src={whatsapp} alt="" /></a>
                                </div>
                                <p><a href="tel:+355 69 337 7716">+355 69 337 7716</a></p>
                            </a>
                            <a href="mailto:info@offshoreadvisory.pro" target='_blank' without rel="noreferrer" className={style.footer__icon}>
                                <img src={mail} alt="" />
                                <p>info@offshoreadvisory.pro</p>
                            </a>
                        </div>
                        <div className={style.footer__item}>
                            <a href={PrivacyPolicy} className={style.footer__icon} target='_blank' without rel="noreferrer"> 
                                <img src={download} alt="" />
                                <p>Privacy Policy</p>
                            </a>
                            <a href={TermsOfUse} className={style.footer__icon} target='_blank' without rel="noreferrer"> 
                                <img src={download} alt="" />
                                <p>Terms of Use</p>
                            </a>
                        </div>
                        <div className={style.footer__item}>
                            <Button color='white' />
                        </div>
                    </div>
                </div>
                <div className={style.footer__copy}>
                    <p>Copyright © 2024 Offshore Advisory</p>
                </div>

                <div className={style.footer__mobile}>
                    <div className={style.footer__mobileContent}>
                        <div className={style.footer__item}>
                        <a href="" className={style.footer__icon}>
                                <div className={style.footer__icons}>
                                    <a href="tel:+355 69 337 7716" target='_blank' without rel="noreferrer"><img src={phone} alt="" /></a>
                                    <a href='tg://resolve?domain=355693377716' target='_blank' without rel="noreferrer"><img src={telegram} alt="" /></a>
                                    <a href='https://api.whatsapp.com/send?phone=355693377716' target='_blank' without rel="noreferrer"><img src={whatsapp} alt="" /></a>
                                </div>
                                <p><a href="tel:+355 69 337 7716">+355 69 337 7716</a></p>
                            </a>
                            <a href="mailto:info@offshoreadvisory.pro" target='_blank' without rel="noreferrer" className={style.footer__icon}>
                                <img src={mail} alt="" />
                                <p>info@offshoreadvisory.pro</p>
                            </a>
                        </div>
                        <div className={style.footer__item}>
                            <Button color='white' />
                        </div>
                        <div className={style.footer__item}>
                            <a href={PrivacyPolicy} className={style.footer__icon} target='_blank'> 
                                <img src={download} alt="" />
                                <p>Privacy Policy</p>
                            </a>
                            <a href={TermsOfUse} className={style.footer__icon} target='_blank'> 
                                <img src={download} alt="" />
                                <p>Terms of Use</p>
                            </a>
                        </div>
                        <div className={style.footer__copyMobile}>
                            <p>Copyright © 2024 Offshore Advisory</p>
                        </div>
                    </div>
                    <div className={style.footer__mobileLogo}>
                        <Link className={style.header_link} to="/">
                            <img src={logo} alt="" className={style.logo} width={346} height={62} />
                        </Link>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Footer;