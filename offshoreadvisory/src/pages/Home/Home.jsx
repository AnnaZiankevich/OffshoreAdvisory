import React, { useRef, useEffect } from 'react';
import style from './home.module.scss'
import { Link } from "react-router-dom"
import arrow from '../../assets/img/arrow.svg'
import { CONTACT_US } from '../../Constants/RoutesConstants'
import { startPageWhy, startPageServices, startPageHow } from '../../Constants/StaticData'
import Button from '../../components/UI/ButtonContact/ButtonContact'
import ScrollMagic from 'scrollmagic';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Home = () => {

    return (
        <>
            <div className={style.home}>
                <div className={style.home__start}>
                    <div className={style.home__startContent}>
                        <h1 className={style.home__mainText}>
                            Unlock Opportunities in Offshore Zone <br/>Jurisdictions
                        </h1>
                        <div className={style.home__startGetStarted}>
                            <Link to={CONTACT_US}>
                                <p>Get started today!</p>
                                <button>
                                    <img src={arrow} alt="arrow" width={24} height={24} />
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={style.home__whyUs}>
                    <h2 className={style.home__whyUsTitle}>Why People Choose Us and Offshore Jurisdictions?</h2>
                    {
                        startPageWhy.map(item => { 
                          return (
                            <div key={item.id} className={style.home__whyUsItem}>
                                <h3 className={style.home__whyUsName}>{item.name}</h3>
                                <div className={style.home__whyUsValue}>{item.value}</div>
                            </div>
                        )})
                    }
                </div>
                <div className={style.home__picture}></div>
                <div className={style.home__services}>
                    <h1 className={style.home__servicesTitle}>
                        Our <br/>Services
                    </h1>
                    <div className={style.home__servicesContent}>
                        {
                            startPageServices.map(item => { 
                                return (
                                    <div key={item.id} className={style.home__servicesItem}>
                                        <h2 className={style.home__servicesName}>{item.name}</h2>
                                        <h4 className={style.home__servicesValue}>{item.value}</h4>
                                    </div>
                            )})
                        }
                    </div>
                </div>
                <div className={style.home__work}>
                    <div className={style.home__workTitle}>
                        <h3>Discover</h3>
                        <h3>How We Work</h3>
                    </div>
                    <div className={style.home__workContent}>
                        {
                            startPageHow.map(item => {
                                return (
                                    <div key={item.id} className={style.home__workItem}>
                                        <h1>{item.name}</h1>
                                        <p>{item.value}</p>
                                    </div>
                            )})
                        }
                    </div>
                </div>
                <div className={style.home__getStarted}>
                    <div className={style.home__getStartedPicture}></div>
                    <div className={style.home__getStartedContent}>
                        <div className={style.home__getStartedBody}>
                            <h3>Get Started Today!</h3>
                            <p>
                                Embark on a journey of offshore business excellence with Offshore Licensing solution, 
                                contact us now to explore the possibilities and secure your license in Western Sahara, 
                                St. Lucia, St. Vincent, or Comoros.
                            </p>
                        </div>
                        <Button color='blue' />
                    </div>
                </div>
            </div>
        </>

    );
};

export default Home;