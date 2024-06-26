import React from 'react';
import style from './residence.module.scss'
import ReadyToContact from '../../../components/ReadyToContact/ReadyToContact'
import ServicesStartBlock from '../../../components/ServicesStartBlock/ServicesStartBlock'
import List from '../../../components/List/List'
import img from '../../../assets/img/picture-contact.jpeg'

const ResidencePassport = () => {

    const styles = {
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), url(${img}) lightgray 50% / cover no-repeat`,
    }

    const countries = [
        {
            title: "Italy",
            text: "Immerse yourself in Italy's timeless beauty and cultural richness through its investor-friendly residency programs. From the Elective Residence Visa, perfect for those seeking the Italian lifestyle, to the Investor Visa for Entrepreneurs, designed to attract business investors, Italy offers a variety of pathways to residency. Let us navigate the intricacies of Italian bureaucracy, ensuring a seamless transition to your new Italian home."
        },
        {
            title: "Spain",
            text: "Bask in the Mediterranean sun and embrace the vibrant culture of Spain with our expert assistance in securing residency. Through Spain's Golden Visa Program, investors can obtain residency by investing in real estate, while the Non-Lucrative Visa caters to retirees and individuals with independent means. Our team simplifies the application process, guiding you towards your Spanish residency dreams effortlessly."
        },
        {
            title: "Cyprus",
            text: "Experience the allure of Cyprus and its golden shores with our comprehensive residency and citizenship solutions. The Cyprus Investment Program and Permanent Residence Permit offer pathways to residency and citizenship through investment in real estate or businesses. Partner with us to navigate Cyprus' favorable regulatory landscape and unlock the benefits of European residency and citizenship."
        },
        {
            title: "Dubai",
            text: "Embrace the boundless opportunities of Dubai, a global hub of innovation and prosperity, with our expert guidance in securing residency. Whether you're an investor, entrepreneur, or professional, Dubai's array of residency visas, including the Investor Visa and Retirement Visa, cater to diverse needs. Let us facilitate your journey to residency in Dubai, where luxury meets opportunity."
        },
    ]

    const services = [
        {
            title: "Residency Programs",
            text: "We provide guidance on residency programs available in each country, including investor visas, golden visas, and residency by investment schemes, helping clients fulfill eligibility requirements and navigate the application process."
        },
        {
            title: "Property Investment",
            text: "Our team assists clients in identifying and acquiring residential or commercial properties that align with their preferences, budget, and investment goals. From luxury villas and seaside apartments to commercial real estate, we offer expert advice and support at every stage of the transaction."
        },
        {
            title: "Legal and Financial Assistance",
            text: "We collaborate with trusted legal and financial professionals in each jurisdiction to ensure compliance with local regulations, handle documentation, and facilitate smooth property transactions."
        },
    ]

    return (
        <>
            <div className={style.residence}>
                <div className={style.residence__start}>
                    <ServicesStartBlock
                        title='Our Services:'
                        subtitle="Residence & passport"
                        text="Whether you're drawn to the charm of Italy, the allure of Spain, the strategic advantages of Cyprus, or the dynamism of Dubai, we provide tailored guidance to make your aspirations a reality."
                    />
                </div>
                <div className={style.residence__countries}>
                    <div className={style.residence__countriesContent}>
                        {countries.map(item => {
                            return <div className={style.residence__countriesItem} key={item.title}>
                                     <h1 className={style.residence__countriesItemTitle}>{item.title}</h1>
                                     <div className={style.residence__countriesItemDesc}>{item.text}</div>
                                   </div>
                        })}
                    </div>
                </div>
                <div className={style.residence__picture}></div>
                <div className={style.residence__services}>
                    <List 
                        title='At Offshore Advisory, we offer a comprehensive suite of services to facilitate residency and property acquisition in Italy, Spain, and Cyprus'
                        infoArray={services}
                    />
                </div>
                <div className={style.residence__contact}>
                    <ReadyToContact
                        title='Ready to embark on your path to global residency and citizenship?'
                        subtitle="Contact Offshore Advisory to schedule a consultation with our seasoned advisors. Whether your destination is Italy, Spain, Cyprus, Dubai, or beyond, let us navigate the complexities for you, opening doors to new horizons and boundless opportunities."
                        styles={styles}
                    />
                </div>
            </div>
        </>
    );
};

export default ResidencePassport;