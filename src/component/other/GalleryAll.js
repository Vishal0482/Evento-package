import React from 'react';
import gallery2Image from "../../assest/images/gallery-2.png";
import gallery3Image from "../../assest/images/gallery-3.png";
import gallery4Image from "../../assest/images/gallery-4.png";
import gallery6Image from "../../assest/images/gallery-6.png";

function GalleryAll() {
    return (
        <div class="w-full relative tab-main active" id="all">
            <div class="grid grid-cols-1 gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <ul class="space-y-8">
                    <li id="video-card" class="text-sm leading-6">
                        <div class="bg-white rounded-md relative overflow-hidden w-full h-full">
                            <div class="relative pointer-events-none video-cover anim z-10">
                                <img src="assest/images/gallery-1.png" alt="gallery-1" class="w-full" />
                                <a href="#" class="absolute bottom-3 right-3 text-4xl"><i class="icon-play"></i></a>
                            </div>
                            <a href="#" class="absolute inset-0 w-full h-full opacity-100 pointer-events-auto" onclick="addActive('#video-card','active')">
                                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/oYRda7UtuhA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </a>
                        </div>
                    </li>
                    <li class="image-card">
                        <div>
                            <img src={gallery2Image} alt="gallery-2" class="w-full" />
                        </div>
                    </li>
                </ul>
                <ul class="space-y-8">
                    <li id="video-card" class="text-sm leading-6">
                        <div class="bg-white rounded-md relative overflow-hidden w-full h-full">
                            <div class="relative pointer-events-none video-cover anim z-10">
                                <img src={gallery3Image} alt="galrry-1" class="w-full" />
                                <a href="#" class="absolute bottom-3 right-3 text-4xl"><i class="icon-play"></i></a>
                            </div>
                            <a href="#" class="absolute inset-0 w-full h-full opacity-100 pointer-events-auto" onclick="addActive('#video-card','active')">
                                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/oYRda7UtuhA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </a>
                        </div>
                    </li>
                    <li class="image-card">
                        <div>
                            <img src={gallery4Image} alt="gallery-5" class="w-full" />
                        </div>
                    </li>
                </ul>
                <ul class="space-y-8">
                    <li id="video-card" class="text-sm leading-6">
                        <div class="bg-white rounded-md relative overflow-hidden w-full h-full">
                            <div class="relative pointer-events-none video-cover anim z-10">
                                <img src="assest/images/gallery-5.png" alt="galrry-1" class="w-full" />
                                <a href="#" class="absolute bottom-3 right-3 text-4xl"><i class="icon-play"></i></a>
                            </div>
                            <a href="#" class="absolute inset-0 w-full h-full opacity-100 pointer-events-auto" onclick="addActive('#video-card','active')">
                                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/oYRda7UtuhA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </a>
                        </div>
                    </li>
                    <li class="image-card">
                        <div>
                            <img src={gallery6Image} alt="gallery-4" class="w-full" />
                        </div>
                    </li>
                </ul>
                <ul class="space-y-8">
                    <li id="video-card" class="text-sm leading-6">
                        <div class="bg-white rounded-md relative overflow-hidden w-full h-full">
                            <div class="relative pointer-events-none video-cover anim z-10">
                                <img src="assest/images/gallery-2.png" alt="galrry-1" class="w-full" />
                                <a href="#" class="absolute bottom-3 right-3 text-4xl"><i class="icon-play"></i></a>
                            </div>
                            <a href="#" class="absolute inset-0 w-full h-full opacity-100 pointer-events-auto" onclick="addActive('#video-card','active')">
                                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/oYRda7UtuhA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </a>
                        </div>
                    </li>
                    <li class="image-card">
                        <div>
                            <img src={gallery3Image} alt="gallery-3" class="w-full" />
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default GalleryAll;
