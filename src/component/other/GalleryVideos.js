import React from 'react'

function GalleryVideos() {
    return (
        <div class="w-full relative" id="video">
            <div class="grid grid-cols-1 gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <ul class="space-y-8">
                    <li id="video-card" class="text-sm leading-6">
                        <div class="bg-white rounded-md relative overflow-hidden w-full h-full">
                            <div class="relative pointer-events-none video-cover anim z-10">
                                <img src="assest/images/gallery-1.png" alt="galrry-1" class="w-full" />
                                <a href="#" class="absolute bottom-3 right-3 text-4xl"><i class="icon-play"></i></a>
                            </div>
                            <a href="#" class="absolute inset-0 w-full h-full opacity-100 pointer-events-auto" onclick="addActive('#video-card','active')">
                                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/oYRda7UtuhA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </a>
                        </div>
                    </li>
                </ul>
                <ul class="space-y-8">
                    <li id="video-card" class="text-sm leading-6">
                        <div class="bg-white rounded-md relative overflow-hidden w-full h-full">
                            <div class="relative pointer-events-none video-cover anim z-10">
                                <img src="assest/images/gallery-3.png" alt="galrry-1" class="w-full" />
                                <a href="#" class="absolute bottom-3 right-3 text-4xl"><i class="icon-play"></i></a>
                            </div>
                            <a href="#" class="absolute inset-0 w-full h-full opacity-100 pointer-events-auto" onclick="addActive('#video-card','active')">
                                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/oYRda7UtuhA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </a>
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
                </ul>
            </div >
        </div >
    )
}

export default GalleryVideos;
