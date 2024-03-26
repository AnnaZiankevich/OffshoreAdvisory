import React, {useEffect, useState} from 'react';
import style from './header.module.scss'
import {Link, useLocation, useNavigate} from "react-router-dom";
import logo from "../../assets/img/logo.svg"
import HeaderDropdown from "../HeaderDropdown/HeaderDropdown";
import { ABOUT, ASSEST_PROTECTION, CONTACT_US } from "../../Constants/RoutesConstants";
import { servicesPublicRoutes, regionsPublicRoutes } from '../../Constants/PublicRoutes'

const Header = () => {

    return (
        <>
            <header className={style.container}>
                <div className={style.block}>
                    <Link className={style.header_link} to="/">
                        <img src={logo} alt="" className={"logo"} width={235} height={42}/>
                    </Link>
                    <Link className={style.header_link} to="/">Main</Link>
                    <Link className={style.header_link} to={ABOUT}>About Us</Link>
                    <HeaderDropdown title={'Our services'} links={servicesPublicRoutes} />
                    <HeaderDropdown title={'Regions'} links={regionsPublicRoutes} />
                    <Link className={style.header_link} to={ASSEST_PROTECTION}>Asset Protection</Link>
                    <Link className={style.header_link} to={CONTACT_US}>Contact Us</Link>
                </div>
            </header>
        </>

    );
};

export default Header;