import React, { useState } from "react";
import bigDishImage from "../../../assest/images/big-dish.png";
import dish1Image from "../../../assest/images/dish-1.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// Swiper thumb example
// https://codesandbox.io/s/pfhz3h?file=/src/App.jsx:2237-2250

function GalleryImageAndVideoPreview({ handleClose }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="fixed inset-0 w-full h-full bg-[rgba(0,0,0,0.6)] flex z-50">
      <button
        type="button"
        onClick={() => handleClose(false)}
        className="absolute right-10 top-10 z-50 rounded-full text-white text-lg"
      >
        <i className="icon-close"></i>
      </button>
      <div className="relative w-full py-10">
        <div className="max-w-3xl mx-auto px-12">
          <h2 className="text-white">Sweet Love Catering</h2>
          <p className="text-lg text-white font-normal">Catering</p>
        </div>
        <div className="swiper-container gallery-top gallery-img relative">
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            centeredSlides={true}
            spaceBetween={10}
            navigation={true}
            modules={[Navigation, Thumbs]}
            thumbs={{ swiper: thumbsSwiper }}
          >
            <SwiperSlide>
            <div className="swiper-slide-container">
              <div className="w-full lg:w-1/2 rounded-md overflow-hidden mx-auto h-full object-cover">
                <img src={bigDishImage} alt="big-dish" className="w-full"/>
              </div>                      
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="swiper-slide-container">
              <div className="w-full lg:w-1/2 rounded-md overflow-hidden mx-auto h-full object-cover">
                <img src={bigDishImage} alt="big-dish" className="w-full"/>
              </div>                      
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="swiper-slide-container">
              <div className="w-full lg:w-1/2 rounded-md overflow-hidden mx-auto h-full object-cover">
                <img src={bigDishImage} alt="big-dish" className="w-full"/>
              </div>                      
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="swiper-slide-container">
              <div className="w-full lg:w-1/2 rounded-md overflow-hidden mx-auto h-full object-cover">
                <img src={bigDishImage} alt="big-dish" className="w-full"/>
              </div>                      
            </div>
            </SwiperSlide>
          </Swiper>
          </div>
          <div className="swiper-container gallery-thumbs bg-black">
            <Swiper
              centeredSlides={true}
              slidesPerView={'auto'}
              touchRatio={0.2}
              slideToClickedSlide={true}
              loopedSlides={4}
              spaceBetween={10}
              watchSlidesProgress={true}
              modules={[Navigation, Thumbs]}
              // onSwiper={setThumbsSwiper}
            >
              <SwiperSlide>
                <div className="rounded-md overflow-hidden"><img src={dish1Image} alt="/dish-1" /></div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="rounded-md overflow-hidden"><img src={dish1Image} alt="/dish-1" /></div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="rounded-md overflow-hidden"><img src={dish1Image} alt="/dish-1" /></div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="rounded-md overflow-hidden"><img src={dish1Image} alt="/dish-1" /></div>
              </SwiperSlide>
            </Swiper>
          </div>
        
      </div>
    </div>
  );
}

export default GalleryImageAndVideoPreview;
