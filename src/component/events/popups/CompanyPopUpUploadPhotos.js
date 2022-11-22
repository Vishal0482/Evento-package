import { current } from '@reduxjs/toolkit';
import React, { useState } from 'react'

function CompanyPopUpUploadPhotos({handleClose, setImageList}) {

    const [image, setImage] = useState("");
	const [imagePreview, setImagePreview] = useState("");
	const [details, setDetails] = useState("");
	const [error, setError] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");

    const photoChangeHandler = (event) => {
		const types = ['image/png', 'image/jpeg'];
		let selected = event.target.files[0];
		
		try {
			if(selected && types.includes(selected.type)) {
				if(selected.size < (3*1024*1024)){
					setImagePreview(URL.createObjectURL(selected));
					setImage(selected);
					setErrorMessage(null);
					setError(false);
				}
				else {
					console.log("file size is greater than 3MB. File size is ", selected.size);
					setErrorMessage("file size is greater than 3MB.");
					setError(true);
				}
			} else {
				console.log("please select image file with jpeg/png. File type is ", selected.type);
				setErrorMessage("please select image file with jpeg/png.");
				setError(true);
			}
		} catch (error) {
			console.log(error);
			setError(true);
		}
	}  

    const submitHandler = async() => {
		if(!error) {
			setImageList(current => [...current, image]);
            handleClose(false);
		} else {
			console.log("error occured");
		}
	}

  return (
    <div className="popup table fixed w-full inset-0 z-40 bg-black bg-opacity-75 h-screen">
	 <div className="table-cell align-middle">
	   <div className="popin max-w-2xl w-full mx-auto max-h-[calc(100vh-55px)] overflow-y-auto lg:px-9">
		 <div className="bg-brightGray p-12">
		   <div className="flex justify-between items-center">
			 <h1 className="h1">Upload Photo</h1>
			 <div>
			   <button onClick={()=>handleClose(false)} className="text-xl"><i className="icon-close"></i></button>
			 </div>
		   </div>
		   <form className="py-7 space-y-5">
			 <div className="upload-holder">
			   <h6 className="text-sm font-bold text-quicksilver">Select Photo <span className="text-10">15 Images (up to 3MB/Image)</span></h6>
			   <label htmlfor="upload" className="upload upload-popup">
				 <input type="file" name="images" id="upload" className="appearance-none hidden" onChange={photoChangeHandler}/>
				 <span className="input-titel mt-1"><i className="icon-image mr-2"></i>Choose Images</span>
			   </label>
			    {error ? <span className="mt-1" style={{color: "red", fontSize: "14px"}}>{errorMessage} </span> : <span className="mt-1" style={{fontSize: "14px"}}>{image.name}</span>}
			 </div>
			 {/* <div className="w-full">
			   <span className="input-titel">Details</span>
			   <textarea name="details" id="" cols="30" rows="5" className="outline-none flex items-center w-full bg-white p-2 px-3.5 rounded-md" onChange={(e) => setDetails(e.target.value)}></textarea>
			 </div> */}
		   </form>
		   {/* <Link to="/" className="btn-primary w-full uppercase">Submit</Link> */}
		   <div className="btn-primary w-full uppercase cursor-pointer" onClick={submitHandler}>Submit</div>
		 </div>
	   </div>
	 </div>
   </div>
  )
}

export default CompanyPopUpUploadPhotos;
