import React from "react";
import Navbar from "../navbar/Navbar";
import "./hero.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
function Hero() {
  return (
    <div className="hero">
      <Navbar />
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        // navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <div className="hero">
            <div className="text-hero">
              <div className="head-text">
                <p>
                  Special Dish <span>.</span>
                </p>
              </div>
              <div className="foot-head">
                <p>By Chef Francis Smith</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero">
            <div className="text-hero">
              <div className="head-text">
                <p>
                  Special Dish <span>.</span>
                </p>
              </div>
              <div className="foot-head">
                <p>By Chef Francis Smith</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero">
            <div className="text-hero">
              <div className="head-text">
                <p>
                  Special Dish <span>.</span>
                </p>
              </div>
              <div className="foot-head">
                <p>By Chef Francis Smith</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        ...
      </Swiper>
    </div>
  );
}

export default Hero;
