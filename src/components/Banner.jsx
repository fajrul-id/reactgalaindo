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
import { useEffect, useState } from "react";
import axios from "axios";

export default function Banner() {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const result = await axios("https://api.koperasi-gim.com/api/banners", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      return result.data.data;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData().then((result) => {
      setData(result);
    });
  }, []);
  SwiperCore.use([Autoplay]);

  return (
    <>
      <Swiper
        cssMode={true}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        mousewheel={true}
        navigation
        pagination={{ clickable: true }}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        className="mySwiper"
      >
        {data.map((e, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col gap-1 items-center">
              <img className="object-fill rounded-t-lg" alt="" src={e.url} />
              <p className="w-full h-full text-sm">{e.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
