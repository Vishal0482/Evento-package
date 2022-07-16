import React, { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper";
import ImageAndVideoPreviewMainSlide from './ImageAndVideoPreviewMainSlide';
import dish1Image from "../../../assest/images/dish-1.png";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

function ImageAndVideoPreview({ handleClose }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="fixed inset-0 w-full h-full bg-[rgba(0,0,0,0.6)] flex z-50">
      <button type="button" onClick={() => handleClose(false)} className="absolute right-10 top-10 z-50 rounded-full text-white text-lg"><i className="icon-close"></i></button>
      <div className="relative w-full py-10">
        <div className="swiper-container gallery-top relative">
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
              <ImageAndVideoPreviewMainSlide />
            </SwiperSlide>
            <SwiperSlide>
              <ImageAndVideoPreviewMainSlide />
            </SwiperSlide>
            <SwiperSlide>
              <ImageAndVideoPreviewMainSlide />
            </SwiperSlide>
            <SwiperSlide>
              <ImageAndVideoPreviewMainSlide />
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
              <div className="rounded-md overflow-hidden"><img src={dish1Image} alt="/dish-1" /> </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="rounded-md overflow-hidden"><img src={dish1Image} alt="/dish-1" /> </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="rounded-md overflow-hidden"><img src={dish1Image} alt="/dish-1" /> </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="rounded-md overflow-hidden"><img src={dish1Image} alt="/dish-1" /> </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default ImageAndVideoPreview;
