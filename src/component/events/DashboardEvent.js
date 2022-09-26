import React, {useState} from 'react'

import sweetLoveCatering from "../../assest/images/sweet-love-catering.png";
import ringAd from "../../assest/images/ring-ad.png"

import Modal from '../modal/Modal';
import EventPopUpCreateNew from './popups/EventPopUpCreateNew';


function DashboardEvent() {


	const [isCreateNewPopUpOpen, setIsCreateNewPopUpOpen] = useState(false);

  return ( 
	<div className="rightInContent">
	  <div className="wrapper">
		<div className="flex flex-wrap items-center">
		  <h1>All Category</h1>
		  <div className="flex whitespace-nowrap space-x-5 ml-auto">
			<select name="All Category"
			  className="arrow bg-white pl-5 pr-11 py-3 text-japaneseIndigo font-bold rounded-md tracking-wider appearance-none focus-visible:outline-none">
			  <option value="">All Category</option>
			  <option value="">All Category</option>
			  <option value="">All Category</option>
			  <option value="">All Category</option>
			</select>
			<button className="bg-white px-5 py-3 text-japaneseIndigo font-bold rounded-md tracking-wider">MultipleLive</button>
			<button href="#" onClick={()=>setIsCreateNewPopUpOpen(true)} className="btn-primary"><i className="icon-plus mr-3"></i>Create New</button>
		  </div>
		</div>
		<div className="space-y-5 pt-10">
		  <div className="w-full flex items-center">
			<div>
			  <label className="checkbox w-16">
			  <input type="checkbox" className="bg-white"/>
			  <i className="icon-right"></i>
			  </label>
			</div>
			<div className="w-full p-4 pr-7 bg-white rounded">
			  <div className="flex space-x-5">
				<img src={sweetLoveCatering} alt=""/>
				<div className="w-full">
				  <div className="flex justify-between border-b-2 pb-4">
					<div className="">
					  <span className="text-sm text-white bg-spiroDiscoBall px-3 py-1">Caterers</span>
					  <h2 className="text-japaneseIndigo pt-5">Sweet Love Catering</h2>
					  <div className="text-sm text-quicksilver pt-3"><i className="icon-fill-location mr-3"></i>Dallas, Texas
					  </div>
					</div>
					<div className="">
					  <div className="flex items-center">
						<input type="checkbox" className="switch mr-3" />
						<label for="">
						  <h3>Live</h3>
						</label>
					  </div>
					  <h1 className="pt-7">250 INR</h1>
					</div>
				  </div>
				  <div className="flex justify-between pt-4">
					<div className="flex items-center space-x-1">
					  <i className="icon-fillStar text-sm"></i>
					  <i className="icon-fillStar text-sm"></i>
					  <i className="icon-fillStar text-sm"></i>
					  <i className="icon-star text-sm"></i>
					  <i className="icon-star text-sm"></i>
					  <span className="text-quicksilver text-xs font-bold pl-2"> 19,981 ratings</span>
					</div>
					<div className="flex space-x-2">
					  <a href="#" className="bg-brightGray px-2 py-1 text-center rounded"><i
						className="icon-fill-megaphone text-base text-black"></i></a>
					  <a href="#" className="bg-brightGray px-2 py-1 text-center rounded"><i
						className="icon-calendar1 text-base text-black"></i></a>
					  <a href="#" className="bg-brightGray px-2 py-1 text-center rounded"><i
						className="icon-percentage text-base text-black"></i></a>
					  <a href="#" className="bg-brightGray px-2 py-1 text-center rounded"><i
						className="icon-share text-base text-black"></i></a>
					</div>
				  </div>
				</div>
			  </div>
			</div>
		  </div>
		  <div className="w-full flex items-center">
			<div>
			  <label className="checkbox w-16">
			  <input type="checkbox" className="bg-white"/>
			  <i className="icon-right"></i>
			  </label>
			</div>
			<div className="w-full p-4 pr-7 bg-white rounded">
			  <div className="flex space-x-5">
				<img src={sweetLoveCatering} alt=""/>
				<div className="w-full">
				  <div className="flex justify-between border-b-2 pb-4">
					<div className="">
					  <span className="text-sm text-white bg-spiroDiscoBall px-3 py-1">Caterers</span>
					  <h2 className="text-japaneseIndigo pt-5">Sweet Love Catering</h2>
					  <div className="text-sm text-quicksilver pt-3"><i className="icon-fill-location mr-3"></i>Dallas, Texas
					  </div>
					</div>
					<div className="">
					  <div className="flex items-center">
						<input type="checkbox" className="switch mr-3" />
						<label for="">
						  <h3>Live</h3>
						</label>
					  </div>
					  <h1 className="pt-7">250 INR</h1>
					</div>
				  </div>
				  <div className="flex justify-between pt-4">
					<div className="flex items-center space-x-1">
					  <i className="icon-fillStar text-sm"></i>
					  <i className="icon-fillStar text-sm"></i>
					  <i className="icon-fillStar text-sm"></i>
					  <i className="icon-star text-sm"></i>
					  <i className="icon-star text-sm"></i>
					  <span className="text-quicksilver text-xs font-bold pl-2"> 19,981 ratings</span>
					</div>
					<div className="flex space-x-2">
					  <a href="#" className="bg-brightGray px-2 py-1 text-center rounded"><i
						className="icon-fill-megaphone text-base text-black"></i></a>
					  <a href="#" className="bg-brightGray px-2 py-1 text-center rounded"><i
						className="icon-calendar1 text-base text-black"></i></a>
					  <a href="#" className="bg-brightGray px-2 py-1 text-center rounded"><i
						className="icon-percentage text-base text-black"></i></a>
					  <a href="#" className="bg-brightGray px-2 py-1 text-center rounded"><i
						className="icon-share text-base text-black"></i></a>
					</div>
				  </div>
				</div>
			  </div>
			</div>
		  </div>
		  	 <Modal isOpen={isCreateNewPopUpOpen} >
		<EventPopUpCreateNew handleClose={setIsCreateNewPopUpOpen}/>
	 </Modal>
		</div>
		{/* <!-- advisement --> */}
		<div className="w-full mt-5">
		  <img src={ringAd} alt="ring-ad" className="w-full object-cover"/>
		</div>
	  </div>
	</div>
  )
}

export default DashboardEvent