import React, { useState, useRef } from 'react';
import style from './regions-template.module.scss'
import ReadyToContact from '../ReadyToContact/ReadyToContact';
import getStarted from '../../assets/img/picture-started1.jpeg';
import sahara from '../../assets/img/regions/sahara.jpeg'
import comoros from '../../assets/img/regions/comoros.jpeg'
import lucia from '../../assets/img/regions/st-lucia.jpeg'
import vincent from '../../assets/img/regions/st-vincent.jpeg'
import banking from '../../assets/img/regions/banking.jpeg'
import insurance from '../../assets/img/regions/insurance.jpeg'
import formation from '../../assets/img/regions/formation.jpeg'
import brokerage from '../../assets/img/regions/brokerage.jpeg'
import trust from '../../assets/img/regions/trust.jpeg'
import { servTitles } from '../../Constants/StaticData'

const RegionsTemplate = ({ info }) => {

    const img = info.find(item => item.image)?.image;
    const title = info.find(item => item.title)?.title;
    const descTitle = info.find(item => item.descTitle)?.descTitle;
    const descText = info.find(item => item.descText)?.descText;
    const servicesDesc = info.find(item => item.servicesDesc)?.servicesDesc;
    const servicesData = info.find(item => Array.isArray(item.services))
    const benefitstitle = info.find(item => item.benefitstitle)?.benefitstitle;
    const benefitsData = info.find(item => Array.isArray(item.benefits))

    const services = servicesData.services
    const benefits = benefitsData.benefits

    const sliderRef = useRef(null);
    const [isDown, setIsDown] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

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

    const readyToContactInfo = [
        'Ready to embark on a journey of international business excellence?',
        'Contact us to learn more about how Offshore Advisory can be your trusted partner in navigating offshore opportunities.',
    ]

    const servImages = [
        banking,
        insurance,
        formation,
        brokerage,
        trust
    ]

    const mergedArray = servImages.map((image, index) => ({
        title: servTitles[index],
        description: services[index],
        image: image,
    }));

    let imgPath = '';

    if (img === 'sahara') {
        imgPath = sahara;
    } else if (img === 'comoros') {
      imgPath = comoros;
    } else if (img === 'lucia') {
      imgPath = lucia;
    } else if (img === 'vincent') {
      imgPath = vincent;
    }

    const isEven = (value) => {
        return value % 2 === 0;
    };

    const styles = {
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), url(${getStarted}) lightgray 50% / cover no-repeat`,
    }

    return (
        <div className={style.region}>
            <div className={style.region__start}
                 style={{
                    background: `linear-gradient(0deg, rgba(0, 0, 0, 0.30) 0%, rgba(0, 0, 0, 0.30) 100%), url('${imgPath}') lightgray 50% / cover no-repeat`,
                    backgroundPosition: 'center center'
                 }}
            >
                <h2>{title}</h2>
            </div>
            <div className={style.region__desc}>
                <div className={style.region__descBody}>
                    <p>{descTitle}</p>
                    <h3>{descText}</h3>
                </div>
            </div>
            <div className={style.region__services}>
                <div className={style.region__servBody}>
                    <p>{servicesDesc}</p>
                    <div className={style.region__servContent}>
                        {mergedArray.map((item, index) => (
                            <div key={index} className={isEven(index) ? style.region__servItemLeft : style.region__servItemRight}>
                                <div className={style.region__servImg}
                                     style={{
                                        background: `url('${item.image}') lightgray 50% / cover no-repeat`,
                                        filter: 'grayscale(100%)'
                                     }}
                                ></div>
                                <div className={style.region__servInfo}>
                                    <h2 style={{ whiteSpace: "pre-line" }}>
                                        {item.title}
                                    </h2>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className={style.region__benefits}>
                <div className={style.region__benefitsTitle}>
                    Benefits of Choosing <br/>
                    {benefitstitle}
                </div>
                <div className={style.region__benefitsCards}
                     style={{ overflowY: "auto", cursor: "pointer" }} 
                     ref={sliderRef}
                     onMouseDown={handleMouseDown}
                     onMouseLeave={handleMouseLeave}
                     onMouseUp={handleMouseUp}
                     onMouseMove={handleMouseMove}
                >
                  <div className={style.region__benefitsDist} style={{ display: "flex", width: "125%" }}>
                    {
                        benefits.map((item, index) => (
                            <div key={index} className={style.region__benefitsCard}>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        ))
                    }
                  </div>
                </div>
            </div>
            <ReadyToContact title={readyToContactInfo[0]} subtitle={readyToContactInfo[1]} styles={styles} />
        </div>
    );
};

export default RegionsTemplate;