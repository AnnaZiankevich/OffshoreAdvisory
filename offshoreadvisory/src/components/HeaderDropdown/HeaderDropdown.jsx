import React, {useState} from 'react';
import s from './header-dropdown.module.scss'
import arrow_dropdown from '../../assets/img/chevron.svg'
import { Link } from "react-router-dom";
// import Icon from "@ant-design/icons";

const HeaderDropdown = ({title, links}) => {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false)

    return (
        <div className={s.dropdown_wrapper}
             onMouseEnter={() => setIsDropdownOpen(true)}
        >
            <div className={s.title}>
                {title} <img src={arrow_dropdown} alt=""/>
            </div>
            <div className={isDropdownOpen ? s.dropdown_content : s.hidden} onMouseLeave={() => setIsDropdownOpen(false)}>
                {
                    links.map((route) => {
                        return (
                            <Link to={route.path} className={s.dropdown_link}>
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
