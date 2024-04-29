import React from 'react';
import style from './about.module.scss'
import ReadyToContact from '../../components/ReadyToContact/ReadyToContact'
import img from '../../assets/img/picture-contact.jpeg'

const About = () => {

    const whoInfo = [
        {
            title: "Global Pioneers",
            info: "With years of experience in the industry, we are pioneers in navigating the complexities of offshore licensing.",
        },
        {
            title: "Expert Advisors",
            info: "Our team comprises seasoned professionals with a deep understanding of international business regulations and offshore jurisdictions.",
        },
        {
            title: "Client-Centric Approach",
            info: "We prioritize our clients' success, offering tailored solutions and personalized support every step of the way.",
        },
    ]

    const apartInfo = [
        {
            title: "Compliance Excellence",
            info: "We go beyond providing licenses; we ensure that your business operates within the legal frameworks of each jurisdiction.",
        },
        {
            title: "Global Network",
            info: "Our extensive network enables us to seamlessly connect businesses with offshore opportunities worldwide.",
        },
        {
            title: "Innovation Hub",
            info: "Embrace innovation with confidence, knowing that we stay ahead of industry trends and regulatory changes.",
        },
    ]

    return (
        <>
        <div className={style.about}>
            <div className={style.about__start}>
                <h1 className={style.about__title}>
                    About Us    
                </h1>
                <h3 className={style.about__description}>
                    We specialize in providing comprehensive licensing services in prime jurisdictions, 
                    including Western Sahara, St. Lucia, St. Vincent, and Comoros. Our commitment is to 
                    empower businesses with the tools they need to thrive on the global stage.
                </h3>
            </div>
            <div className={style.about__picture}></div>
            <div className={style.about__mission}>
                <div className={style.about__missionSecondText}>
                    At Offshore Advisory, we envision a world where businesses have the freedom to expand, innovate, and prosper without 
                    unnecessary constraints. We aim to be the catalyst for international success by facilitating access to secure 
                    and advantageous offshore zones.
                </div>
                <h3 className={style.about__missionMainText}>
                    Our mission is to expand business opportunities to thrive in the global market by simplifying the process of 
                    obtaining licenses in strategic offshore jurisdictions.
                </h3>
            </div>
            <div className={style.about__who}>
                <div className={style.about__whoContent}>
                    <div className={style.about__whoTitle}>
                        Who We Are
                    </div>
                    <div className={style.about__whoInfo}>
                        {whoInfo.map(item => {
                            return <div className={style.about__whoItem} key={item.title}>
                                     <div className={style.about__WhoItemContent}>
                                        <h3>{item.title}</h3>
                                        <div className={style.about__WhoItemInfo}>
                                            {item.info}
                                        </div>
                                     </div>
                                   </div>
                        })}
                    </div>
                </div>
            </div>
            <div className={style.about__apart}>
                <div className={style.about__apartContent}>
                    <h1>What Sets Us Apart</h1>
                    <div className={style.about__apartInfo}>
                        <div className={style.about__apartInfoItems}>
                            {apartInfo.map(item => {
                                return <div className={style.about__apartItem} key={item.title}>
                                          <h3>{item.title}</h3>
                                          <div className={style.about__apartItemInfo}>
                                            {item.info}
                                          </div>
                                       </div>
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.about__contact}>
                <ReadyToContact 
                    title='Ready to embark on a journey of international business excellence?'
                    subtitle='Contact us to learn more about how Offshore Advisory can be your trusted partner in navigating offshore opportunities.'
                    img={img}
                />
            </div>
        </div>
        </>
    );
};

export default About;