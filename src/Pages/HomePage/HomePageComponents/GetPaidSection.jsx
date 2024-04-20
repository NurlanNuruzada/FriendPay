import React from 'react'
import Styles from './GetPaidSection.module.css'
import ArrowImage from '../../../Images/arrow_outward.svg'
export default function GetPaidSection() {
    return (
        <div className={Styles.Main2}>
            <div className={Styles.Main}>
                <h1>Get paid with FriendPay!</h1>
                <h2>Get paid effortlessly with FriendPay! Sign up now and start receiving
                    payments hassle-free.</h2>
                <button className={Styles.GetPaidButton}><img src={ArrowImage} alt="" srcset="" />Generate your QR/Link now!</button>
            </div>
        </div>
    )
}
