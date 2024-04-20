import React from 'react'
import Styles from './ContactUsSection.module.css'
import Image from '../../../Images/SocialMedia/call.svg'
import Image1 from '../../../Images/SocialMedia/mark_email_unread.svg'
import Image2 from '../../../Images/SocialMedia/near_me.svg'
import Line from '../../../Components/line/Line'

export default function ContactUsSection() {
    return (
        <div className={Styles.MainContainer}>
            <h1 className={Styles.Title}>Contact us</h1>
            <div className={Styles.Main}>
                <div className={Styles.Information}>
                    <div className={Styles.left}>
                        <img src={Image1} alt="" />
                    </div>
                    <div className={Styles.right}>
                        <h1>E-mail</h1>
                        <p>info@friendpay.me</p>
                    </div>
                </div>
                <div className={Styles.Information}>
                    <div className={Styles.left}>
                        <img src={Image2} alt="" />
                    </div>
                    <div className={Styles.right}>
                        <h1>Company and address</h1>
                        <div>
                            <p>NME LLC </p>
                            <p>Lermontov 113/117 Baku, Azerbaijan</p>
                        </div>
                    </div>
                </div>
                <div className={Styles.Information}>
                    <div className={Styles.left}>
                        <img src={Image} alt="" />
                    </div>
                    <div className={Styles.right}>
                        <h1>Mobile</h1>
                        <p>+994555775665</p>
                    </div>
                </div>

            </div>
        </div>
    )
}
