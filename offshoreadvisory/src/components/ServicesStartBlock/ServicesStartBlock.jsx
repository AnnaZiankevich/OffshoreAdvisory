import React from 'react';
import { COMPANY_FORMATION } from '../../Constants/RoutesConstants';
import { useLocation } from 'react-router-dom';
import style from './servises-start-block.module.scss'
import classNames from 'classnames';

const ServicesStartBlock = ({ title, subtitle, text }) => {
    const location = useLocation();
    const isCompanyFormationRoute = location.pathname.includes(COMPANY_FORMATION);

    return (
        <div className={classNames(style.servStartBlock, isCompanyFormationRoute && style.companyStartBlock)}>
            <div className={style.servStartBlock__titles}>
                <h1 className={style.servStartBlock__maintitle}>{title}</h1>
                <h1 className={style.servStartBlock__secondTitle}>{subtitle}</h1>
            </div>
            <h3 className={style.servStartBlock__text}>{text}</h3>
        </div>

    );
};

export default ServicesStartBlock;