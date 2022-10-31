import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { baseUrl } from '../../../config';

function EventPopUpAddService({handleClose, data, edit, setReload}) {

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [priceType, setPriceType] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  useEffect(()=> {
    if(data) {
      setName(data.service_name);
      setPrice(data.service_price);
      setDescription(data.service_desc);
      setPriceType(data.service_price_type);
      setQuantity(data.service_quantity);
    }
  },[handleClose, data]);

  const token = localStorage.getItem("Token");
  const header = {
    'Authorization': `Token ${token}`,
    // 'Content-Type': 'multipart/form-data'
  }

  const addServices = async() => {
    
    const requestObj = {
        service_name: name,
        service_price: price,
        service_price_type: priceType,
        service_desc: description,
        service_quantity: quantity,
        // service_image: image
    }

    // let formData = new FormData();
    // formData.append("service_name", name);
    // formData.append("service_price", price);
    // formData.append("service_quantity", quantity);
    // formData.append("service_price_type", priceType);
    // formData.append("service_desc", description);
    // formData.append("service_image", image);
    console.log(requestObj);
    console.log(edit);
    try {
      if (edit) {
        // Upadte service
        console.log(edit)
        console.log(data.Id);
        const response = await axios.put(`${baseUrl}/api/add_service_event/${data.Id}`, requestObj, { headers: header });
        console.log(response);
        setReload(true);
        handleClose(false);
      } else {
        // Create new Service
        const response = await axios.post(`${baseUrl}/api/add_service_event`, requestObj, { headers: header });
        console.log(response);
        handleClose(false);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
	//   <!-- Add Service  -->
	  <div className="popup table fixed w-full inset-0 z-40 bg-black bg-opacity-75 h-screen">
      <div className="table-cell align-middle">
        <div className="popin max-w-2xl w-full mx-auto max-h-[calc(100vh-55px)] overflow-y-auto lg:px-9">
          <div className="bg-brightGray p-12">
            <div className="flex justify-between items-center">
              <h1 className="h1">Add Service</h1>
              <div className="flex items-center space-x-6">
                {/* <Link to="/" className="text-base font-bold text-spiroDiscoBall"><i className="icon-plus font-bold text-xs"></i> <span>Add Service</span></Link> */}
                <button onClick={()=>handleClose(false)} href="#" className="text-xl"><i className="icon-close"></i></button>
              </div>
            </div>
            <form className="space-y-5 py-8">
              <div className="w-full inputHolder">
                <label className="input-titel">Name</label>
                <input className="input option" type="text" value={name} onChange={(e) => setName(e.target.value) } />
                {/* <input className="input option" type="text" value="Catering" onChange={(e) => setName(e.target.value) }/> */}
              </div>
              <div className="w-full">
                <span className="input-titel">Price</span>
                <label htmlFor="" className="flex items-center w-full bg-white p-2 px-3.5 rounded-md">
                  <div className="w-full px-3.5">
                    <input type="text" className="w-full outline-none text-spiroDiscoBall font-bold text-base" value={price} onChange={(e) => setPrice(e.target.value) } />
                  </div>
                  <div className="selectPrice flex items-center space-x-3">
                    <label className="block cursor-pointer">
                      <input type="radio" name="price" value="perDay" className="hidden" checked={priceType === "per_day" && true} onChange={(e)=> setPriceType("per_day")} />
                      <span className="text-sm text-quicksilver py-2 px-3 bg-white shadow-lg whitespace-nowrap font-bold rounded block">
                        Per / Day
                      </span>
                    </label>
                    <label className="block cursor-pointer">
                      <input type="radio" name="price" value="perHour" className="hidden" checked={priceType === "per_person" && true} onChange={(e)=> setPriceType("per_person")} />
                      <span className="text-sm text-quicksilver py-2 px-3 bg-white shadow-lg whitespace-nowrap font-bold rounded block">
                        Per / Person
                      </span>
                    </label>
                    <label className="block cursor-pointer">
                      <input type="radio" name="price" value="perEvent" className="hidden" checked={priceType === "per_event" && true} onChange={(e)=> setPriceType("per_event")} />
                      <span className="text-sm text-quicksilver py-2 px-3 bg-white shadow-lg whitespace-nowrap font-bold rounded block">
                        Per / Event
                      </span>
                    </label>
                  </div>
                </label>
              </div>
              <div className="w-full inputHolder">
                <label className="input-titel">Add Quantity</label>
                <input className="input option" type="text" value={quantity} onChange={(e) => setQuantity(e.target.value) } />
              </div>
              <div className="upload-holder">
                <h6 className="text-sm font-bold text-quicksilver">Select Photo <span className="text-10">2 images (up to 3MB/Image)</span></h6>
                <label htmlFor="upload" className="upload upload-popup">
                  <input type="file" name="images" id="upload" className="appearance-none hidden" onChange={(e) => setImage(e.target.files[0])} />
                  <span className="input-titel mt-1"><i className="icon-image mr-2"></i>Choose Images</span>
                </label>
              </div>
              <div className="w-full">
                <span className="input-titel">Description</span>
                <textarea name="" id="" cols="30" rows="5" className="outline-none flex items-center w-full bg-white p-2 px-3.5 rounded-md" value={description} onChange={(e) => setDescription(e.target.value) }></textarea>
              </div>
            </form>
            <div className="btn-primary w-full uppercase" onClick={addServices}>Submit</div>
            {/* <Link to="/" className="btn-primary w-full uppercase" onClick={addServices}>Submit</Link> */}
          </div>
        </div>
      </div>
    </div>

  )
}

export default EventPopUpAddService