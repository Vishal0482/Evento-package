import React from 'react'

function EventAddPlacesEventList({displayName, categoryName}) {
    return (
        <div className="w-full flex items-center">
            <div>
                <label className="checkbox w-16">
                    <input type="checkbox" />
                    <i className="icon-right"></i>
                </label>
            </div>
            <div className="w-full px-7 py-5 bg-white rounded">
                <div className="flex items-start justify-between">
                    <div>
                        <h2>{displayName}</h2>
                        <span className="text-sm text-spiroDiscoBall font-medium tracking-wider">{categoryName}</span>
                    </div>
                    <div className="flex">
                        <a href="#" className="flex items-center text-xs text-quicksilver font-semibold tracking-wider pr-4 border-r border-quicksilver"><i className="icon-fill-delete mr-1"></i>Delete</a>
                        <a href="#" className="flex items-center text-xs text-quicksilver font-semibold tracking-wider pl-4"><i className="icon-edit mr-1"></i>Edit</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventAddPlacesEventList;
