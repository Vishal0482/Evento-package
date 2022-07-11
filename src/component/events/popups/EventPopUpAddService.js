import React from 'react'

function EventPopUpAddService({handleClose}) {
  return (
	//   <!-- Add Service  -->
	  <div class="popup table fixed w-full inset-0 z-40 bg-black bg-opacity-75 h-screen">
      <div class="table-cell align-middle">
        <div class="popin max-w-2xl w-full mx-auto max-h-[calc(100vh-55px)] overflow-y-auto lg:px-9">
          <div class="bg-brightGray p-12">
            <div class="flex justify-between items-center">
              <h1 class="h1">Add Service</h1>
              <div class="flex items-center space-x-6">
                <a href="#" class="text-base font-bold text-spiroDiscoBall"><i class="icon-plus font-bold text-xs"></i> <span>Add Service</span></a>
                <button onClick={()=>handleClose(false)} href="#" class="text-xl"><i class="icon-close"></i></button>
              </div>
            </div>
            <form class="space-y-5 py-8">
              <div class="w-full inputHolder">
                <label class="input-titel">Name</label>
                <input class="input option" type="text" value="Catering"/>
              </div>
              <div class="w-full">
                <span class="input-titel">Price</span>
                <label for="" class="flex items-center w-full bg-white p-2 px-3.5 rounded-md">
                  <div class="w-full px-3.5">
                    <input type="text" class="w-full outline-none text-spiroDiscoBall font-bold text-base" />
                  </div>
                  <div class="selectPrice flex items-center space-x-3">
                    <label class="block cursor-pointer">
                      <input type="radio" name="price" value="perDay" class="hidden" />
                      <span class="text-sm text-quicksilver py-2 px-3 bg-white shadow-lg whitespace-nowrap font-bold rounded block">
                        Per / Day
                      </span>
                    </label>
                    <label class="block cursor-pointer">
                      <input type="radio" name="price" value="perHour" class="hidden" checked="" />
                      <span class="text-sm text-quicksilver py-2 px-3 bg-white shadow-lg whitespace-nowrap font-bold rounded block">
                        Per / Person
                      </span>
                    </label>
                    <label class="block cursor-pointer">
                      <input type="radio" name="price" value="perEvent" class="hidden" />
                      <span class="text-sm text-quicksilver py-2 px-3 bg-white shadow-lg whitespace-nowrap font-bold rounded block">
                        Per / Event
                      </span>
                    </label>
                  </div>
                </label>
              </div>
              <div class="upload-holder">
                <h6 class="text-sm font-bold text-quicksilver">Select Photo <span class="text-10">2 images (up to 3MB/Image)</span></h6>
                <label for="upload" class="upload upload-popup">
                  <input type="file" name="images" id="upload" class="appearance-none hidden"/>
                  <span class="input-titel mt-1"><i class="icon-image mr-2"></i>Choose Images</span>
                </label>
              </div>
              <div class="w-full">
                <span class="input-titel">Description</span>
                <textarea name="" id="" cols="30" rows="5" class="outline-none flex items-center w-full bg-white p-2 px-3.5 rounded-md"></textarea>
              </div>
            </form>
            <a href="#" class="btn-primary w-full uppercase">Submit</a>
          </div>
        </div>
      </div>
    </div>

  )
}

export default EventPopUpAddService