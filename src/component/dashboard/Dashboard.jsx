import React from "react";
import style from "./Dashboard.module.scss";
import Pane from "../../UI/pane/Pane";
import Connect from "../quick_link/Connect";
import Banner from "../banner/Banner";
import PageForm from "../form/PageForm";
import Return from "../return/Return";
import Testimonial from "../testimonial/Testimonial";
import Footer from "../footer/Footer";

const Dashboard = () => {
  return (
    <>
      <div className={style.dashboard__container}>
        <div className={style.dashboard__container__contact}>
          <Connect />
        </div>

        <Pane>
          <>
            <div className={style.dashboard__header_text}>
              The most important investment you can make is in yourself
            </div>
            <div className={style.dashboard__header_name_text}>
              "Warren Buffet"
            </div>
            <Banner />
          </>
        </Pane>
      </div>
      <Return />
      <PageForm />
      <Testimonial />
      <Footer />
    </>
  );
};

export default Dashboard;
