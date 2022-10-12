import React,{useState} from 'react'
import { Link } from 'react-router-dom'

function EventPopUpUploadPhoto({ handleClose, setImageList }) {


	const [image, setImage] = useState("");
	const [imagePreview, setImagePreview] = useState("");
	const [details, setDetails] = useState("");
	const [error, setError] = useState(false);


	const handelImageChange = (e) => {
		const types = ['image/png', 'image/jpeg'];
		let selected = e.target.files[0];

		try {
			if (selected && types.includes(selected.type)) {
				if (selected.size < (5 * 1024 * 1024)) {
					setImagePreview(URL.createObjectURL(selected));
					setImage(selected);
				} else {
					console.log("file size is greater than 5MB. File size is ", selected.size);
					setError(true);
				}
			} else {
				console.log("please select image file with jpeg/png. File type is ", selected.type);
				setError(true);
			}
		} catch (error) {
			console.log(error);
			setError(true)
		}
	}

	const handelImageSubmit = async (e) => {
		e.preventDefault();
		if (!error) {
			setImageList((current) => [...current, {eventId: "5", image:image, previewUrl: imagePreview, detail: details}]);
			handleClose(false);
		} else {
			console.log("error occured");
		}
	}


	return (
		//  <!-- Upload Photo  -->
		<div className="popup table fixed w-full inset-0 z-40 bg-black bg-opacity-75 h-screen">
			<div className="table-cell align-middle">
				<div className="popin max-w-2xl w-full mx-auto max-h-[calc(100vh-55px)] overflow-y-auto lg:px-9">
					<div className="bg-brightGray p-12">
						<div className="flex justify-between items-center">
							<h1 className="h1">Upload Photo</h1>
							<div>
								<button onClick={() => handleClose(false)} className="text-xl"><i className="icon-close"></i></button>
							</div>
						</div>
						<form className="py-7 space-y-5">
							<div className="upload-holder">
								<h6 className="text-sm font-bold text-quicksilver">Select Photo <span className="text-10">5 Images (up to 5MB/Image)</span></h6>
								<label className="upload upload-popup">
									<input type="file" name="images" id="upload" onChange={handelImageChange} className="appearance-none hidden" />
									<span className="input-titel mt-1"><i className="icon-image mr-2"></i>Choose Images</span>
								</label>
							</div>
							<div className="w-full">
								<span className="input-titel">Details</span>
								<textarea name="" id="" cols="30" rows="5"  onChange={(e) => setDetails(e.target.value)} className="outline-none flex items-center w-full bg-white p-2 px-3.5 rounded-md"></textarea>
							</div>
						</form>
						<Link to="/" className="btn-primary w-full uppercase" onClick={handelImageSubmit}>Submit</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default EventPopUpUploadPhoto