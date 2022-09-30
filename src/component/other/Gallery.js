import React, { useState } from 'react'
import GalleryAll from "./GalleryAll";
import GalleryPhotos from "./GalleryPhotos";
import GalleryVideos from "./GalleryVideos";

function Gallery() {
    const [tab, setTab] = useState(1);
    return (
        <div className="flex min-h-full wrapper">
            <div className="flex flex-wrap space-y-7 w-full">
                {/* <!-- title-holder  --> */}
                <div className="space-y-6 w-full">
                    <h1 className="w-full">Gallery</h1>
                    {/* <!-- tab-holder  --> */}
                    <div className="teb-holder gallery-holder border-t border-b-0">
                        <button type="button" data-tab="all" className={tab===1 ? "active" : undefined} onClick={() => setTab(1)} >All</button>
                        <button type="button" data-tab="photo" className={tab===2 ? "active" : undefined} onClick={() => setTab(2)} >Photo</button>
                        <button type="button" data-tab="video" className={tab===3 ? "active" : undefined} onClick={() => setTab(3)} >Video</button>
                    </div>
                    {/* <!-- gallery-holder / --> */}
                    <div className="gallery-holder">
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
