import React, { useState, useRef, useEffect } from 'react';
import style from './mobileheader.module.scss'
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/img/logo.svg"
import HeaderDropdown from "../HeaderDropdown/HeaderDropdown";
import { ABOUT, ASSEST_PROTECTION, CONTACT_US } from "../../Constants/RoutesConstants";
import { servicesPublicRoutes, regionsPublicRoutes } from '../../Constants/PublicRoutes'
import classnames from "classnames";
import toggle from '../../assets/img/toggle.svg'

const MobileHeader = () => {
    const location = useLocation()
    const [isActive, setIsActive] = useState(false)
    const toggleRef = useRef(null);
    const contentRef = useRef(null);

    function useOutsideAlerter(ref) {
      useEffect(() => {
        function handleClickOutside(event) {
          if (ref.current && !ref.current.contains(event.target)) {
            setIsActive(false);
          }
        }
        document.addEventListener("click", handleClickOutside);
        return () => {
          document.removeEventListener("click", handleClickOutside);
        };
      }, [ref]);
    }

    useOutsideAlerter(toggleRef);

    return (
        <>
            <header className={style.container} ref={toggleRef}>
                <div className={style.block}>
                    <Link className={location.pathname === '/' ?  style.header_link_home : style.header_link} 
                          to="/">
                        <img src={logo} alt="" className={"logo"} width={189} height={34}/>
                    </Link>
                    <div className={style.toggle} onClick={() => setIsActive(prev => !prev)}>
                        <img src={toggle} style={{transform: isActive ? '' : 'scaleX(-1)'}}/>
                    </div>
                </div>
                <div className={`${style.content} ${isActive ? '' : style.hidden}`}>
                    <Link className={location.pathname === '/' ?  style.header_link_home : style.header_link} 
                          to="/">
                        Main
                    </Link>
                    <Link className={location.pathname.includes("about-us") ?  style.header_link_active : style.header_link} 
                          to={ABOUT}>
                        About Us
                    </Link>
                    <HeaderDropdown title={'Our services'} links={servicesPublicRoutes} 
                        isActive={location.pathname.includes("services") || location.pathname === '/'}/>
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
            </header>
        </>
    );
}

export default MobileHeader;