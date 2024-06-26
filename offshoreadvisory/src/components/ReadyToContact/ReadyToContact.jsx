import React, { useEffect } from 'react';
import style from './ready-to-contact.module.scss'
import Button from '../UI/ButtonContact/ButtonContact';
// import getStarted from '../../assets/img/picture-started.jpeg'

const ReadyToContact = ({ title, subtitle, styles }) => {

    return (
        <div className={style.readyToContact__block}>
            <div className={style.readyToContact__picture}
                style={styles}
            >
            </div>
            <div className={style.readyToContact__content}>
                <div className={style.readyToContact__body}>
                    <span>{title}</span>
                    <h3>{subtitle}</h3>
                </div>
                <Button color='blue' />
            </div>
        </div>

    );
};

export default ReadyToContact;