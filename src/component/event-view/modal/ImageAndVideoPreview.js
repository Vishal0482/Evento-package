import React from 'react'

function ImageAndVideoPreview({ handleClose }) {
  return (
    <div class="fixed inset-0 w-full h-full bg-[rgba(0,0,0,0.6)] flex z-50">
      <button type="button" onClick={() => handleClose(false)} class="absolute right-10 top-10 z-50 rounded-full text-white text-lg"><i class="icon-close"></i></button>
      <div class="relative w-full py-10">
        <div class="swiper-container gallery-top relative">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="swiper-slide-container w-full flex flex-wrap">
                <div class="w-full lg:w-1/2 rounded-md overflow-hidden">
                  <img src="assest/images/big-dish.png" alt="big-dish" class="w-full" />
                </div>
                <div class="w-full lg:w-1/2 pl-10 space-y-3">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id dolorem deleniti vero laboriosam tempora, at rerum quibusdam cupiditate voluptatibus in impedit error soluta magnam hic? Ducimus excepturi ipsum vero fugiat?</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id dolorem deleniti vero laboriosam tempora, at rerum quibusdam cupiditate voluptatibus in impedit error soluta magnam hic? Ducimus excepturi ipsum vero fugiat?</p>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="swiper-slide-container w-full flex flex-wrap">
                <div class="w-full lg:w-1/2 rounded-md overflow-hidden">
                  <img src="assest/images/big-dish.png" alt="big-dish" class="w-full" />
                </div>
                <div class="w-full lg:w-1/2 pl-10 space-y-3">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id dolorem deleniti vero laboriosam tempora, at rerum quibusdam cupiditate voluptatibus in impedit error soluta magnam hic? Ducimus excepturi ipsum vero fugiat?</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id dolorem deleniti vero laboriosam tempora, at rerum quibusdam cupiditate voluptatibus in impedit error soluta magnam hic? Ducimus excepturi ipsum vero fugiat?</p>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="swiper-slide-container w-full flex flex-wrap">
                <div class="w-full lg:w-1/2 rounded-md overflow-hidden">
                  <img src="assest/images/big-dish.png" alt="big-dish" class="w-full" />
                </div>
                <div class="w-full lg:w-1/2 pl-10 space-y-3">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id dolorem deleniti vero laboriosam tempora, at rerum quibusdam cupiditate voluptatibus in impedit error soluta magnam hic? Ducimus excepturi ipsum vero fugiat?</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id dolorem deleniti vero laboriosam tempora, at rerum quibusdam cupiditate voluptatibus in impedit error soluta magnam hic? Ducimus excepturi ipsum vero fugiat?</p>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="swiper-slide-container w-full flex flex-wrap">
                <div class="w-full lg:w-1/2 rounded-md overflow-hidden">
                  <img src="assest/images/big-dish.png" alt="big-dish" class="w-full" />
                </div>
                <div class="w-full lg:w-1/2 pl-10 space-y-3">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id dolorem deleniti vero laboriosam tempora, at rerum quibusdam cupiditate voluptatibus in impedit error soluta magnam hic? Ducimus excepturi ipsum vero fugiat?</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id dolorem deleniti vero laboriosam tempora, at rerum quibusdam cupiditate voluptatibus in impedit error soluta magnam hic? Ducimus excepturi ipsum vero fugiat?</p>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="swiper-slide-container w-full flex flex-wrap">
                <div class="w-full lg:w-1/2 rounded-md overflow-hidden">
                  <img src="assest/images/big-dish.png" alt="big-dish" class="w-full" />
                </div>
                <div class="w-full lg:w-1/2 pl-10 space-y-3">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id dolorem deleniti vero laboriosam tempora, at rerum quibusdam cupiditate voluptatibus in impedit error soluta magnam hic? Ducimus excepturi ipsum vero fugiat?</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id dolorem deleniti vero laboriosam tempora, at rerum quibusdam cupiditate voluptatibus in impedit error soluta magnam hic? Ducimus excepturi ipsum vero fugiat?</p>
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
            <div class="swiper-slide"><div class="rounded-md overflow-hidden"><img src="assest/images/dish-1.png" alt="/dish-1" /></div></div>
            <div class="swiper-slide"><div class="rounded-md overflow-hidden"><img src="assest/images/dish-1.png" alt="/dish-1" /></div></div>
            <div class="swiper-slide"><div class="rounded-md overflow-hidden"><img src="assest/images/dish-1.png" alt="/dish-1" /></div></div>
            <div class="swiper-slide"><div class="rounded-md overflow-hidden"><img src="assest/images/dish-1.png" alt="/dish-1" /></div></div>
            <div class="swiper-slide"><div class="rounded-md overflow-hidden"><img src="assest/images/dish-1.png" alt="/dish-1" /></div></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImageAndVideoPreview;
