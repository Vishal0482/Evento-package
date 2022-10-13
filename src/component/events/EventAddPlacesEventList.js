import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeData } from '../../redux/createEvent';
import Modal from "../modal/Modal";
import EventPopUpCreateNew from './popups/EventPopUpCreateNew';

function EventAddPlacesEventList({ displayName, categoryName }) {
    const [isCreateNewPopUpOpen, setIsCreateNewPopUpOpen] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const deleteClickHandler = () => {
        dispatch(removeData("category"));
        navigate(-1)
    }

    const editClickHandler = () =>{
        setIsCreateNewPopUpOpen(true);

    }

    if (displayName !== "" && categoryName !== "")
        return (
            <div className="w-full flex items-center">
                <div className="w-full px-7 py-5 bg-white rounded">
                    <div className="flex items-start justify-between">
                        <div>
                            <h2>{displayName}</h2>
                            <span className="text-sm text-spiroDiscoBall font-medium tracking-wider">{categoryName}</span>
                        </div>
                        <div className="flex">
                            <div className="flex items-center text-xs text-quicksilver font-semibold tracking-wider pr-4 border-r border-quicksilver" onClick={deleteClickHandler}><i className="icon-fill-delete mr-1"></i>Delete</div>
                            <div className="flex items-center text-xs text-quicksilver font-semibold tracking-wider pl-4" onClick={editClickHandler}><i className="icon-edit mr-1"></i>Edit</div>
                        </div>
                    </div>
                </div>
                <Modal isOpen={isCreateNewPopUpOpen} >
		            <EventPopUpCreateNew handleClose={setIsCreateNewPopUpOpen} selectedCategory={categoryName} displayName={displayName} edit={true}/>
	            </Modal>
            </div>
        );
    else
        return "";
}

export default EventAddPlacesEventList;
