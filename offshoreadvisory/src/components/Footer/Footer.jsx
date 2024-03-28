import React from 'react';
import Button from '../UI/ButtonContact/ButtonContact'
import style from './footer.module.scss'
import { Link } from "react-router-dom";
import logo from '../../assets/img/footer-logo.svg'
import phone from '../../assets/img/phone.svg'
import mail from '../../assets/img/mail.svg'
import download from '../../assets/img/download.svg'

const Footer = () => {

    return (
        <>
            <div className={style.footer}>
                <div className={style.footer__info}>
                    <Link className={style.header_link} to="/">
                        <img src={logo} alt="" className={"logo"} width={235} height={42}/>
                    </Link>
                    <div className={style.footer__content}>
                        <div className={style.footer__item}>
                            <a href="tel:+447700306856" className={style.footer__icon}>
                                <img src={phone} alt="" />
                                <p>+447700306856</p>
                            </a>
                            <a href="mailto:info@offshoreadvisory.pro" className={style.footer__icon}>
                                <img src={mail} alt="" />
                                <p>info@offshoreadvisory.pro</p>
                            </a>
                        </div>
                        <div className={style.footer__item}>
                            <a href="" className={style.footer__icon}> {/*download=''*/}
                                <img src={download} alt="" />
                                <p>Privacy Policy</p>
                            </a>
                            <a href="" className={style.footer__icon}> {/*download=''*/}
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
            </div>
        </>

    );
};

export default Footer;