import React from 'react'

function EventPopUpAddService({handleClose}) {
  return (
	//   <!-- Add Service  -->
	  <div className="popup table fixed w-full inset-0 z-40 bg-black bg-opacity-75 h-screen">
      <div className="table-cell align-middle">
        <div className="popin max-w-2xl w-full mx-auto max-h-[calc(100vh-55px)] overflow-y-auto lg:px-9">
          <div className="bg-brightGray p-12">
            <div className="flex justify-between items-center">
              <h1 className="h1">Add Service</h1>
              <div className="flex items-center space-x-6">
                <a href="#" className="text-base font-bold text-spiroDiscoBall"><i className="icon-plus font-bold text-xs"></i> <span>Add Service</span></a>
                <button onClick={()=>handleClose(false)} href="#" className="text-xl"><i className="icon-close"></i></button>
              </div>
            </div>
            <form className="space-y-5 py-8">
              <div className="w-full inputHolder">
                <label className="input-titel">Name</label>
                <input className="input option" type="text" value="Catering"/>
              </div>
              <div className="w-full">
                <span className="input-titel">Price</span>
                <label for="" className="flex items-center w-full bg-white p-2 px-3.5 rounded-md">
                  <div className="w-full px-3.5">
                    <input type="text" className="w-full outline-none text-spiroDiscoBall font-bold text-base" />
                  </div>
                  <div className="selectPrice flex items-center space-x-3">
                    <label className="block cursor-pointer">
                      <input type="radio" name="price" value="perDay" className="hidden" />
                      <span className="text-sm text-quicksilver py-2 px-3 bg-white shadow-lg whitespace-nowrap font-bold rounded block">
                        Per / Day
                      </span>
                    </label>
                    <label className="block cursor-pointer">
                      <input type="radio" name="price" value="perHour" className="hidden" checked="" />
                      <span className="text-sm text-quicksilver py-2 px-3 bg-white shadow-lg whitespace-nowrap font-bold rounded block">
                        Per / Person
                      </span>
                    </label>
                    <label className="block cursor-pointer">
                      <input type="radio" name="price" value="perEvent" className="hidden" />
                      <span className="text-sm text-quicksilver py-2 px-3 bg-white shadow-lg whitespace-nowrap font-bold rounded block">
                        Per / Event
                      </span>
                    </label>
                  </div>
                </label>
              </div>
              <div className="upload-holder">
                <h6 className="text-sm font-bold text-quicksilver">Select Photo <span className="text-10">2 images (up to 3MB/Image)</span></h6>
                <label for="upload" className="upload upload-popup">
                  <input type="file" name="images" id="upload" className="appearance-none hidden"/>
                  <span className="input-titel mt-1"><i className="icon-image mr-2"></i>Choose Images</span>
                </label>
              </div>
              <div className="w-full">
                <span className="input-titel">Description</span>
                <textarea name="" id="" cols="30" rows="5" className="outline-none flex items-center w-full bg-white p-2 px-3.5 rounded-md"></textarea>
              </div>
            </form>
            <a href="#" className="btn-primary w-full uppercase">Submit</a>
          </div>
        </div>
      </div>
    </div>

  )
}

export default EventPopUpAddService