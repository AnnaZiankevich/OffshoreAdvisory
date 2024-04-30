import React from 'react';
import style from './company.module.scss'
import ReadyToContact from '../../../components/ReadyToContact/ReadyToContact'
import ServicesStartBlock from '../../../components/ServicesStartBlock/ServicesStartBlock'
import List from '../../../components/List/List'
import img from '../../../assets/img/picture-contact.jpeg'

const CompanyFormation = () => {

    const juriInfo = [
        {
            title: "Western Sahara",
            text: "Despite its unique status, Western Sahara offers opportunities for offshore company formation with its straightforward regulatory framework. With our guidance, you can navigate the process efficiently, leveraging the jurisdiction's advantages for your business goals."
        },
        {
            title: "St. Lucia",
            text: "Saint Lucia, situated in the Eastern Caribbean, is renowned for its stable economy and attractive tax regime. By establishing a company here, you gain access to a jurisdiction with robust financial services infrastructure and a favorable business environment."
        },
        {
            title: "St. Vincent & the Grenadines",
            text: "Saint Vincent and the Grenadines is a jurisdiction prized for its confidentiality provisions and tax incentives. Our experts can assist you in setting up your offshore company in this Caribbean gem, ensuring compliance with local regulations and maximizing your business opportunities."
        },
        {
            title: "Comoros",
            text: "With its strategic location in the Indian Ocean and favorable business climate, Comoros presents an enticing option for offshore company formation. We offer comprehensive support to navigate the incorporation process smoothly, allowing you to capitalize on the jurisdiction's benefits."
        },
    ]

    return (
        <>
            <div className={style.company}>
                <div className={style.company__start}>
                    <ServicesStartBlock 
                        title='Our Services:'
                        subtitle='Company formation'
                        text="Whether you're looking to establish a bank for international transactions, wealth management, or other financial services, we provide comprehensive support to navigate the licensing process seamlessly."
                    />
                </div>
                <div className={style.company__whyUs}>
                    <div className={style.company__whyUsContent}>
                        <h2 className={style.company__whyUsTitle}>Why Choose Offshore Company Formation?</h2>
                        <div className={style.company__whyUsText}>
                            Offshore company formation offers numerous benefits, including tax optimization, asset protection, 
                            confidentiality, and access to global markets. Whether you're a multinational corporation, 
                            an entrepreneur, or an investor, offshore entities provide strategic advantages for 
                            expanding your business ventures internationally.
                        </div>
                    </div>
                </div>
                <div className={style.company__picture}></div>
                <div className={style.company__juri}>
                    <List 
                        title='Explore Prominent Jurisdictions'
                        infoArray={juriInfo}
                    />
                </div>
                <div className={style.company__contact}>
                    <ReadyToContact 
                        title='Ready to embark on your offshore journey?'
                        subtitle='Contact Offshore Advisory to explore your options, receive personalized guidance, and initiate the company formation process seamlessly. Unlock the potential of global markets with our expert assistance and embark on a path to success with confidence.'
                        img={img}
                    />
                </div>
            </div>
        </>
    );
};

export default CompanyFormation;