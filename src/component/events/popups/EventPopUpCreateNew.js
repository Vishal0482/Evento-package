import React, {useState} from 'react'
import Modal from  "../../modal/Modal.js"
import EventPopUpCategory from './EventPopUpCategory.js'

function EventPopUpCreateNew({handleClose}) {

	const [isCategoryPopUpOpen, setIsCategoryPopUpOpen] = useState(false);

  return (
	//    <!-- Create New  -->
	   <div class="popup table fixed w-full inset-0 z-40 bg-black bg-opacity-75 h-screen">
	   <div class="table-cell align-middle">
		 <div class="popin max-w-2xl w-full mx-auto max-h-[calc(100vh-55px)] overflow-y-auto lg:px-9">
		   <div class="bg-brightGray p-12">
			 <div class="flex justify-between items-center">
			   <h1 class="h1">Create New</h1>
			   <div class="flex items-center space-x-6">
				 <button onClick={()=>{
					setIsCategoryPopUpOpen(true)
					// handleClose(false)
					}} href="#" class="text-base font-bold text-spiroDiscoBall"><i class="icon-plus font-bold text-xs"></i> <span>Add Category</span></button>
				 <button onClick={()=>handleClose(false)} href="#" class="text-xl"><i class="icon-close"></i></button>
			   </div>
			 </div>
			 <form class="space-y-5 py-7">
			   <div class="w-full inputHolder">
				 <label class="input-titel">Select Category</label>
				 <select class="w-full arrow option">
				   <option>Sweet Love Catering</option>
				   <option>Love Catering</option>
				   <option>Sweet Catering</option>
				 </select>
			   </div>
			   <div class="w-full inputHolder">
				 <label class="input-titel">Give Display Name of Your Category</label>
				 <input class="input" type="text"/>
			   </div>
			 </form>
			 <a href="#" class="btn-primary w-full uppercase">Submit</a>
		   </div>
		 </div>
	   </div>
	   	<Modal isOpen={isCategoryPopUpOpen} >
			<EventPopUpCategory handleClose={setIsCategoryPopUpOpen}/>
	 	</Modal>
	 </div>
  )
}

export default EventPopUpCreateNew