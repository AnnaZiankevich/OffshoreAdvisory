import React from 'react';
import style from './list.module.scss'

const List = ({ title, subtitle, infoArray }) => {

    return (
        <div className={style.list}>
            <h2 className={style.list__title}>{title} <span>{subtitle}</span></h2>
            <div className={style.list__content}>
                <div className={style.list__info}>
                    {
                        infoArray.map(item => { return (
                            <div className={style.list__item} key={item.title}>
                                <h3>{item.title}</h3>
                                <p>{item.text}</p>
                            </div>
                        )})
                    }
                </div>
            </div>
        </div>
    );
};

export default List;