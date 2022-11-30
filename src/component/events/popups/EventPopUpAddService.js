import axios from 'axios';
import { event } from 'jquery';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { baseUrl, s3Url } from '../../../config';
import { imageType, onlyDigits } from '../../../shared/constants';

function EventPopUpAddService({isItem, handleClose, data, setReload, edit}) {

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [priceType, setPriceType] = useState("per_day");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [error, setError] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");

  useEffect(()=> {
    if(data && edit) {
      setName(data.name);
      setPrice(data.price);
      setDescription(data.description);
      setPriceType(data.price_type);
      setQuantity(data.quantity);
      setImage(data.photos[0].url)
    }
  },[handleClose, data, edit]);

  const token = localStorage.getItem("Token");
  const header = {
    'Authorization': `Token ${token}`,
  }
  const imageHeader = {
    'Authorization': `Token ${token}`,
    'Content-Type': 'multipart/form-data'
  }

  const photoChangeHandler = (event) => {
		const size = 3;
		let selected = event.target.files[0];
		
		try {
			if(selected && imageType.includes(selected.type)) {
				if(selected.size < (size*1024*1024)){
					setImage(selected);
					setErrorMessage(null);
					setError(false);
				}
				else {
          setErrorMessage("file size is greater than "+size+" MB");
					setError(true);
				}
			} else {
				setErrorMessage("please select valid image file.");
				setError(true);
			}
		} catch (error) {
			console.log(error);
			setError(true);
		}
	}  

  const addServices = async() => {

    if(name.trim() === "" || price.trim() === "" || quantity.trim() === ""){
      toast.warn("Please fill all the reqired fields.");
      return
    }
    if(!(onlyDigits.test(price.trim()))) {
      toast.warn("Please enter valid Price.");
      return
    }
    if(!(onlyDigits.test(quantity.trim()))) {
      toast.warn("Please enter valid Qunatity.");
      return
    }
    
    const requestObj = {
        name: name,
        price: price,
        price_type: priceType,
        description: description,
        quantity: quantity,
        photos: []
    }
    if(edit) requestObj.serviceid = data._id;

    const formData = new FormData();
    formData.append("file", image);
    let url;
    try {
      if(typeof image === "object") {
        const response = await axios.post(`${baseUrl}/organizer/events/image`, formData, { headers: imageHeader });
        console.log(response);
        if(response.data.IsSuccess) {
          url = response.data.Data.url;
        }
      }
      requestObj.photos.push({url: url || image});
      // Object.keys(requestObj).forEach(key => {
      //   if (requestObj[key] === null) {
      //     delete requestObj[key];
      //   }
      // });
      console.log(requestObj);
      const res = await axios.post(`${baseUrl}/organizer/events/addservice`, requestObj, { headers: header });
      console.log(res);
      setReload(current => !current);
      if(res.data.IsSuccess) {
        toast.success(res.data.Message);
        handleClose(false);
      } else {
        toast.error(res.data.Message);
      }
    } catch (error) {
      toast.error("Something went wrong.")
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
              <h1 className="h1">Add {isItem ? "Item" : "Service"}</h1>
              <div className="flex items-center space-x-6">
                {/* <Link to="/" className="text-base font-bold text-spiroDiscoBall"><i className="icon-plus font-bold text-xs"></i> <span>Add Service</span></Link> */}
                <button onClick={()=>handleClose(false)} href="#" className="text-xl"><i className="icon-close"></i></button>
              </div>
            </div>
            <form className="space-y-5 py-8">
              <div className="w-full inputHolder">
                <label className="input-titel">Name <span>*</span></label>
                <input className="input option" type="text" value={name} onChange={(e) => setName(e.target.value) } />
                {/* <input className="input option" type="text" value="Catering" onChange={(e) => setName(e.target.value) }/> */}
              </div>
              <div className="w-full">
                <span className="input-titel">Price <span>*</span></span>
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
                <label className="input-titel">Add Quantity <span>*</span></label>
                <input className="input option" type="text" value={quantity} onChange={(e) => setQuantity(e.target.value) } />
              </div>
              <div className="upload-holder">
                {/* <h6 className="text-sm font-bold text-quicksilver">Select Photo <span className="text-10">2 images (up to 3MB/Image)</span></h6> */}
                <h6 className="text-sm font-bold text-quicksilver">Select Photo <span className="text-10">(up to 3MB)</span></h6>
                <label htmlFor="upload" className="upload upload-popup">
                  <input type="file" name="images" id="upload" className="appearance-none hidden" onChange={photoChangeHandler} />
                  <span className="input-titel mt-1"><i className="icon-image mr-2"></i>Choose Images</span>
                </label>
                {error ? <span className="mt-1" style={{color: "red", fontSize: "14px"}}>{errorMessage} </span> : <span className="mt-1" style={{fontSize: "14px"}}>{image?.name || (image && <a target="blank" href={s3Url+"/"+image}>image link</a>)}</span>}
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