import React, { useState } from "react";
import Modal from "../../modal/Modal";
import  EventPopUpAddPlace from "./EventPopUpAddPlace";

function EventPopUpAddPlaceWithDisplayName({ handleClose }) {
  const [isAddPlacePopUpOpen, setIsAddPlacePopUpOpen] = useState(false);

  return (
    // <!-- Add Place  -->
    <div className="popup table fixed w-full inset-0 z-40 bg-black bg-opacity-75 h-screen">
      <div className="table-cell align-middle">
        <div className="popin max-w-2xl w-full mx-auto max-h-[calc(100vh-55px)] overflow-y-auto lg:px-9">
          <div className="bg-brightGray p-12">
            <div className="flex justify-between items-center">
              <h1 className="h1">Add Place</h1>
              <div className="flex items-center space-x-6">
                <button onClick={()=>setIsAddPlacePopUpOpen(true)} className="text-base font-bold text-spiroDiscoBall">
                  <i className="icon-plus font-bold text-xs"></i>{" "}
                  <span>Add Place</span>
                </button>
                <button onClick={() => handleClose(false)} className="text-xl">
                  <i className="icon-close"></i>
                </button>
              </div>
            </div>
            <form className="space-y-5 py-8">
              <div className="w-full inputHolder">
                <label className="input-titel">Select Place</label>
                <select className="w-full arrow option">
                  <option>Sweet Love</option>
                  <option>Love</option>
                  <option>Sweet</option>
                </select>
              </div>
              <div className="w-full inputHolder">
                <label className="input-titel">
                  Give Display Name of Your Category
                </label>
                <input className="input" type="text" />
              </div>
            </form>
            <a href="#" className="btn-primary w-full uppercase">
              Submit
            </a>
          </div>
        </div>
      </div>
      <Modal isOpen={isAddPlacePopUpOpen}>
        <EventPopUpAddPlace handleClose={setIsAddPlacePopUpOpen} />
      </Modal>
    </div>
  );
}

export default EventPopUpAddPlaceWithDisplayName;
