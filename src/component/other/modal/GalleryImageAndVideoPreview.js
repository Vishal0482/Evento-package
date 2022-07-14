import React from 'react'
import bigDishImage from "../../../assest/images/big-dish.png";
import dish1Image from "../../../assest/images/dish-1.png";

function GalleryImageAndVideoPreview({handleClose}) {
  return (
    <div class="fixed inset-0 w-full h-full bg-[rgba(0,0,0,0.6)] flex z-50">
          <button type="button" onClick={() => handleClose(false)} class="absolute right-10 top-10 z-50 rounded-full text-white text-lg"><i class="icon-close"></i></button>
        <div class="relative w-full py-10">
          <div class="max-w-3xl mx-auto px-12">
            <h2 class="text-white">Sweet Love Catering</h2>
            <p class="text-lg text-white font-normal">Catering</p>
          </div>
          <div class="swiper-container gallery-top gallery-img relative">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <div class="swiper-slide-container">
                      <div class="w-full lg:w-1/2 rounded-md overflow-hidden mx-auto h-full object-cover">
                          <img src={bigDishImage} alt="big-dish" class="w-full"/>
                      </div>                      
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="swiper-slide-container">
                      <div class="w-full lg:w-1/2 rounded-md overflow-hidden mx-auto h-full object-cover">
                          <img src={bigDishImage} alt="big-dish" class="w-full"/>
                      </div>                      
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="swiper-slide-container">
                      <div class="w-full lg:w-1/2 rounded-md overflow-hidden mx-auto h-full object-cover">
                          <img src={bigDishImage} alt="big-dish" class="w-full"/>
                      </div>                      
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="swiper-slide-container">
                      <div class="w-full lg:w-1/2 rounded-md overflow-hidden mx-auto h-full object-cover">
                          <img src={bigDishImage} alt="big-dish" class="w-full"/>
                      </div>                      
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="swiper-slide-container">
                      <div class="w-full lg:w-1/2 rounded-md overflow-hidden mx-auto h-full object-cover">
                          <img src={bigDishImage} alt="big-dish" class="w-full"/>
                      </div>                      
                  </div>
                </div>
            </div>
            {/* <!-- Add Arrows --> */}
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
          </div>
          <div class="swiper-container gallery-thumbs bg-black">
            <div class="swiper-wrapper">
                <div class="swiper-slide"><div class="rounded-md overflow-hidden"><img src={dish1Image} alt="/dish-1"/></div></div>
                <div class="swiper-slide"><div class="rounded-md overflow-hidden"><img src={dish1Image} alt="/dish-1"/></div></div>
                <div class="swiper-slide"><div class="rounded-md overflow-hidden"><img src={dish1Image} alt="/dish-1"/></div></div>
                <div class="swiper-slide"><div class="rounded-md overflow-hidden"><img src={dish1Image} alt="/dish-1"/></div></div>
                <div class="swiper-slide"><div class="rounded-md overflow-hidden"><img src={dish1Image} alt="/dish-1"/></div></div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default GalleryImageAndVideoPreview;
