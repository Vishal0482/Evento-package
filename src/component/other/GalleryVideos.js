import React from 'react'
import gallery1Image from "../../assest/images/gallery-1.png";
import gallery2Image from "../../assest/images/gallery-2.png";
import gallery3Image from "../../assest/images/gallery-3.png";
import gallery5Image from "../../assest/images/gallery-5.png";

function GalleryVideos() {
    return (
        <div className="w-full relative" id="video">
            <div className="grid grid-cols-1 gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <ul className="space-y-8">
                    <li id="video-card" className="text-sm leading-6">
                        <div className="bg-white rounded-md relative overflow-hidden w-full h-full">
                            <div className="relative pointer-events-none video-cover anim z-10">
                                <img src={gallery1Image} alt="galrry-1" className="w-full" />
                                <a href="#" className="absolute bottom-3 right-3 text-4xl"><i className="icon-play"></i></a>
                            </div>
                            <a href="#" className="absolute inset-0 w-full h-full opacity-100 pointer-events-auto" onclick="addActive('#video-card','active')">
                                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/oYRda7UtuhA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </a>
                        </div>
                    </li>
                </ul>
                <ul className="space-y-8">
                    <li id="video-card" className="text-sm leading-6">
                        <div className="bg-white rounded-md relative overflow-hidden w-full h-full">
                            <div className="relative pointer-events-none video-cover anim z-10">
                                <img src={gallery3Image} alt="galrry-1" className="w-full" />
                                <a href="#" className="absolute bottom-3 right-3 text-4xl"><i className="icon-play"></i></a>
                            </div>
                            <a href="#" className="absolute inset-0 w-full h-full opacity-100 pointer-events-auto" onclick="addActive('#video-card','active')">
                                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/oYRda7UtuhA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </a>
                        </div>
                    </li>
                </ul>
                <ul className="space-y-8">
                    <li id="video-card" className="text-sm leading-6">
                        <div className="bg-white rounded-md relative overflow-hidden w-full h-full">
                            <div className="relative pointer-events-none video-cover anim z-10">
                                <img src={gallery5Image} alt="galrry-1" className="w-full" />
                                <a href="#" className="absolute bottom-3 right-3 text-4xl"><i className="icon-play"></i></a>
                            </div>
                            <a href="#" className="absolute inset-0 w-full h-full opacity-100 pointer-events-auto" onclick="addActive('#video-card','active')">
                                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/oYRda7UtuhA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </a>
                        </div>
                    </li>
                </ul>
                <ul className="space-y-8">
                    <li id="video-card" className="text-sm leading-6">
                        <div className="bg-white rounded-md relative overflow-hidden w-full h-full">
                            <div className="relative pointer-events-none video-cover anim z-10">
                                <img src={gallery2Image} alt="galrry-1" className="w-full" />
                                <a href="#" className="absolute bottom-3 right-3 text-4xl"><i className="icon-play"></i></a>
                            </div>
                            <a href="#" className="absolute inset-0 w-full h-full opacity-100 pointer-events-auto" onclick="addActive('#video-card','active')">
                                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/oYRda7UtuhA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </a>
                        </div>
                    </li>
                </ul>
            </div >
        </div >
    )
}

export default GalleryVideos;
