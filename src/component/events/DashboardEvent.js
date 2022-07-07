import React from 'react'

import sweetLoveCatering from "../../assest/images/sweet-love-catering.png";
import ringAd from "../../assest/images/ring-ad.png"
function DashboardEvent() {
  return ( 
	<div class="rightInContent">
	  <div class="wrapper">
		<div class="flex flex-wrap items-center">
		  <h1>All Category</h1>
		  <div class="flex whitespace-nowrap space-x-5 ml-auto">
			<select name="All Category"
			  class="arrow bg-white pl-5 pr-11 py-3 text-japaneseIndigo font-bold rounded-md tracking-wider appearance-none focus-visible:outline-none">
			  <option value="">All Category</option>
			  <option value="">All Category</option>
			  <option value="">All Category</option>
			  <option value="">All Category</option>
			</select>
			<button class="bg-white px-5 py-3 text-japaneseIndigo font-bold rounded-md tracking-wider">MultipleLive</button>
			<a href="#" class="btn-primary"><i class="icon-plus mr-3"></i>Create New</a>
		  </div>
		</div>
		<div class="space-y-5 pt-10">
		  <div class="w-full flex items-center">
			<div>
			  <label class="checkbox w-16">
			  <input type="checkbox" class="bg-white"/>
			  <i class="icon-right"></i>
			  </label>
			</div>
			<div class="w-full p-4 pr-7 bg-white rounded">
			  <div class="flex space-x-5">
				<img src={sweetLoveCatering} alt=""/>
				<div class="w-full">
				  <div class="flex justify-between border-b-2 pb-4">
					<div class="">
					  <span class="text-sm text-white bg-spiroDiscoBall px-3 py-1">Caterers</span>
					  <h2 class="text-japaneseIndigo pt-5">Sweet Love Catering</h2>
					  <div class="text-sm text-quicksilver pt-3"><i class="icon-fill-location mr-3"></i>Dallas, Texas
					  </div>
					</div>
					<div class="">
					  <div class="flex items-center">
						<input type="checkbox" class="switch mr-3" />
						<label for="">
						  <h3>Live</h3>
						</label>
					  </div>
					  <h1 class="pt-7">250 INR</h1>
					</div>
				  </div>
				  <div class="flex justify-between pt-4">
					<div class="flex items-center space-x-1">
					  <i class="icon-fillStar text-sm"></i>
					  <i class="icon-fillStar text-sm"></i>
					  <i class="icon-fillStar text-sm"></i>
					  <i class="icon-star text-sm"></i>
					  <i class="icon-star text-sm"></i>
					  <span class="text-quicksilver text-xs font-bold pl-2"> 19,981 ratings</span>
					</div>
					<div class="flex space-x-2">
					  <a href="#" class="bg-brightGray px-2 py-1 text-center rounded"><i
						class="icon-fill-megaphone text-base text-black"></i></a>
					  <a href="#" class="bg-brightGray px-2 py-1 text-center rounded"><i
						class="icon-calendar1 text-base text-black"></i></a>
					  <a href="#" class="bg-brightGray px-2 py-1 text-center rounded"><i
						class="icon-percentage text-base text-black"></i></a>
					  <a href="#" class="bg-brightGray px-2 py-1 text-center rounded"><i
						class="icon-share text-base text-black"></i></a>
					</div>
				  </div>
				</div>
			  </div>
			</div>
		  </div>
		  <div class="w-full flex items-center">
			<div>
			  <label class="checkbox w-16">
			  <input type="checkbox" class="bg-white"/>
			  <i class="icon-right"></i>
			  </label>
			</div>
			<div class="w-full p-4 pr-7 bg-white rounded">
			  <div class="flex space-x-5">
				<img src={sweetLoveCatering} alt=""/>
				<div class="w-full">
				  <div class="flex justify-between border-b-2 pb-4">
					<div class="">
					  <span class="text-sm text-white bg-spiroDiscoBall px-3 py-1">Caterers</span>
					  <h2 class="text-japaneseIndigo pt-5">Sweet Love Catering</h2>
					  <div class="text-sm text-quicksilver pt-3"><i class="icon-fill-location mr-3"></i>Dallas, Texas
					  </div>
					</div>
					<div class="">
					  <div class="flex items-center">
						<input type="checkbox" class="switch mr-3" />
						<label for="">
						  <h3>Live</h3>
						</label>
					  </div>
					  <h1 class="pt-7">250 INR</h1>
					</div>
				  </div>
				  <div class="flex justify-between pt-4">
					<div class="flex items-center space-x-1">
					  <i class="icon-fillStar text-sm"></i>
					  <i class="icon-fillStar text-sm"></i>
					  <i class="icon-fillStar text-sm"></i>
					  <i class="icon-star text-sm"></i>
					  <i class="icon-star text-sm"></i>
					  <span class="text-quicksilver text-xs font-bold pl-2"> 19,981 ratings</span>
					</div>
					<div class="flex space-x-2">
					  <a href="#" class="bg-brightGray px-2 py-1 text-center rounded"><i
						class="icon-fill-megaphone text-base text-black"></i></a>
					  <a href="#" class="bg-brightGray px-2 py-1 text-center rounded"><i
						class="icon-calendar1 text-base text-black"></i></a>
					  <a href="#" class="bg-brightGray px-2 py-1 text-center rounded"><i
						class="icon-percentage text-base text-black"></i></a>
					  <a href="#" class="bg-brightGray px-2 py-1 text-center rounded"><i
						class="icon-share text-base text-black"></i></a>
					</div>
				  </div>
				</div>
			  </div>
			</div>
		  </div>
		</div>
		{/* <!-- advisement --> */}
		<div class="w-full mt-5">
		  <img src={ringAd} alt="ring-ad" class="w-full object-cover"/>
		</div>
	  </div>
	</div>
  )
}

export default DashboardEvent