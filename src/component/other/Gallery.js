import React, { useState } from 'react'
import GalleryAll from "./GalleryAll";
import GalleryPhotos from "./GalleryPhotos";
import GalleryVideos from "./GalleryVideos";

function Gallery() {
    const [tab, setTab] = useState(1);
    return (
        <div class="flex min-h-full wrapper">
            <div class="flex flex-wrap space-y-7 w-full">
                {/* <!-- title-holder  --> */}
                <div class="space-y-6 w-full">
                    <h1 class="w-full">Gallery</h1>
                    {/* <!-- tab-holder  --> */}
                    <div class="teb-holder gallery-holder border-t border-b-0">
                        <button type="button" data-tab="all" class={tab===1 && "active"} onClick={() => setTab(1)} >All</button>
                        <button type="button" data-tab="photo" class={tab===2 && "active"} onClick={() => setTab(2)} >Photo</button>
                        <button type="button" data-tab="video" class={tab===3 && "active"} onClick={() => setTab(3)} >Video</button>
                    </div>
                    {/* <!-- gallery-holder / --> */}
                    <div class="gallery-holder">
                        {tab===1 && <GalleryAll />}
                        {tab===2 && <GalleryPhotos />}
                        {tab===3 && <GalleryVideos />}
                    </div >
                </div >

            </div >

        </div >
    )
}

export default Gallery;
