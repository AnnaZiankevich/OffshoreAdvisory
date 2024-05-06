import React from 'react';
import style from './header.module.scss'
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/img/logo.svg"
import HeaderDropdown from "../HeaderDropdown/HeaderDropdown";
import { ABOUT, ASSEST_PROTECTION, CONTACT_US } from "../../Constants/RoutesConstants";
import { servicesPublicRoutes, regionsPublicRoutes } from '../../Constants/PublicRoutes'
import classnames from "classnames";

const Header = () => {

    const location = useLocation()

    return (
        <>
            <header className={style.container}>
                <div className={style.block}>
                    <Link className={location.pathname === '/' ?  style.header_link_home : style.header_link} 
                          to="/">
                        <img src={logo} alt="" className={"logo"} width={235} height={42}/>
                    </Link>
                    <div className={style.content}>
                        <Link className={location.pathname === '/' ?  style.header_link_home : style.header_link} 
                              to="/">
                            Main
                        </Link>
                        <Link className={location.pathname.includes("about-us") ?  style.header_link_active : style.header_link} 
                              to={ABOUT}>
                            About Us
                        </Link>
                        <HeaderDropdown title={'Our services'} links={servicesPublicRoutes} 
                            isActive={location.pathname.includes("services") || location.pathname === '/'} />
                        <HeaderDropdown title={'Regions'} links={regionsPublicRoutes} 
                            isActive={location.pathname.includes("regions") || location.pathname === '/'} />
                        <Link className={location.pathname.includes("asset-protection") ?  style.header_link_active : style.header_link} 
                              to={ASSEST_PROTECTION}>
                            Asset Protection
                        </Link>
                        <Link className={location.pathname.includes("contact-us") ?  style.header_link_active : style.header_link} 
                              to={CONTACT_US}>
                            Contact Us
                        </Link>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;