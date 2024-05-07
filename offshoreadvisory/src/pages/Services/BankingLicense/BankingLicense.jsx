import React from 'react';
import style from './banking.module.scss'
import ReadyToContact from '../../../components/ReadyToContact/ReadyToContact'
import ServicesStartBlock from '../../../components/ServicesStartBlock/ServicesStartBlock'
import List from '../../../components/List/List'
import img from '../../../assets/img/picture-contact.jpeg'

const BankingLicense = () => {

    const bankJuri = [
        {
            title: "Western Sahara",
            text: "Despite its unique status, Western Sahara offers opportunities for banking license acquisition with its favorable regulatory framework and strategic location."
        },
        {
            title: "St. Lucia",
            text: "Saint Lucia boasts a stable economy and supportive regulatory environment, making it an attractive jurisdiction for establishing offshore banks."
        },
        {
            title: "St. Vincent & the Grenadines",
            text: "With its robust financial services sector and business-friendly policies, Saint Vincent and the Grenadines provides an ideal setting for banking license acquisition."
        },
        {
            title: "Comoros",
            text: "Comoros, situated in the Indian Ocean, offers a conducive environment for offshore banking operations, with simplified licensing procedures and attractive incentives."
        },
    ]

    const whyUs = [
        {
            title: "Regulatory Flexibility",
            text: "Offshore jurisdictions often have streamlined regulatory frameworks, making it easier to obtain and maintain a banking license compared to more stringent onshore jurisdictions."
        },
        {
            title: "Tax Optimization",
            text: "Offshore banks may benefit from favorable tax regimes, allowing for greater efficiency in tax planning and optimization."
        },
        {
            title: "Confidentiality",
            text: "Many offshore jurisdictions prioritize client confidentiality, providing a secure environment for banking operations and client transactions."
        },
        {
            title: "Global Reach",
            text: "By establishing an offshore bank, you gain access to international markets and can cater to clients from around the world, enhancing your business opportunities and revenue potential."
        },
    ]

    return (
        <>
            <div className={style.banking}>
                <div className={style.banking__start}>
                    <ServicesStartBlock 
                        title='Our Services:'
                        subtitle='Banking License'
                        text="Whether you're looking to establish a bank for international transactions, wealth management, or other financial services, we provide comprehensive support to navigate the licensing process seamlessly."
                    />
                </div>
                <div className={style.banking__whyUs}>
                    <div className={style.banking__whyUsContent}>
                        <div className={style.banking__whyUsTitle}>
                            Why Obtain<br/><span>a Banking License Offshore?</span>
                        </div>
                        <div className={style.banking__whyUsInfo}>
                            {whyUs.map(item => {
                                return <div className={style.banking__whyUsItem} key={item.title}>
                                         <h2 className={style.banking__whyUsItemTitle}>{item.title}</h2>
                                         <div className={style.banking__whyUsItemDesc}>{item.text}</div>
                                       </div>
                            })}
                        </div>
                    </div>
                </div>
                <div className={style.banking__picture}></div>
                <div className={style.banking__juri}>
                    <List 
                        title='Key Jurisdictions for Banking License Acquisition'
                        infoArray={bankJuri}
                    />
                    <List 
                        title='Explore Prominent Jurisdictions'
                        infoArray={bankJuri}
                    />
                </div>
                <div className={style.banking__contact}>
                    <ReadyToContact 
                        title='Ready to embark on your offshore journey?'
                        subtitle="Contact Offshore Advisory to schedule a consultation with one of our experts. We'll assess your requirements, recommend suitable jurisdictions, and guide you through every step of the licensing process, helping you establish a successful offshore bank with confidence."
                        img={img}
                    />
                </div>
            </div>
        </>
    );
};

export default BankingLicense;