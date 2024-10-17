import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Slider.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Slider = () => {
  return (
    <div className=" flex w-full h-[600px]">
      <Swiper
        loop={true}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://images.pexels.com/photos/906150/pexels-photo-906150.jpeg"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=550&dpr=1"
            alt="image 1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.pexels.com/photos/1227513/pexels-photo-1227513.jpeg"
            alt="image 3"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.pexels.com/photos/235990/pexels-photo-235990.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="image4"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="image5"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
