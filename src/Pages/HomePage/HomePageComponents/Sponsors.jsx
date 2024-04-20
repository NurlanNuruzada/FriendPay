import React from 'react'
import Logo1 from '../../../Images/Logo/kb-logo-main 1.svg'
import Logo2 from '../../../Images/Logo/logo-1 1.svg'
import Logo3 from '../../../Images/Logo/logo-white 1.svg'
import Logo4 from '../../../Images/Logo/Group.svg'
import Logo5 from '../../../Images/Logo/logo-EPUL.3eea82c6f109bb11c444090cab967d1d 1.svg'
import Logo6 from '../../../Images/Logo/homepage-logo.aefe1979 1.svg'
import Styles from './Sponsors.module.css'
export default function Sponsors() {
    return (
        <div className={Styles.main}>
            <img src={Logo3} alt="" />
            <img src={Logo4} alt="" />
            <img src={Logo1} alt="" />
            <img src={Logo2} alt="" />
            <img src={Logo5} alt="" />
            <img src={Logo6} alt="" />
        </div>
    )
}
