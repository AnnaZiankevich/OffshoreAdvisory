import React from 'react'
import style from './button.module.scss'
import { Link } from "react-router-dom"
import { CONTACT_US } from '../../../Constants/RoutesConstants'

const ButtonContact = (color) => {

    return (
        <Link to={CONTACT_US}>
            <button class={color == 'blue' ? style.blue_button : style.white_button}>
                Contact Us
            </button>
        </Link>
    );
};

export default ButtonContact;