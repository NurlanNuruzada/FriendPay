import React from 'react'
import Styles from './PricingSection.module.css'
import ArrowImage from '../../../Images/arrow_outward.svg'
import Image from '../../../Images/Frame 1171275585.svg'
import Logo1 from '../../../Images/Logo/American.svg'
import Logo2 from '../../../Images/Logo/Visa.svg'
import Logo3 from '../../../Images/Logo/discoverLogo.svg'
import Logo4 from '../../../Images/Logo/masterCard.svg'
export default function PricingSection() {
    return (
        <div className={Styles.Main}>
            <div className={Styles.LeftContainer}>
                <h1>Pricing</h1>
                <div className={Styles.LeftContainerInfo}>
                    <h2>FriendPay offers transparent and competitive rates, ensuring you keep more of what you earn. Discover our flexible pricing options today.</h2>
                    <button><img src={ArrowImage} alt="" srcset="" />Get Paid</button>
                </div>
            </div>
            <div className={Styles.RigntContainer}>
                <div className={Styles.InfoConatiner}>
                    <h1>1-3%* Commission</h1>
                    <p>Low commission, high convenience. Enjoy competitive rates starting from just 1-3%* with FriendPay.</p>
                </div>
                <div className={Styles.Container}>
                    <div className={Styles.LogoConatiner}>
                        <img src={Logo1} alt="" />
                        <img src={Logo4} alt="" />
                        <img src={Logo2} alt="" />
                        <img src={Logo3} alt="" />
                    </div>
                </div>
            </div>
            <div className={Styles.ButtonContainer}>
                <button><img src={ArrowImage} alt="" srcset="" />Get Paid</button>
            </div>
        </div>
    )
}
