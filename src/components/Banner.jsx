// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import "./banner.css";

// import required modules
import SwiperCore, {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper";

export default function Banner() {
  SwiperCore.use([Autoplay]);

  return (
    <>
      <Swiper
        cssMode={true}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        mousewheel={true}
        navigation
        pagination={{ clickable: true }}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="ss:h-52 sm:h-52 md:h-72 lg:h-[22rem] xl:h-[26rem] flex flex-col justify-between">
            <img
              alt=""
              src="https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg"
            />

            <p>Slide 1</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="ss:h-52 sm:h-52 md:h-72 lg:h-[22rem] xl:h-[26rem] flex flex-col justify-between">
            <img alt="" src="https://i.imgur.com/1FFnTUh.png" />

            <p>Slide 2</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="ss:h-52 sm:h-52 md:h-72 lg:h-[22rem] xl:h-[26rem] flex flex-col justify-between">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1498049860654-af1a5c566876?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
            />

            <p>Slide 3</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="ss:h-52 sm:h-52 md:h-72 lg:h-[22rem] xl:h-[26rem] flex flex-col justify-between">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1498049860654-af1a5c566876?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
            />

            <p>Slide 4</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="ss:h-52 sm:h-52 md:h-72 lg:h-[22rem] xl:h-[26rem] flex flex-col justify-between">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1498049860654-af1a5c566876?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
            />

            <p>Slide 5</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="ss:h-52 sm:h-52 md:h-72 lg:h-[22rem] xl:h-[26rem] flex flex-col justify-between">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1498049860654-af1a5c566876?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
            />

            <p>Slide 6</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="ss:h-52 sm:h-52 md:h-72 lg:h-[22rem] xl:h-[26rem] flex flex-col justify-between">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1498049860654-af1a5c566876?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
            />

            <p>Slide 7</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="ss:h-52 sm:h-52 md:h-72 lg:h-[22rem] xl:h-[26rem] flex flex-col justify-between">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1498049860654-af1a5c566876?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
            />

            <p>Slide 8</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="ss:h-52 sm:h-52 md:h-72 lg:h-[22rem] xl:h-[26rem] flex flex-col justify-between">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1498049860654-af1a5c566876?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
            />

            <p>Slide 9</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
