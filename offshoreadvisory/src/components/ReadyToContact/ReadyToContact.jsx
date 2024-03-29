import React from 'react';
import style from './ready-to-contact.module.scss'
import Button from '../UI/ButtonContact/ButtonContact';
import getStarted from '../../assets/img/picture-started.jpeg'

const ReadyToContact = ({ title, subtitle, img }) => {

    return (
        <div className={style.readyToContact__block}>
            <div className={style.readyToContact__picture}
                 style={{
                    background: `linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), url(${getStarted}) lightgray 50% / cover no-repeat`,
                  }}
            >
            </div>
            <div className={style.readyToContact__content}>
                <div className={style.readyToContact__body}>
                    <span>{title}</span>
                    <p>{subtitle}</p>
                </div>
                <Button color='blue' />
            </div>
        </div>

    );
};

export default ReadyToContact;