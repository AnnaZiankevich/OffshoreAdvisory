import React, { useState, useEffect, useRef, RefObject } from 'react';
import s from './header-dropdown.module.scss'
import arrow_dropdown from '../../assets/img/chevron.svg'
import { Link, useLocation } from "react-router-dom";
// import Icon from "@ant-design/icons";

const HeaderDropdown = ( { title, links, isActive } ) => {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false)

    const location = useLocation()

    function useOutsideAlerter(ref) {
        useEffect(() => {
          function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                setIsDropdownOpen(false)
            }
          }
          document.addEventListener("click", handleClickOutside);
          return () => {
            document.removeEventListener("click", handleClickOutside);
          };
        }, [ref]);
    }

    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);

    return (
        <div className={s.dropdown_wrapper}
             onClick={() => setIsDropdownOpen(prev => !prev)}
             ref={wrapperRef}
        >
            <div className={isDropdownOpen ? s.title_opened : isActive ? s.title_active : s.title}>
                <div>{title}</div>
                <img src={arrow_dropdown} alt=""/>
            </div>
            <div className={isDropdownOpen ? s.dropdown_content : s.hidden} >
                {
                    links.map((route) => {
                        return (
                            <Link to={route.path} className={s.dropdown_link} key={route.path}>
                                <p className={s.link_text}>{route.name}</p>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default HeaderDropdown;
