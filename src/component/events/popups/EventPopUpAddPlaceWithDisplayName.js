import React, { useState } from "react";
import Modal from "../../modal/Modal";
import  EventPopUpAddPlace from "./EventPopUpAddPlace";

function EventPopUpAddPlaceWithDisplayName({ handleClose }) {
  const [isAddPlacePopUpOpen, setIsAddPlacePopUpOpen] = useState(false);

  return (
    // <!-- Add Place  -->
    <div class="popup table fixed w-full inset-0 z-40 bg-black bg-opacity-75 h-screen">
      <div class="table-cell align-middle">
        <div class="popin max-w-2xl w-full mx-auto max-h-[calc(100vh-55px)] overflow-y-auto lg:px-9">
          <div class="bg-brightGray p-12">
            <div class="flex justify-between items-center">
              <h1 class="h1">Add Place</h1>
              <div class="flex items-center space-x-6">
                <button onClick={()=>setIsAddPlacePopUpOpen(true)} class="text-base font-bold text-spiroDiscoBall">
                  <i class="icon-plus font-bold text-xs"></i>{" "}
                  <span>Add Place</span>
                </button>
                <button onClick={() => handleClose(false)} class="text-xl">
                  <i class="icon-close"></i>
                </button>
              </div>
            </div>
            <form class="space-y-5 py-8">
              <div class="w-full inputHolder">
                <label class="input-titel">Select Place</label>
                <select class="w-full arrow option">
                  <option>Sweet Love</option>
                  <option>Love</option>
                  <option>Sweet</option>
                </select>
              </div>
              <div class="w-full inputHolder">
                <label class="input-titel">
                  Give Display Name of Your Category
                </label>
                <input class="input" type="text" />
              </div>
            </form>
            <a href="#" class="btn-primary w-full uppercase">
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
