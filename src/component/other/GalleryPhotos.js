import React from 'react';
import gallery2Image from "../../assest/images/gallery-2.png";
import gallery3Image from "../../assest/images/gallery-3.png";
import gallery4Image from "../../assest/images/gallery-4.png";
import gallery6Image from "../../assest/images/gallery-6.png";

function GalleryPhotos() {
    return (
        <div className="w-full relative" id="photo">
            <div className="grid grid-cols-1 gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <ul className="space-y-8">
                    <li className="image-card">
                        <div>
                            <img src={gallery2Image} alt="gallery-2" className="w-full" />
                        </div>
                    </li>
                </ul>
                <ul className="space-y-8">
                    <li className="image-card">
                        <div>
                            <img src={gallery4Image} alt="gallery-5" className="w-full" />
                        </div>
                    </li>
                </ul>
                <ul className="space-y-8">
                    <li className="image-card">
                        <div>
                            <img src={gallery6Image} alt="gallery-4" className="w-full" />
                        </div>
                    </li>
                </ul>
                <ul className="space-y-8">
                    <li className="image-card">
                        <div>
                            <img src={gallery3Image} alt="gallery-3" className="w-full" />
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default GalleryPhotos;
