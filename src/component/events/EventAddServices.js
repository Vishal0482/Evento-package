import React, {useState} from 'react'
import cuttingBoard from "../../assest/images/cutting-board.png"
import Modal from "../modal/Modal"
import EventPopUpAddService from './popups/EventPopUpAddService'

function EventAddServices() {

	const [isAddServicesPopUpOpen, setIsAddServicesPopUpOpen] = useState(false)

  return (
	//  <!-- Content In -->
	 <div className="rightInContent">
	 <div className="wrapper min-h-full">
	   <div className="space-y-8">
		 <div className="flex justify-between items-center">
		   <a href="#" className="flex items-center">
			 <i className="icon-back-arrow mr-4 text-2xl"></i>
			 <h1>Sweet Love Catering</h1>
		   </a>
		   <button onClick={()=>setIsAddServicesPopUpOpen(true)} className="btn-primary flex items-center"><i className="icon-plus mr-3"></i><span>Add Service</span></button>
		 </div>
		  {/* <!-- step-progress-bar  --> */}
		 <div className="w-full overflow-hidden">
		   <ul className="flex justify-between step-progress-holder">
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
		 <div className="pt-5 space-y-3">
		   <div className="bg-white rounderd px-7 py-4">
			 <div className="flex justify-between">
			   <div className="">
				 <div className="w-28 h-28 border-2 border-brightGray rounded-md">
				   <img src={cuttingBoard} alt="" className="w-full h-full object-cover"/>
				 </div>
			   </div>
			   <div className="w-full pl-5">
				 <div className="flex justify-between">
				   <h2>Cutting board</h2>
				   <div className="flex items-center space-x-5">
					 <div className="flex items-center">
					   <input type="checkbox" id="on" className="switch mx-3 order-2" />
					   <span className="off text-base font-bold anim order-1 text-caribbeanGreen">Off</span>
					   <span className="on text-base font-bold anim order-3">On</span>
					 </div>
					 <span
					   className="inline-block text-base text-spiroDiscoBall font-bold bg-brightGray py-1.5 px-3.5 rounded">100
					 Qty</span>
					 <a href="#" title="Delete"><i className="text-center icon-fill-delete text-xl"></i></a>
					 <a href="#" title="Edit"><i className="text-center icon-edit text-xl"></i></a>
				   </div>
				 </div>
				 <p className="text-quicksilver text-sm font-normal leading-6 pt-3 xl:max-w-[90%]">Lorem Ipsum is simply dummy text of the
				   printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
				   since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
				   specimen book 
				 </p>
				 <h3 className="text-right">250 INR</h3>
			   </div>
			 </div>
		   </div>
		   <div className="bg-white rounderd px-7 py-4">
			 <div className="flex justify-between">
			   <div className="">
				 <div className="w-28 h-28 border-2 border-brightGray rounded-md">
				   <img src={cuttingBoard} alt="" className="w-full h-full object-cover"/>
				 </div>
			   </div>
			   <div className="w-full pl-5">
				 <div className="flex justify-between">
				   <h2>Cutting board</h2>
				   <div className="flex items-center space-x-5">
					 <div className="flex items-center">
					   <input type="checkbox" id="on" className="switch mx-3 order-2" />
					   <span className="off text-base font-bold anim order-1 text-caribbeanGreen">Off</span>
					   <span className="on text-base font-bold anim order-3">On</span>
					 </div>
					 <span
					   className="inline-block text-base text-spiroDiscoBall font-bold bg-brightGray py-1.5 px-3.5 rounded">100
					 Qty</span>
					 <a href="#" title="Delete"><i className="text-center icon-fill-delete text-xl"></i></a>
					 <a href="#" title="Edit"><i className="text-center icon-edit text-xl"></i></a>
				   </div>
				 </div>
				 <p className="text-quicksilver text-sm font-normal leading-6 pt-3 xl:max-w-[90%]">Lorem Ipsum is simply dummy text of the
				   printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
				   since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
				   specimen book 
				 </p>
				 <h3 className="text-right">250 INR</h3>
			   </div>
			 </div>
		   </div>
		   <div className="bg-white rounderd px-7 py-4">
			 <div className="flex justify-between">
			   <div className="">
				 <div className="w-28 h-28 border-2 border-brightGray rounded-md">
				   <img src={cuttingBoard} alt="" className="w-full h-full object-cover"/>
				 </div>
			   </div>
			   <div className="w-full pl-5">
				 <div className="flex justify-between">
				   <h2>Cutting board</h2>
				   <div className="flex items-center space-x-5">
					 <div className="flex items-center">
					   <input type="checkbox" id="on" className="switch mx-3 order-2" />
					   <span className="off text-base font-bold anim order-1 text-caribbeanGreen">Off</span>
					   <span className="on text-base font-bold anim order-3">On</span>
					 </div>
					 <span
					   className="inline-block text-base text-spiroDiscoBall font-bold bg-brightGray py-1.5 px-3.5 rounded">100
					 Qty</span>
					 <a href="#" title="Delete"><i className="text-center icon-fill-delete text-xl"></i></a>
					 <a href="#" title="Edit"><i className="text-center icon-edit text-xl"></i></a>
				   </div>
				 </div>
				 <p className="text-quicksilver text-sm font-normal leading-6 pt-3 xl:max-w-[90%]">Lorem Ipsum is simply dummy text of the
				   printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
				   since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
				   specimen book 
				 </p>
				 <h3 className="text-right">250 INR</h3>
			   </div>
			 </div>
		   </div>
		   <div className="bg-white rounderd px-7 py-4">
			 <div className="flex justify-between">
			   <div className="">
				 <div className="w-28 h-28 border-2 border-brightGray rounded-md">
				   <img src={cuttingBoard} alt="" className="w-full h-full object-cover"/>
				 </div>
			   </div>
			   <div className="w-full pl-5">
				 <div className="flex justify-between">
				   <h2>Cutting board</h2>
				   <div className="flex items-center space-x-5">
					 <div className="flex items-center">
					   <input type="checkbox" id="on" className="switch mx-3 order-2" />
					   <span className="off text-base font-bold anim order-1 text-caribbeanGreen">Off</span>
					   <span className="on text-base font-bold anim order-3">On</span>
					 </div>
					 <span
					   className="inline-block text-base text-spiroDiscoBall font-bold bg-brightGray py-1.5 px-3.5 rounded">100
					 Qty</span>
					 <a href="#" title="Delete"><i className="text-center icon-fill-delete text-xl"></i></a>
					 <a href="#" title="Edit"><i className="text-center icon-edit text-xl"></i></a>
				   </div>
				 </div>
				 <p className="text-quicksilver text-sm font-normal leading-6 pt-3 xl:max-w-[90%]">Lorem Ipsum is simply dummy text of the
				   printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
				   since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
				   specimen book 
				 </p>
				 <h3 className="text-right">250 INR</h3>
			   </div>
			 </div>
		   </div>
		   <div className="bg-white rounderd px-7 py-4">
			 <div className="flex justify-between">
			   <div className="">
				 <div className="w-28 h-28 border-2 border-brightGray rounded-md">
				   <img src={cuttingBoard} alt="" className="w-full h-full object-cover"/>
				 </div>
			   </div>
			   <div className="w-full pl-5">
				 <div className="flex justify-between">
				   <h2>Cutting board</h2>
				   <div className="flex items-center space-x-5">
					 <div className="flex items-center">
					   <input type="checkbox" id="on" className="switch mx-3 order-2" />
					   <span className="off text-base font-bold anim order-1 text-caribbeanGreen">Off</span>
					   <span className="on text-base font-bold anim order-3">On</span>
					 </div>
					 <span
					   className="inline-block text-base text-spiroDiscoBall font-bold bg-brightGray py-1.5 px-3.5 rounded">100
					 Qty</span>
					 <a href="#" title="Delete"><i className="text-center icon-fill-delete text-xl"></i></a>
					 <a href="#" title="Edit"><i className="text-center icon-edit text-xl"></i></a>
				   </div>
				 </div>
				 <p className="text-quicksilver text-sm font-normal leading-6 pt-3 xl:max-w-[90%]">Lorem Ipsum is simply dummy text of the
				   printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
				   since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
				   specimen book 
				 </p>
				 <h3 className="text-right">250 INR</h3>
			   </div>
			 </div>
		   </div>
		   <div className="bg-white rounderd px-7 py-4">
			 <div className="flex justify-between">
			   <div className="">
				 <div className="w-28 h-28 border-2 border-brightGray rounded-md">
				   <img src={cuttingBoard} alt="" className="w-full h-full object-cover"/>
				 </div>
			   </div>
			   <div className="w-full pl-5">
				 <div className="flex justify-between">
				   <h2>Cutting board</h2>
				   <div className="flex items-center space-x-5">
					 <div className="flex items-center">
					   <input type="checkbox" id="on" className="switch mx-3 order-2" />
					   <span className="off text-base font-bold anim order-1 text-caribbeanGreen">Off</span>
					   <span className="on text-base font-bold anim order-3">On</span>
					 </div>
					 <span
					   className="inline-block text-base text-spiroDiscoBall font-bold bg-brightGray py-1.5 px-3.5 rounded">100
					 Qty</span>
					 <a href="#" title="Delete"><i className="text-center icon-fill-delete text-xl"></i></a>
					 <a href="#" title="Edit"><i className="text-center icon-edit text-xl"></i></a>
				   </div>
				 </div>
				 <p className="text-quicksilver text-sm font-normal leading-6 pt-3 xl:max-w-[90%]">Lorem Ipsum is simply dummy text of the
				   printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
				   since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
				   specimen book 
				 </p>
				 <h3 className="text-right">250 INR</h3>
			   </div>
			 </div>
		   </div>
		 </div>
		 {/* <!-- add more button  --> */}
		 <div className="text-right">
		   <button className="btn-primary small">Add More</button>
		 </div>
	   </div>
	   {/* <!-- next preview button  --> */}
	   <div className="prw-next-btn">
		 <button type="button" className="flex items-center"><i className="icon-back-arrow mr-3"></i><h3>Back</h3></button>
		 <button type="button" className="flex items-center active"><h3>Next</h3><i className="icon-next-arrow ml-3"></i></button>
	   </div>
	 </div>
	 <Modal isOpen={isAddServicesPopUpOpen}>
		<EventPopUpAddService handleClose={setIsAddServicesPopUpOpen}/>
	 </Modal>
   </div>
  )
}

export default EventAddServices