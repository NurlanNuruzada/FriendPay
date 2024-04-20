import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Styles from './MainLayout.module.css'
export function MainLayout() {
  return (
    <div className={Styles.MainContainer}>
      <div className={Styles.Content}>
        <div className={Styles.Content2}>
          <Header />
          <Outlet />
          <Footer />
        </div>
      </div>
    </div>
  );
}
