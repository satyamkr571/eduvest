import React from "react";
import style from "./Testimonial.module.scss";
import Pane from "../../UI/pane/Pane";
import { Carousel } from "antd";
import styled from "styled-components";
import profile from "../../assets/pic.jpeg";
import Cards from "../../UI/card/Cards";
const Testimonial = () => {
  const testimonialData = [
    {
      name: "Satyam Kumar",
      jobdesc: "Software Engineer - ||",
      avatar: "../../assets/background.jpeg",
      company: "Deloitte",
      feedback:
        "It’s important when building testimonial landing pages that your testimonials make sense. For example, there’s little point in a customer raving about how fast your delivery times are when the landing page is talking about the quality of your materials.",
    },
    {
      name: "Satyam Kumar",
      jobdesc: "Software Engineer - ||",
      avatar: "../../assets/background.jpeg",
      company: "Deloitte",
      feedback:
        "It’s important when building testimonial landing pages that your testimonials make sense. For example, there’s little point in a customer raving about how fast your delivery times are when the landing page is talking about the quality of your materials.",
    },
    {
      name: "Satyam Kumar",
      jobdesc: "Software Engineer - ||",
      avatar: "../../assets/background.jpeg",
      company: "Deloitte",
      feedback:
        "It’s important when building testimonial landing pages that your testimonials make sense. For example, there’s little point in a customer raving about how fast your delivery times are when the landing page is talking about the quality of your materials.",
    },
    {
      name: "Satyam Kumar",
      jobdesc: "Software Engineer - ||",
      avatar: "../../assets/background.jpeg",
      company: "Deloitte",
      feedback:
        "It’s important when building testimonial landing pages that your testimonials make sense. For example, there’s little point in a customer raving about how fast your delivery times are when the landing page is talking about the quality of your materials.",
    },
    {
      name: "Satyam Kumar",
      jobdesc: "Software Engineer - ||",
      avatar: "../../assets/background.jpeg",
      company: "Deloitte",
      feedback:
        "It’s important when building testimonial landing pages that your testimonials make sense. For example, there’s little point in a customer raving about how fast your delivery times are when the landing page is talking about the quality of your materials.",
    },
    {
      name: "Satyam Kumar",
      jobdesc: "Software Engineer - ||",
      avatar: "../../assets/background.jpeg",
      company: "Deloitte",
      feedback:
        "It’s important when building testimonial landing pages that your testimonials make sense. For example, there’s little point in a customer raving about how fast your delivery times are when the landing page is talking about the quality of your materials.",
    },
  ];

  const CarouselWrapper = styled(Carousel)`
    .ant-carousel .slick-dots li button {
      width: 6px;
      height: 6px;
      border-radius: 100%;
    }
    .ant-carousel .slick-dots li.slick-active button {
      width: 7px;
      height: 7px;
      border-radius: 100%;
      background: red;
    }

    //  > .slick-dots li button {
    //   width: 6px;
    //   height: 6px;
    //   border-radius: 100%;
    // }
    // > .slick-dots li.slick-active button {
    //   width: 7px;
    //   height: 7px;
    //   border-radius: 100%;
    //   background: red;
    // }
  `;
  return (
    <Pane className={style.testimonial_pane_container}>
      <CarouselWrapper
        swipeToSlide
        draggable
        autoplay
        effect="scrollx"
        dotPosition={"bottom"}
        style={{
          maxWidth: "100%",
          width: "60vw",
        }}>
        {testimonialData.map((data, index) => (
          <Cards key={index} className={style.carousel__card}>
            <div className={style.carousel__card__box}>
              <div className={style.carousel__box__container}>
                <div className={style.carousel__box__header}>
                  <div>{data.name}</div>
                  <div
                    style={{
                      fontWeight: "500",
                      fontSize: "1rem",
                    }}>
                    {data.jobdesc}
                  </div>
                  <div
                    style={{
                      fontWeight: "500",
                      fontSize: "1rem",
                    }}>
                    {data.company}
                  </div>
                </div>
                <div className={style.carousel__box__header__image}>
                  <img
                    className={style.carousel__header__image}
                    src={profile}
                    alt="image"
                  />
                </div>
              </div>
              <div>{data.feedback}</div>
            </div>
          </Cards>
        ))}
      </CarouselWrapper>
    </Pane>
  );
};

export default Testimonial;
