import React from 'react';
import style from './servises-start-block.module.scss'

const ServicesStartBlock = ({ title, subtitle, text }) => {

    return (
        <div className={style.servStartBlock}>
            <div className={style.servStartBlock__titles}>
                <h1 className={style.servStartBlock__maintitle}>{title}</h1>
                <h1 className={style.servStartBlock__secondTitle}>{subtitle}</h1>
            </div>
            <h3 className={style.servStartBlock__text}>{text}</h3>
        </div>

    );
};

export default ServicesStartBlock;