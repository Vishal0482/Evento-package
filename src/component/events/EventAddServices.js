import React, {useState} from 'react'
import cuttingBoard from "../../assest/images/cutting-board.png"
import Modal from "../modal/Modal"
import EventPopUpAddService from './popups/EventPopUpAddService'

function EventAddServices() {

	const [isAddServicesPopUpOpen, setIsAddServicesPopUpOpen] = useState(false)

  return (
	//  <!-- Content In -->
	 <div class="rightInContent">
	 <div class="wrapper min-h-full">
	   <div class="space-y-8">
		 <div class="flex justify-between items-center">
		   <a href="#" class="flex items-center">
			 <i class="icon-back-arrow mr-4 text-2xl"></i>
			 <h1>Sweet Love Catering</h1>
		   </a>
		   <button onClick={()=>setIsAddServicesPopUpOpen(true)} class="btn-primary flex items-center"><i class="icon-plus mr-3"></i><span>Add Service</span></button>
		 </div>
		  {/* <!-- step-progress-bar  --> */}
		 <div class="w-full overflow-hidden">
		   <ul class="flex justify-between step-progress-holder">
			 <li>
			   <div>
				 <span>01</span>
			   </div>
			   <h3>Add Place</h3>                        
			 </li>                      
			 <li>
			   <div>
				 <span>02</span>
			   </div>
			   <h3>about place</h3>                        
			 </li>
			 <li>
			   <div>
				 <span>03</span>
			   </div>
			   <h3>personal details</h3>                        
			 </li>
			 <li>
			   <div>
				 <span>04</span>
			   </div>
			   <h3>Photos & videos</h3>                        
			 </li>
			 <li>
			   <div>
				 <span>05</span>
			   </div>
			   <h3>add service</h3>                        
			 </li>
			 <li>
			   <div>
				 <span>06</span>
			   </div>
			   <h3>capacity</h3>                        
			 </li>
			 <li>
			   <div>
				 <span>07</span>
			   </div>
			   <h3>company details</h3>                        
			 </li>
			 <li>
			   <div>
				 <span>08</span>
			   </div>
			   <h3>Terms & Conditions</h3>                        
			 </li>
			 <li>
			   <div>
				 <span>09</span>
			   </div>
			   <h3>Discount</h3>                        
			 </li>
			 <li>
			   <div>
				 <span>10</span>
			   </div>
			   <h3>Calendar</h3>                        
			 </li>
		   </ul>
		 </div>
		 <div class="pt-5 space-y-3">
		   <div class="bg-white rounderd px-7 py-4">
			 <div class="flex justify-between">
			   <div class="">
				 <div class="w-28 h-28 border-2 border-brightGray rounded-md">
				   <img src={cuttingBoard} alt="" class="w-full h-full object-cover"/>
				 </div>
			   </div>
			   <div class="w-full pl-5">
				 <div class="flex justify-between">
				   <h2>Cutting board</h2>
				   <div class="flex items-center space-x-5">
					 <div class="flex items-center">
					   <input type="checkbox" id="on" class="switch mx-3 order-2" />
					   <span class="off text-base font-bold anim order-1 text-caribbeanGreen">Off</span>
					   <span class="on text-base font-bold anim order-3">On</span>
					 </div>
					 <span
					   class="inline-block text-base text-spiroDiscoBall font-bold bg-brightGray py-1.5 px-3.5 rounded">100
					 Qty</span>
					 <a href="#" title="Delete"><i class="text-center icon-fill-delete text-xl"></i></a>
					 <a href="#" title="Edit"><i class="text-center icon-edit text-xl"></i></a>
				   </div>
				 </div>
				 <p class="text-quicksilver text-sm font-normal leading-6 pt-3 xl:max-w-[90%]">Lorem Ipsum is simply dummy text of the
				   printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
				   since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
				   specimen book 
				 </p>
				 <h3 class="text-right">250 INR</h3>
			   </div>
			 </div>
		   </div>
		   <div class="bg-white rounderd px-7 py-4">
			 <div class="flex justify-between">
			   <div class="">
				 <div class="w-28 h-28 border-2 border-brightGray rounded-md">
				   <img src={cuttingBoard} alt="" class="w-full h-full object-cover"/>
				 </div>
			   </div>
			   <div class="w-full pl-5">
				 <div class="flex justify-between">
				   <h2>Cutting board</h2>
				   <div class="flex items-center space-x-5">
					 <div class="flex items-center">
					   <input type="checkbox" id="on" class="switch mx-3 order-2" />
					   <span class="off text-base font-bold anim order-1 text-caribbeanGreen">Off</span>
					   <span class="on text-base font-bold anim order-3">On</span>
					 </div>
					 <span
					   class="inline-block text-base text-spiroDiscoBall font-bold bg-brightGray py-1.5 px-3.5 rounded">100
					 Qty</span>
					 <a href="#" title="Delete"><i class="text-center icon-fill-delete text-xl"></i></a>
					 <a href="#" title="Edit"><i class="text-center icon-edit text-xl"></i></a>
				   </div>
				 </div>
				 <p class="text-quicksilver text-sm font-normal leading-6 pt-3 xl:max-w-[90%]">Lorem Ipsum is simply dummy text of the
				   printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
				   since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
				   specimen book 
				 </p>
				 <h3 class="text-right">250 INR</h3>
			   </div>
			 </div>
		   </div>
		   <div class="bg-white rounderd px-7 py-4">
			 <div class="flex justify-between">
			   <div class="">
				 <div class="w-28 h-28 border-2 border-brightGray rounded-md">
				   <img src={cuttingBoard} alt="" class="w-full h-full object-cover"/>
				 </div>
			   </div>
			   <div class="w-full pl-5">
				 <div class="flex justify-between">
				   <h2>Cutting board</h2>
				   <div class="flex items-center space-x-5">
					 <div class="flex items-center">
					   <input type="checkbox" id="on" class="switch mx-3 order-2" />
					   <span class="off text-base font-bold anim order-1 text-caribbeanGreen">Off</span>
					   <span class="on text-base font-bold anim order-3">On</span>
					 </div>
					 <span
					   class="inline-block text-base text-spiroDiscoBall font-bold bg-brightGray py-1.5 px-3.5 rounded">100
					 Qty</span>
					 <a href="#" title="Delete"><i class="text-center icon-fill-delete text-xl"></i></a>
					 <a href="#" title="Edit"><i class="text-center icon-edit text-xl"></i></a>
				   </div>
				 </div>
				 <p class="text-quicksilver text-sm font-normal leading-6 pt-3 xl:max-w-[90%]">Lorem Ipsum is simply dummy text of the
				   printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
				   since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
				   specimen book 
				 </p>
				 <h3 class="text-right">250 INR</h3>
			   </div>
			 </div>
		   </div>
		   <div class="bg-white rounderd px-7 py-4">
			 <div class="flex justify-between">
			   <div class="">
				 <div class="w-28 h-28 border-2 border-brightGray rounded-md">
				   <img src={cuttingBoard} alt="" class="w-full h-full object-cover"/>
				 </div>
			   </div>
			   <div class="w-full pl-5">
				 <div class="flex justify-between">
				   <h2>Cutting board</h2>
				   <div class="flex items-center space-x-5">
					 <div class="flex items-center">
					   <input type="checkbox" id="on" class="switch mx-3 order-2" />
					   <span class="off text-base font-bold anim order-1 text-caribbeanGreen">Off</span>
					   <span class="on text-base font-bold anim order-3">On</span>
					 </div>
					 <span
					   class="inline-block text-base text-spiroDiscoBall font-bold bg-brightGray py-1.5 px-3.5 rounded">100
					 Qty</span>
					 <a href="#" title="Delete"><i class="text-center icon-fill-delete text-xl"></i></a>
					 <a href="#" title="Edit"><i class="text-center icon-edit text-xl"></i></a>
				   </div>
				 </div>
				 <p class="text-quicksilver text-sm font-normal leading-6 pt-3 xl:max-w-[90%]">Lorem Ipsum is simply dummy text of the
				   printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
				   since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
				   specimen book 
				 </p>
				 <h3 class="text-right">250 INR</h3>
			   </div>
			 </div>
		   </div>
		   <div class="bg-white rounderd px-7 py-4">
			 <div class="flex justify-between">
			   <div class="">
				 <div class="w-28 h-28 border-2 border-brightGray rounded-md">
				   <img src={cuttingBoard} alt="" class="w-full h-full object-cover"/>
				 </div>
			   </div>
			   <div class="w-full pl-5">
				 <div class="flex justify-between">
				   <h2>Cutting board</h2>
				   <div class="flex items-center space-x-5">
					 <div class="flex items-center">
					   <input type="checkbox" id="on" class="switch mx-3 order-2" />
					   <span class="off text-base font-bold anim order-1 text-caribbeanGreen">Off</span>
					   <span class="on text-base font-bold anim order-3">On</span>
					 </div>
					 <span
					   class="inline-block text-base text-spiroDiscoBall font-bold bg-brightGray py-1.5 px-3.5 rounded">100
					 Qty</span>
					 <a href="#" title="Delete"><i class="text-center icon-fill-delete text-xl"></i></a>
					 <a href="#" title="Edit"><i class="text-center icon-edit text-xl"></i></a>
				   </div>
				 </div>
				 <p class="text-quicksilver text-sm font-normal leading-6 pt-3 xl:max-w-[90%]">Lorem Ipsum is simply dummy text of the
				   printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
				   since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
				   specimen book 
				 </p>
				 <h3 class="text-right">250 INR</h3>
			   </div>
			 </div>
		   </div>
		   <div class="bg-white rounderd px-7 py-4">
			 <div class="flex justify-between">
			   <div class="">
				 <div class="w-28 h-28 border-2 border-brightGray rounded-md">
				   <img src={cuttingBoard} alt="" class="w-full h-full object-cover"/>
				 </div>
			   </div>
			   <div class="w-full pl-5">
				 <div class="flex justify-between">
				   <h2>Cutting board</h2>
				   <div class="flex items-center space-x-5">
					 <div class="flex items-center">
					   <input type="checkbox" id="on" class="switch mx-3 order-2" />
					   <span class="off text-base font-bold anim order-1 text-caribbeanGreen">Off</span>
					   <span class="on text-base font-bold anim order-3">On</span>
					 </div>
					 <span
					   class="inline-block text-base text-spiroDiscoBall font-bold bg-brightGray py-1.5 px-3.5 rounded">100
					 Qty</span>
					 <a href="#" title="Delete"><i class="text-center icon-fill-delete text-xl"></i></a>
					 <a href="#" title="Edit"><i class="text-center icon-edit text-xl"></i></a>
				   </div>
				 </div>
				 <p class="text-quicksilver text-sm font-normal leading-6 pt-3 xl:max-w-[90%]">Lorem Ipsum is simply dummy text of the
				   printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
				   since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
				   specimen book 
				 </p>
				 <h3 class="text-right">250 INR</h3>
			   </div>
			 </div>
		   </div>
		 </div>
		 {/* <!-- add more button  --> */}
		 <div class="text-right">
		   <button class="btn-primary small">Add More</button>
		 </div>
	   </div>
	   {/* <!-- next preview button  --> */}
	   <div class="prw-next-btn">
		 <button type="button" class="flex items-center"><i class="icon-back-arrow mr-3"></i><h3>Back</h3></button>
		 <button type="button" class="flex items-center active"><h3>Next</h3><i class="icon-next-arrow ml-3"></i></button>
	   </div>
	 </div>
	 <Modal isOpen={isAddServicesPopUpOpen}>
		<EventPopUpAddService handleClose={setIsAddServicesPopUpOpen}/>
	 </Modal>
   </div>
  )
}

export default EventAddServices