import React from 'react';
import style from './company.module.scss'
import ReadyToContact from '../../../components/ReadyToContact/ReadyToContact'
import ServicesStartBlock from '../../../components/ServicesStartBlock/ServicesStartBlock'
import img from '../../../assets/img/picture-contact.jpeg'

const CompanyFormation = () => {

    const styles = {
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), url(${img}) lightgray 50% / cover no-repeat`,
    }

    const whyUsInfo = [
        'Consultation and Guidance: Expert advice on selecting the optimal jurisdiction and structuring for maximum tax benefits and compliance with international regulations.',
        'Document Preparation: Drafting and preparing all required documents for the incorporation process, ensuring accuracy and compliance.',
        'Company Registration: Handling the complete incorporation process, from submission to approval with the respective offshore company registrar.',
        'Domiciliary Services: Providing registered office, local agent, company secretary, and safe custody of records.',
        'Additional Services: Offering virtual office services, professional director services, nominee shareholders, and more to support your business needs.'
    ]

    const juriInfo = [
        {
            title: 'Benefits of Offshore Company Formation:',
            content: 
                <div className={style.company__juri_text}>
                    - Tax Efficiency: Leveraging offshore jurisdictions to reduce tax liabilities legally.<br/>
                    - Asset Protection: Safeguarding assets from legal risks and creditors.<br/>
                    - Confidentiality: Ensuring privacy and confidentiality for company owners and directors.<br/>
                    - Ease of Administration: Simplified corporate structure with minimal reporting requirements.<br/>
                    - Global Reach: Facilitating international trade and business expansion.<br/>
                </div>
        },
        {
            title: 'Process:',
            content: 
                <div className={style.company__juri_text}>
                    1.  Initial Consultation: Discuss your needs and objectives with our experts.<br/>
                    2. Jurisdiction Selection: Choose the best offshore jurisdiction for your business.<br/>
                    3. Document Preparation and Submission: We handle all paperwork and submissions.<br/>
                    4. Incorporation and Registration: Receive your company registration documents.<br/>
                    5. Post-Incorporation Support: Ongoing services such as banking, accounting, and compliance.<br/>
                </div>
        },
        {
            title: 'Why Choose Offshore Advisory?',
            content: 
                <div className={style.company__juri_text}>
                    - Expertise: Years of experience in offshore company formation and management.<br/>
                    - Personalized Service: Tailored solutions to meet individual client needs.<br/>
                    - Compliance: Ensuring adherence to all legal and regulatory requirements.<br/>
                    - Efficiency: Streamlined processes for quick and hassle-free company setup.<br/>
                    - Support: Continuous support and advisory services post-incorporation.<br/>
                </div>
        },
    ]

    return (
        <>
            <div className={style.company}>
                <div className={style.company__start}>
                    <ServicesStartBlock 
                        title='Company Formation Services'
                        subtitle='Offshore Company Formation'
                        text="Offshore Advisory offers comprehensive offshore company formation and registration services tailored to your needs. We facilitate the setup of companies in many premier offshore jurisdictions, ensuring a smooth and compliant process."
                    />
                </div>
                <div className={style.company__whyUs}>
                    <div className={style.company__whyUsContent}>
                        <h2 className={style.company__whyUsTitle}>Our Services:</h2>
                        <ul className={style.company__whyUsText}>
                            {whyUsInfo.map(item => (
                                <li key={item.length}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className={style.company__picture}></div>
                <div className={style.company__juri}>
                    <div className={style.company__juri_content}>
                        {juriInfo.map(item => (
                            <div className={style.company__juri_item} key={item.title}>
                                <h3 className={style.company__juri_title}>{item.title}</h3>
                                {item.content}
                            </div>
                        ))}
                    </div>
                    <div className={style.company__juri_bottom}>
                        For more details, visit our [Company Formation] 
                        (<a>https://offshoreadvisory.pro/services/company-formation</a>) 
                        page or contact us for a consultation.
                    </div>
                </div>
                <div className={style.company__contact}>
                    <ReadyToContact 
                        title='Ready to embark on your offshore journey?'
                        subtitle='Contact Offshore Advisory to explore your options, receive personalized guidance, and initiate the company formation process seamlessly. Unlock the potential of global markets with our expert assistance and embark on a path to success with confidence.'
                        styles={styles}
                    />
                </div>
            </div>
        </>
    );
};

export default CompanyFormation;