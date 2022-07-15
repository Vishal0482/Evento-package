import React from 'react'

function PSBPopUpAddSkill({handleClose}) {
  return (
	    // <!-- Add Skill  -->
		<div class="popup table fixed w-full inset-0 z-40 bg-black bg-opacity-75 h-screen">
		<div class="table-cell align-middle">
		  <div class="popin max-w-2xl w-full mx-auto max-h-[calc(100vh-55px)] overflow-y-auto lg:px-9">
			<div class="bg-brightGray p-12">
			  <div class="flex justify-between items-center">
				<h1 class="h1">Add Skill</h1>
				<div>
				<button onClick={() => handleClose(false)} class="text-xl">
                  <i class="icon-close"></i>
                </button>
				</div>
			  </div>
			  <form class="py-7">
				<div class="w-full inputHolder">
				  <label class="input-titel">Skill Name</label>
				  <input class="input" type="text"/>
				</div>
			  </form>
			  <a href="#" class="btn-primary w-full uppercase">Submit</a>
			</div>
		  </div>
		</div>
	  </div>
  )
}

export default PSBPopUpAddSkill