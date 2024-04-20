import React from 'react'
import Styles from "./HomePage.module.css"
import Section1 from './HomePageComponents/Section1'
import ContactUsSection from './HomePageComponents/ContactUsSection'
import Line from '../../Components/line/Line'
import GetPaidSection from './HomePageComponents/GetPaidSection'
import FeaturesSection from './HomePageComponents/FeaturesSection'
import Sponsors from './HomePageComponents/Sponsors'
import PricingSection from './HomePageComponents/PricingSection'
import CustomerFag from './HomePageComponents/CustomerFag'
export default function HomePage() {
  return (
    <div className={Styles.Main}>
      <Section1 />
      <div className={Styles.Line} style={{ margin: "72px 0" }}>
        <Line />
      </div>
      <FeaturesSection />
      <div className={Styles.Line} style={{ margin: "72px 0" }}>
        <Line />
      </div>
      <PricingSection />
      <div className={Styles.Line} style={{ margin: "72px 0" }}>
        <Line />
      </div>
      <Sponsors />
      <div className={Styles.Line} style={{ margin: "72px 0" }}>
        <Line />
      </div>
      <CustomerFag />
      <div className={Styles.Line} style={{ margin: "72px 0" }}>
        <Line />
      </div>
      <ContactUsSection />
      <div className={Styles.Line} style={{ margin: "72px 0" }}>
        <Line />
      </div>
      <GetPaidSection />
    </div>
  )
}
