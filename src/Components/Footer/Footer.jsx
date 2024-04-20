import React from "react";
import Styles from './Footer.module.css'
import Logo from '../../Images/Logo/FriendPayLogo.svg'
import image from "../../Images/SocialMedia/1.svg"
import image1 from "../../Images/SocialMedia/facebook.svg"
import image2 from "../../Images/SocialMedia/x.svg"
import image3 from "../../Images/SocialMedia/instagram.png"
import image4 from "../../Images/SocialMedia/Logo 2.svg"
import Line from "../line/Line";
const Footer = () => {
  return (
    <div>
      <div className={Styles.Line}>
        <Line ></Line>
      </div>
      <div className={Styles.Main}>
        <img src={Logo} alt="" />
        <div className={Styles.SecondContainer}>
          <img src={image} alt="" />
          <img src={image1} alt="" />
          <img src={image2} alt="" />
          <img src={image3} alt="" />
          <img src={image4} alt="" />
        </div>
      </div>
      <div className={Styles.rights} style={{ display: "flex", alignItem: "center", justifyContent: 'space-between' }}>
        <p>© 2024 FriendPay. All rights reserved. </p>
        <p>Privacy Policy and TOS</p>
      </div>
    </div>
  );
};

export default Footer;
