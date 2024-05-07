import React, { useRef, useEffect, useState } from 'react';
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

    const sliderRef = useRef(null);
    const [isDown, setIsDown] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [mobile, setMobile] = useState(false);

    const [isFixed, setIsFixed] = useState(false);
    const servicesRef = useRef(null);
    const workRef = useRef(null);

    const handleMouseDown = (e) => {
      setIsDown(true);
      sliderRef.current.classList.add("active");
      setStartX(e.pageX - sliderRef.current.offsetLeft);
      setScrollLeft(sliderRef.current.scrollLeft);
    };

    const handleMouseLeave = () => {
      setIsDown(false);
      sliderRef.current.classList.remove("active");
    };

    const handleMouseUp = () => {
      setIsDown(false);
      sliderRef.current.classList.remove("active");
    };

    const handleMouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - sliderRef.current.offsetLeft;
      const walk = x - startX;
      sliderRef.current.scrollLeft = scrollLeft - walk;
    };

    useEffect(() => {
        const handleResize = () => {
          const windowWidth = window.innerWidth;
          setMobile(windowWidth <= 1190);
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
          window.removeEventListener('resize', handleResize);
        };
    }, []);

    // useEffect(() => {
    //     const handleScroll = () => {
    //       const element = servicesRef.current;
    //       if (element) {
    //         const { top, bottom } = element.getBoundingClientRect();
    //         console.log(top);
    //         const isTopVisible = top >= 0;
    //         const isBottomVisible = bottom <= window.innerHeight;
    
    //         if (isTopVisible && !isBottomVisible) {
    //           setIsFixed(false);
    //         } else {
    //           setIsFixed(true);
    //         }
    //       }
    //     };
    
    //     window.addEventListener('scroll', handleScroll);
    
    //     return () => {
    //       window.removeEventListener('scroll', handleScroll);
    //     };
    //   }, []);

    useEffect(() => {
        const handleScroll = () => {
          const servicesElement = servicesRef.current;
          const workElement = workRef.current;
    
          if (servicesElement && workElement) {
            const servicesRect = servicesElement.getBoundingClientRect();
            const workRect = workElement.getBoundingClientRect();

            console.log(workRect.top)
    
            const isServicesTopVisible = servicesRect.top <= 0;
            const isServicesBottomVisible = servicesRect.bottom >= window.innerHeight;
            const isWorkVisible = workRect.top <= 350;
    
            setIsFixed(isServicesTopVisible && !isWorkVisible);
          }
        };
    
        window.addEventListener("scroll", handleScroll);
    
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);


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
                <div className={style.home__services} ref={mobile ? null : servicesRef}>
                    <h1 className={style.home__servicesTitle} style={{position: isFixed && !mobile ? 'fixed' : 'absolute', top: isFixed && !mobile ? '120px' : ''}}>
                        Our <br/>Services
                    </h1>
                    <div className={style.home__servicesContent}
                         style={{ overflowY: mobile ? "auto" : "", cursor: mobile ? "pointer" : "", width: '100%'}} 
                         ref={mobile ? sliderRef : null}
                         onMouseDown={mobile ? handleMouseDown : null}
                         onMouseLeave={mobile ? handleMouseLeave : null}
                         onMouseUp={mobile ? handleMouseUp : null}
                         onMouseMove={mobile ? handleMouseMove : null}
                    >
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
                <div className={style.home__work} ref={mobile ? null : workRef}>
                    <div className={style.home__workTitle}>
                        <h3>Discover</h3>
                        <h3>How We Work</h3>
                    </div>
                    <div className={style.home__workContent}>
                        {
                            startPageHow.map(item => {
                                return (
                                    <div key={item.id} className={style.home__workItem}>
                                        {mobile ?
                                        <h2>{item.name}</h2> :
                                        <h1>{item.name}</h1>}
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
                            {mobile ?
                            <h2>Get Started Today!</h2> :
                            <h3>Get Started Today!</h3>}
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