import React, { useState, useRef } from 'react';
import style from './asset.module.scss'
import ReadyToContact from '../../components/ReadyToContact/ReadyToContact'
import img from '../../assets/img/picture-contact.jpeg'

const AssetProtection = () => {

    const styles = {
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), url(${img}) lightgray 50% / cover no-repeat`,
    }

    const benefits = [
        {
            title: 'Best Asset Protection Structures',
            content: 
                <div className={style.asset__whyMattersMainText}>
                    In order to establish the best asset protection structure, a variety of entities 
                    must be considered including private foundations, offshore trusts, offshore 
                    companies, offshore bank accounts, various types of insurance policies and/or 
                    an offshore brokerage account. Usually, some combination of these is utilized. 
                    It is also often possible to maintain assets in their current location to be 
                    managed by trusted investment advisors while merely transferring ownership of 
                    the assets into an offshore asset protection structure. In this way, the client 
                    enjoys the comfort of having the best asset protection structure along with the 
                    assets held in “onshore” financial institutions.<br/><br/>

                    Regardless of the location of the entities, the goal is to create a legally 
                    compliant structure offering the best asset protection available. Once established, 
                    existing assets are legally transferred to the structure. Once lawfully transferred, 
                    the assets thereafter enjoy the best asset protection available when it comes to 
                    fending off potential financial enemies. It is important that the assets when 
                    transferred are unencumbered in any way and are not being transferred with the 
                    intent to hinder, delay or defraud any current creditors of the party transferring 
                    the assets. If either of these requirements are not observed, it is possible that 
                    the transfer of the assets can be declared a fraudulent conveyance by a court of 
                    law with resulting legal repercussions.<br/><br/>

                    Clients are advised that in order to set up a proper offshore asset protection 
                    structure, the assets must be legally transferred into one or more of the entities 
                    within the structure. Thereafter the assets become the property with full legal 
                    title of an offshore company, offshore trust or offshore foundation depending on 
                    the composition of the offshore asset protection structure. It is often possible 
                    for the client to appoint a protector, guardian or similar (e.g. trusted family 
                    lawyers, financial advisors, accountants, etc.) as well as other roles within the 
                    structure to provide the necessary comfort level for the client. Where tax planning 
                    is not an object or where it will not otherwise introduce a level of tax risk, the 
                    client (i.e. HNWI or family members) may even be able to fill one or more of these 
                    roles.
                </div>
        },
        {
            title: 'Private Foundation',
            content: 
                <div className={style.asset__whyMattersMainText}>
                    For those living in a civil law country where the concept of a trust may not be 
                    recognised, the best offshore asset protection structure would usually include 
                    an offshore private foundation. However, this may be the best asset protection 
                    structure even for those residents in certain common law countries as well. The 
                    key difference from an asset protection trust is that a private foundation is 
                    usually found in civil law countries where it is a product of specific legislation. 
                    Additionally, unlike a trust, a private foundation is a separate legal entity and 
                    is “incorporated” similar to a company. Thus, it is not susceptible to any 
                    “validity” issues as could be the case with a poorly structured or improperly 
                    administered asset protection trust. Offshore private foundations offer a wide 
                    variety of structuring options making them quite flexible to meet various 
                    requirements and easily adapted to a bespoke offshore asset protection structure.   
                </div>
        },
        {
            title: 'Asset Protection Trust',
            content: 
                <div className={style.asset__whyMattersMainText}>
                    For those mainly living in common law countries where the concept of a “trust” 
                    is recognised, the best asset protection structure would usually include a 
                    properly structured offshore trust (i.e. an “offshore asset protection trust”). 
                    This can provide a wealth of benefit for estate/succession planning, avoidance 
                    of forced heirship and inheritance taxes, protection against future financial 
                    enemies and other adversaries and more. In order to achieve these benefits, 
                    it is imperative that the offshore asset protection trust is structured and 
                    administered properly. When properly structured and administered an offshore 
                    asset protection trust can be an excellent tool; however, a surprising number 
                    of these trusts are not structured properly and as such run the risk of being 
                    deemed invalid. This means they would not hold up in a court of law for a 
                    variety of reasons which can bring a host of negative issues to the Settlor. 
                    It is as if the trust never existed and thus all of the normal benefits that 
                    would otherwise be enjoyed by having an offshore asset protection trust are 
                    nullified. The most common issues are that the Settlor never officially 
                    transfers any assets to the Trustee or the Settlor maintains so much control 
                    that the intention of the offshore asset protection trust is called into 
                    question by a judge.<br/><br/>

                    An offshore asset protection trust must be carefully crafted after a close 
                    consultation with the client to ensure it serves the intended purposes and 
                    to ensure that the validity of the trust cannot be challenged at a later 
                    date.
                </div>
        },
        {
            title: 'Insurance Wrapper',
            content: 
                <div className={style.asset__whyMattersMainText}>
                    A popular addition to an offshore asset protection trust or private foundation 
                    is a type of insurance policy called an insurance wrapper. This can be in the 
                    form of a type of portfolio bond or a life insurance wrapper. Not only does 
                    the addition of an insurance wrapper create a virtually impenetrable asset 
                    protection structure, it often provides for completely legitimate tax mitigation 
                    where a trust or foundation alone may not provide same by allowing assets to 
                    grow within the insurance policy in a lawful tax-exempt manner.<br/><br/>

                    When combined with an offshore asset protection trust or private foundation, 
                    the policy owner would be the trustees of the offshore asset protection trust 
                    or the private foundation respectively.
                </div>
        },
    ]

    return(
        <>
            <div className={style.asset}>
                <div className={style.asset__start}>
                    <div className={style.asset__startContent}>
                        <h1>Best Offshore Asset Protection, Asset Protection Trust</h1>
                        <h2>
                            What is the best asset protection structure available?
                        </h2>
                    </div>
                </div>
                <div className={style.asset__picture}></div>
                <div className={style.asset__whyMatters}>
                        <div className={style.asset__whyMattersStartText}>
                            The best asset protection structure available might involve a well 
                            constructed offshore asset protection trust or a private foundation. 
                            High net worth individuals (HNWI), wealthy families and those aspiring 
                            to be included in this group must think about preserving the assets 
                            that they have worked so hard to acquire and continue to accumulate. 
                            Half of the work is getting to this point. Thereafter care must be taken 
                            not only to invest wisely and, in a tax, efficient manner but it is 
                            equally important to put in place the best asset protection solution 
                            possible to ensure those assets and wealth are protected from potential 
                            future financial enemies. Unfortunately, the world is becoming 
                            increasingly more litigious, governments continue to encroach on civil 
                            liberties and privacy and technology continues to make it easier for 
                            financial enemies to search for assets while making the decision whether 
                            or not you are “sue worthy”. This is especially the case when you are a 
                            high net worth individual (HNWI) or a wealthy family. Whether the situation 
                            calls for establishing an offshore asset protection trust, private foundation 
                            or another solution, Sterling can assist you or your clients by setting up 
                            best asset protection structure and thereafter providing the necessary 
                            ongoing support services.
                        </div>
                        {benefits.map(item => (
                            <div className={style.asset__whyMattersItem} key={item.title}>
                                <h2>{item.title}</h2>
                                {item.content}
                            </div>
                        ))}
                        <div className={style.asset__whyMattersBottomText}>
                            Contact Us today for a free consultation regarding our offshore asset protection 
                            services to get started on a structure designed specifically for your or your 
                            client’s bespoke requirements.
                        </div>
                </div>
                <div className={style.asset__contact}>
                    <ReadyToContact 
                        title="Ready to embark on a journey of international business excellence?"
                        subtitle="Contact us to learn more about how Offshore Advisory can be your trusted partner in navigating offshore opportunities."
                        styles={styles}
                    />
                </div>
            </div>
        </>
    );
};

export default AssetProtection;