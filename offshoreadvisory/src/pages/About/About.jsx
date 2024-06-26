import React from 'react';
import style from './about.module.scss'
import ReadyToContact from '../../components/ReadyToContact/ReadyToContact'
import img from '../../assets/img/picture-contact.jpeg'

const About = () => {

    const styles = {
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), url(${img}) lightgray 50% / cover no-repeat`,
    }

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
            title: "2011 – Private Banking",
            info: <div>
                    Globalization had already begun by then, and many people in business wanted to 
                    expand and open their businesses abroad. It was very complex for anyone unfamiliar 
                    with the global banking system who had no international experience to set up 
                    overseas companies and open bank accounts correctly. In this need, Offshore 
                    Advisory assumed a leadership role in offering individuals account opening 
                    assistance in offshore zones.
                  </div>
        },
        {
            title: "2013 – Rise of the digital finance market",
            info: <div>
                    The online banking industry took the world by storm, with startups, tech companies, 
                    gaming affiliates, eCommerce, media, and many more internet-based archetypes 
                    launching themselves on the world markets. We were situated at one of the main 
                    hubs in the world.<br/><br/>
                    We were able to assist hundreds of entrepreneurs, companies, and businesses in 
                    setting their corporate structure outside their home county, mainly in Europe. We 
                    became leaders in corporate services to high-tech companies, eCommerce websites, 
                    internet service providers, importers/exporters, finance entrepreneurs, Amazon 
                    Affiliates, and online gaming operators. In those years, we participated in international 
                    gaming conferences like ICE London, the Amsterdam Affiliate Conference, Berlin Affiliate 
                    conferences, IFX Cyprus, IFX Hong Kong, and many more. These gave us worldwide 
                    recognition and the contacts to become a market-leading gaming corporate services 
                    provider.
                  </div>
        },
        {
            title: "2015 – Introduction of new regulations",
            info: <div>
                    In many sectors like gaming, digital financial and high-tech, regulation increased 
                    and became a primary concern. AML, compliance, onboarding, control, and licensing 
                    were the top priority. For Offshore Advisory, this was the ideal time to offer 
                    guidance with Crypto & gaming licensing services and regulation. At that time, we 
                    were developing online gaming LaaS (licensing as a service). We became one of the 
                    leading companies globally that offered complete turnkey solutions for setting up 
                    the company structure, including company formation, license, active bank accounts, 
                    merchant accounts, assistance with white label solutions, corporate advice, and 
                    more.
                  </div>
        },
        {
            title: "2023 – Uncompromising Professionalism",
            info: <div>
                    After twelve years of conducting international and cross-border business for 
                    thousands of customers from all around the world, we continue to develop our 
                    offered services for the Crypto & gaming industry. By offering better banking 
                    solutions, complex corporate structures, and licensing worldwide, we are bringing 
                    clarity to the complexities of doing business across borders.<br/><br/>
                    The trust of customers worldwide is our main advantage, together with a commitment 
                    to uncompromising professionalism.
                  </div>
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
                    Offshore Advisory is a leading independent provider of corporate, trust, fiduciary, 
                    and fund services. We offer specialized solutions for international corporations, 
                    institutional investors, high-net-worth individuals, families, and intermediaries. 
                    Our comprehensive services span company formation, trust and foundation management, 
                    fund administration, and business outsourcing.
                </h3>
            </div>
            <div className={style.about__picture}></div>
            <div className={style.about__mission}>
                <h3 className={style.about__missionMainText}>
                    We prioritize understanding client needs to create bespoke solutions and ensure 
                    efficient service delivery. Our commitment includes maintaining confidentiality, 
                    meeting deadlines, and providing proactive support. Serving over 100 countries, 
                    we collaborate with top law firms and service providers to meet diverse client 
                    requirements.
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
                    <div className={style.about__apartTitle}>
                        <h2>Offshore Advisory:</h2>
                        <h3>
                            Offshore banking system and the Cyprus capital market to meet needs that came 
                            to us from customers. In those days, offshore bank accounts held billions of 
                            dollars, offering minimal or no revenues. Many investors were looking to move 
                            their funds abroad for better returns and better investment products. We took 
                            our vast knowledge and experience in the global banking system and assisted 
                            hundreds of customers to open new bank accounts in Europe.
                        </h3>
                    </div>
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
                    styles={styles}
                />
            </div>
        </div>
        </>
    );
};

export default About;