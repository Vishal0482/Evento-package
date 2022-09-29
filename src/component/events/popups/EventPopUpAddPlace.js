import React from 'react'
import { Link } from 'react-router-dom'

function EventPopUpAddPlace({handleClose}) {
  return (
	    // <!-- Add Place  -->
      <div className="popup table fixed w-full inset-0 z-40 bg-black bg-opacity-75 h-screen">
      <div className="table-cell align-middle">
        <div className="popin max-w-2xl w-full mx-auto max-h-[calc(100vh-55px)] overflow-y-auto lg:px-9">
          <div className="bg-brightGray p-12">
            <div className="flex justify-between items-center">
              <h1 className="h1">Add Place</h1>
              <div>
                <button onClick={()=>handleClose(false)} className="text-xl"><i className="icon-close"></i></button>
              </div>
            </div>
            <form className="py-7">
              <div className="w-full inputHolder">
                <label className="input-titel">Place Name</label>
                <input className="input" type="text"/>
              </div>
            </form>
            <Link to="/" className="btn-primary w-full uppercase">Submit</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventPopUpAddPlace