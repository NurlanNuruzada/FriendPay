import React from 'react';
import Styles from './Header.module.css';
import Image from '../../Images/Logo/FriendPayLogo.svg';
import { Select, Button, Flex } from '@chakra-ui/react';
import ArrowImage from '../../Images/arrow_outward.svg'
import TraslateLogo from '../../Images/Logo/translate.svg'
export const Header = () => {
    return (
        <div className={Styles.MainContainer}>
            <div className={Styles.LogoContainer}>
                <img src={Image} alt="" srcSet="" />
            </div>
            <div className={Styles.SecondContainer}>
                <div className={Styles.Dropdown}>
                    <img src={TraslateLogo} alt="" srcset="" />
                </div>
                <button className={Styles.GetPaidButton}><img src={ArrowImage} alt="" srcset="" />Get Paid</button>
            </div>
        </div>
    );
};
