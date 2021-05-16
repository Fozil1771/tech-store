import React from 'react'

import Account from '../../../assets/icons/account.svg'
import Savings from '../../../assets/icons/saving.svg'
import Support from '../../../assets/icons/support.svg'
import { ServiceSection } from './service.style'



const Services = () => {
    return (
        <div className="service-main">
            <ServiceSection>
                <div className="service-card">
                    <div className="service-card__img">
                        <img src={Support} alt="Support" />
                    </div>
                    <h5 className="service-card__title">Product Support</h5>
                    <p className="service-card__text">Up to 3 years on-site warranty available for your peace of mind.</p>
                </div>
                <div className="service-card">
                    <div className="service-card__img">
                        <img src={Account} alt="Account" />
                    </div>
                    <h5 className="service-card__title">Personal Account</h5>
                    <p className="service-card__text">With big discounts, free delivery and a dedicated support specialist.</p>
                </div>
                <div className="service-card">
                    <div className="service-card__img">
                        <img src={Savings} alt="Savings" />
                    </div>
                    <h5 className="service-card__title">Amazing Savings</h5>
                    <p className="service-card__text">Up to 70% off new Products, you can be sure of the best price.</p>
                </div>
            </ServiceSection>
        </div>
    )
}

export default Services;
