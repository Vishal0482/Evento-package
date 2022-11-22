import React from 'react';

function VideoPlayer({handleClose, videoUrl, active}) {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 h-screen w-full flex items-center justify-center z-[999] bg-[rgba(0,0,0,0.5)]">
    <div className="video-popup max-w-[800px] max-h-[500px] h-full w-full flex items-center justify-center relative bg-white rounded-xl shadow-lg p-3 anim">
        <div onClick={() => handleClose(false)} className="cursor-pointer absolute -top-3 flex justify-center items-center -right-3 w-8 h-8 p-2 rounded-full bg-red-500">
            <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.22566 4.81096C5.83514 4.42044 5.20197 4.42044 4.81145 4.81096C4.42092 5.20148 4.42092 5.83465 4.81145 6.22517L10.5862 11.9999L4.81151 17.7746C4.42098 18.1651 4.42098 18.7983 4.81151 19.1888C5.20203 19.5793 5.8352 19.5793 6.22572 19.1888L12.0004 13.4141L17.7751 19.1888C18.1656 19.5793 18.7988 19.5793 19.1893 19.1888C19.5798 18.7983 19.5798 18.1651 19.1893 17.7746L13.4146 11.9999L19.1893 6.22517C19.5799 5.83465 19.5799 5.20148 19.1893 4.81096C18.7988 4.42044 18.1657 4.42044 17.7751 4.81096L12.0004 10.5857L6.22566 4.81096Z" fill="#fff" />
            </svg>
        </div>
        <div className="w-full h-full">
            {/* <video className="w-full h-full" controls autoPlay>
                <source src={videoUrl} type="video/mp4"/>
            </video> */}
            <iframe width="100%" height="100%" src={videoUrl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    </div>
</div>
  )
}

export default VideoPlayer;
