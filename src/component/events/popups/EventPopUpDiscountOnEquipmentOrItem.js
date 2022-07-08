import React from 'react'

function EventPopUpDiscountOnEquipmentOrItem({handleClose}) {
  return (
	//  <!--  Discount on Particular Equipment Or Item  -->
	 <div class="popup table fixed w-full inset-0 z-40 bg-black bg-opacity-75 h-screen">
	 <div class="table-cell align-middle">
	   <div class="popin max-w-2xl w-full mx-auto max-h-[calc(100vh-55px)] overflow-y-auto lg:px-9">
		 <div class="bg-brightGray p-7 space-y-7">
		   <h2 class="h1 w-full max-w-[60%] text-center mx-auto"> Discount on Particular Equipment Or Item </h2>
		   <form class="flex items-center space-x-5">
			 <div class="w-full lg:w-1/2 inputHolder">
			   <label class="input-titel">Equipment Or Item</label>
			   <select class="w-full arrow option">
				 <option></option>
				 <option>Love</option>
				 <option>Sweet</option>
			   </select>
			 </div>
			 <div class="w-full lg:w-1/2 inputHolder">
			   <label class="input-titel">Discount</label>
			   <input class="input option" type="text" />
			 </div>
		   </form>
		   <div class="flex justify-end">
			 <a href="#" class="btn-primary small"><i class="icon-plus mr-3 font-bold"></i>Add Equipment</a>
		   </div>
		   <ul class="space-y-2.5">
			 <li class="text-xs font-medium">* Terms & Conditions</li>
			 <li class="text-10 leading-5 font-medium text-japaneseIndigo pl-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</li>
			 <li class="text-10 leading-5 font-medium text-japaneseIndigo pl-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</li>
		   </ul>
		   <div class="flex items-center space-x-5">
		   <button onClick={()=>handleClose(false)} class="btn-primary btn-cancel w-full">CANCEL</button>
			 <a href="#" class="btn-primary w-full">APPLY</a>
		   </div>
		 </div>
	   </div>
	 </div>
   </div>

  )
}

export default EventPopUpDiscountOnEquipmentOrItem