import React from 'react'
import Styles from './Section1.module.css'
import ArrowImage from '../../../Images/arrow_outward.svg'
import Image from '../../../Images/Logo/CARD.svg'
import ImageButton from '../../../Images/Button.svg'
export default function Section1() { 
    return (
        <div className={Styles.Main}>
            <div className={Styles.LeftContainer}>
                <h1>Get paid by your friends</h1>
                <h2>Effortlessly send and receive money with friends, family, and beyond</h2>
                <button><img src={ArrowImage} alt="" srcset="" />Get Paid</button>
            </div>
            <div className={Styles.RigntContainer}>
                <img className={Styles.CardImage} src={Image} alt="" srcset="" />
                <img src={ImageButton} alt="" srcset="" />
            </div>
        </div>
    )
}
