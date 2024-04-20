import React from 'react'
import Styles from './Features.module.css'
import Image from '../../../Images/co_present.svg'
import Image1 from '../../../Images/qr_code_2.svg'
import Image2 from '../../../Images/security.svg'
import Image3 from '../../../Images/account_balance.svg'
import messgeDiv from '../../../Images/Logo/Container.svg'
export default function FeaturesSection() {
    return (
        <div className={Styles.Main}>
            <div className={Styles.first}>
                <h1 className={Styles.Title}>Features</h1>
                <div className={Styles.SecondContainer}>
                    <div className={Styles.Con}>
                        <div className={Styles.Information}>
                            <div className={Styles.left}>
                                <img src={Image2} alt="" />
                            </div>
                            <div className={Styles.right}>
                                <h1>3D Security</h1>
                                <p>Secure transactions</p>
                            </div>
                        </div>
                        <div className={Styles.Information}>
                            <div className={Styles.left}>
                                <img src={Image1} alt="" />
                            </div>
                            <div className={Styles.right}>
                                <h1>QR/Link Pay</h1>
                                <p>Payments made easy.</p>
                            </div>
                        </div>
                    </div>
                    <div className={Styles.Con}>
                        <div className={Styles.Information}>
                            <div className={Styles.left}>
                                <img src={Image3} alt="" />
                            </div>
                            <div className={Styles.right}>
                                <h1>On-Time Withdrawals</h1>
                                <p>FriendPay delivers on time.</p>
                            </div>
                        </div>
                        <div className={Styles.Information}>
                            <div className={Styles.left}>
                                <img src={Image} alt="" />
                            </div>
                            <div className={Styles.right}>
                                <h1>Personal page</h1>
                                <p>Hub for easy payments.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className={Styles.second}>
                <img className={Styles.InfoWrapper}  src={messgeDiv} alt="" srcset="" />
            </div>
        </div>
    )
}
