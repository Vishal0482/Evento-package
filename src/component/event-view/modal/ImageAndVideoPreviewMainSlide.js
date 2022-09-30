import React from 'react';
import bigdishImage from "../../../assest/images/big-dish.png";

function ImageAndVideoPreviewMainSlide() {
    return (
        <div className="swiper-slide-container w-full flex flex-wrap">
            <div className="w-full lg:w-1/2 rounded-md overflow-hidden">
                <img src={bigdishImage} alt="big-dish" className="w-full" />
            </div>
            <div className="w-full lg:w-1/2 pl-10 space-y-3">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id dolorem deleniti vero laboriosam tempora, at rerum quibusdam cupiditate voluptatibus in impedit error soluta magnam hic? Ducimus excepturi ipsum vero fugiat?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id dolorem deleniti vero laboriosam tempora, at rerum quibusdam cupiditate voluptatibus in impedit error soluta magnam hic? Ducimus excepturi ipsum vero fugiat?</p>
            </div>
        </div>
    )
}

export default ImageAndVideoPreviewMainSlide;
