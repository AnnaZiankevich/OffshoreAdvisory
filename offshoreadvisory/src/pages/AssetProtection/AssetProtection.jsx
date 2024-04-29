import React, { useState, } from 'react';
import style from './asset.module.scss'
import ReadyToContact from '../../components/ReadyToContact/ReadyToContact'
import img from '../../assets/img/picture-contact.jpeg'

const AssetProtection = () => {

    const approachInfo = [
        {
            title: "Offshore Trusts",
            info: "Establishing a trust in a favorable jurisdiction can offer significant asset protection benefits, shielding your wealth from creditors, lawsuits, and other threats.",
        },
        {
            title: "Offshore Companies",
            info: "Offshore company formation provides an additional layer of protection by separating your personal assets from your business interests. We assist clients in selecting the most suitable jurisdiction and navigating the incorporation process seamlessly.",
        },
        {
            title: "Asset Segregation",
            info: "Structuring your assets across multiple jurisdictions can minimize risk and enhance protection. Our experts work closely with clients to develop customized asset segregation strategies tailored to their unique circumstances.",
        },
        {
            title: "Confidentiality Measures",
            info: "Privacy is a key component of asset protection. We help clients maintain confidentiality through secure and compliant offshore structures, ensuring their financial affairs remain private and secure.",
        },
    ]

    return(
        <>
            <div className={style.asset}>
                <div className={style.asset__start}>
                    <div className={style.asset__startContent}>
                        <h1>Asset Protection Strategies</h1>
                        <h3>
                            In an increasingly complex and unpredictable global landscape, safeguarding your assets is paramount. 
                            At Offshore Advisory, we specialize in crafting tailored asset protection strategies designed 
                            to shield your wealth from potential risks and liabilities.
                        </h3>
                    </div>
                </div>
                <div className={style.asset__picture}></div>
                <div className={style.asset__whyMatters}>
                    <div className={style.asset__whyMattersContent}>
                        <div className={style.asset__whyMattersText}>
                            Why Asset Protection Matters
                        </div>
                        <h3>
                            Asset protection isn't just for the ultra-wealthy — it's a prudent practice for anyone concerned 
                            about preserving their hard-earned assets. Whether you're a business owner, investor, or individual 
                            with substantial wealth, proactive measures to safeguard your assets can provide invaluable peace 
                            of mind and security for you and your loved ones.
                        </h3>
                    </div>
                </div>
                <div className={style.asset__approach}>
                    <div className={style.asset__approachContent}>
                        <div className={style.asset__approachText}>
                            <h1 className={style.asset__approachTitle}>
                                Our Approach
                            </h1>
                            <div className={style.asset__approachDesc}>
                                At Offshore Advisory, we understand that every client's situation is unique. That's why we take 
                                a personalized approach to asset protection, leveraging a range of legal structures and 
                                offshore solutions to mitigate risk and optimize security. Our comprehensive services encompass:
                            </div>
                        </div>
                        <div className={style.asset__approachInfo}>
                            {
                                approachInfo.map((item, index) => (
                                    <div key={index} className={style.asset__approachCard}>
                                        <h3>{item.title}</h3>
                                        <p>{item.info}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className={style.asset__whyUs}>
                    <div className={style.asset__whyUsContent}>
                        <h1>Why Choose Offshore Advisory?</h1>
                        <h4>
                            Offshore Advisory is your trusted partner in safeguarding your wealth and securing your financial 
                            future. With our deep expertise in international tax law, asset protection strategies, and offshore 
                            structuring, we offer unmatched guidance and support to clients seeking to fortify their financial 
                            position.
                        </h4>
                    </div>
                </div>
                <div className={style.asset__contact}>
                    <ReadyToContact 
                        title="Ready to embark on a journey of international business excellence?"
                        subtitle="Contact us to learn more about how Offshore Advisory can be your trusted partner in navigating offshore opportunities."
                        img={img}
                    />
                </div>
            </div>
        </>
    );
};

export default AssetProtection;