import React from 'react';
import style from './gaming.module.scss'
import ReadyToContact from '../../../components/ReadyToContact/ReadyToContact'
import ServicesStartBlock from '../../../components/ServicesStartBlock/ServicesStartBlock'
import List from '../../../components/List/List'
import img from '../../../assets/img/picture-contact.jpeg'

const GamingLicense = () => {

    const advantages = [
        {
            title: "Company Incorporation Flexibility",
            text: "There is no requirement for a company to be incorporated in the jurisdiction. Applicants can incorporate in any jurisdiction that aligns best with their business objectives, offering significant flexibility."
        },
        {
            title: "Unified License",
            text: "The license covers all types of gambling activities, simplifying and reducing costs for operators with a convenient and efficient unified approach."
        },
        {
            title: "White-Label Licensing",
            text: "The comprehensive license can be used across various online gaming operations like casinos, poker, betting, lotteries, as well as for renting out games and white-label services. This versatility is beneficial for a wide range of gaming activities."
        },
        {
            title: "Suitable for B2B and B2C",
            text: "The license is applicable for both B2C (business-to-consumer) and B2B (business-to-business) operations, providing versatility for different business models."
        },
        {
            title: "Game Providers",
            text: 'Currently, only those providers that work with operators without a license or "those that require a license" on a case-by-case basis are collaborating.'
        },
        {
            title: "Payment Solutions",
            text: "The situation here is more favorable. Payment providers that can be opened without a license are cooperating, along with a medium portion of payment systems that require a license. Compliance for remaining payment systems is assessed on a case-by-case basis. The license could help in acquiring payments that are unavailable to operators without a license, depending on the target countries."
        },
        {
            title: "Banking Options",
            text: "Currently, there are banks ready to accept operators with this license (at least which I am aware of). This is a significant plus for the license as it facilitates banking and financial transactions for operators."
        },
        {
            title: "Validator for License Verification",
            text: "One key feature of the license is that it includes a validator. This tool enables players to verify that an operator holds a valid license, significantly enhancing trust and credibility among users."
        },
    ]

    const whyUs = [
        {
            title: "Insurance Licenses",
            text: "For operators who have their own games, a unique game, or a novel concept, obtaining a license might be more challenging, and alternatives are limited. In this scenario, the licensing process could be a viable option as it may offer a more accessible pathway to obtaining a license, especially for unique or innovative gaming propositions."
        },
        {
            title: "Operators Needing to Showcase a License to Investors or Players",
            text: "It is an ideal choice for operators who need to demonstrate their legitimacy to investors or players. The availability of a Validator tool enables easy verification of the license's validity. Additionally, having a company registered for gambling activities, possibly coupled with a company (in the EU), can enhance trust and credibility. The process is described as relatively quick and straightforward, requiring minimal complex documentation, making it attractive for operators seeking efficient licensing."
        },
        {
            title: "Operators Looking for Rapid Licensing and Launch",
            text: "For those needing to obtain a license swiftly and start operations, it offers a quick turnaround. This expedited process is beneficial for operators who want to launch their services promptly. Furthermore, it provides an opportunity to establish operations"
        },
    ]

    return (
        <>
            <div className={style.gaming}>
                <div className={style.gaming__start}>
                    <div className={style.gaming__startContent}>
                        <h2>
                            Welcome to Offshore Advisory – Your Gateway to <span>Gaming License Excellence in</span>
                        </h2>
                    </div>
                </div>
                <div className={style.gaming__info}>
                    <div className={style.gaming__infoContent}>
                        <div className={style.gaming__infoCards}>
                            <div className={style.gaming__infoCard}>
                                <div className={style.gaming__infoCardTitle}>
                                    The popularity of a global gambling license surged in response to the 2023 reforms in the 
                                    gaming licensing system, prompting operators to explore alternative jurisdictions. 
                                </div>
                                <div className={style.gaming__infoCardDesc}>
                                    The strategic leadership of the company issuing this license, led by an experienced professional, 
                                    played a pivotal role in acquiring the right to issue licenses and effectively promoting the 
                                    license through strategic connections.
                                </div>
                            </div>
                            <div className={style.gaming__infoCard}>
                                <div className={style.gaming__infoCardTitle}>
                                    Presently, the operation of this licensing is managed by skilled professionals with the aim of 
                                    elevating its status. A Google search for "global gaming license" reveals numerous articles from 
                                    leading companies in the gambling industry and beyond, indicating a growing recognition, which 
                                    was relatively unknown before.
                                </div>
                                <div className={style.gaming__infoCardDesc}>
                                    The commitment is to providing a fair, safe, and transparent gaming environment for both players 
                                    and operators. The licensing process is described as straightforward and efficient, incorporating 
                                    measures against fraud and money laundering, as well as a formal dispute resolution process.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.gaming__restricted}>
                    <div className={style.gaming__restrictedContent}>
                        <h3 className={style.gaming__restrictedTitle}>
                            Restricted Countries&nbsp;
                            <span>(The license is not tied to any specific jurisdictions, providing a global gaming license without restrictions).</span>
                        </h3>
                        <div className={style.gaming__restrictedInfo}>
                            <div className={style.gaming__restrictedText}>
                                This selection underscores a clear understanding of feasible and inadvisable operational locations, 
                                aligning with gaming regulations or unofficially considered non-recommendable for gaming operations. 
                                This alignment suggests that the licensing authority is not only aware of the global gaming regulatory 
                                landscape but is also actively taking steps to align with internationally recognized standards and 
                                practices.
                            </div>
                            <div className={style.gaming__restrictedText}>
                                This approach, which will likely be further elaborated in the chapters titled "Replacement" and 
                                "The Future," indicates that the regulatory framework is being developed with an eye on the 
                                broader international context, taking into account both established and emerging norms in the 
                                global gaming industry. This strategic positioning could play a significant role in shaping the future 
                                as a competitive and respected licensing jurisdiction in the gaming sector.
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.gaming__picture}></div>
                <div className={style.gaming__whyUs}>
                    <div className={style.gaming__whyUsContent}>
                        <div className={style.gaming__whyUsTitle}>
                            Who is it<br/><span>Suitable for?</span>
                        </div>
                        <div className={style.gaming__whyUsInfo}>
                            {whyUs.map(item => {
                                return <div className={style.gaming__whyUsItem} key={item.title}>
                                         <h3 className={style.gaming__whyUsItemTitle}>{item.title}</h3>
                                         <div className={style.gaming__whyUsItemDesc}>{item.text}</div>
                                       </div>
                            })}
                        </div>
                    </div>
                </div>
                <div className={style.gaming__advantages}>
                    <List
                        title='Is it a Replacement?'
                        subtitle='(Advantages and Disadvantages)'
                        infoArray={advantages}
                    />
                </div>
                <div className={style.gaming__contact}>
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

export default GamingLicense;