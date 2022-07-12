import React from 'react'

function DashboardEventAtteneeListItem({ id, name, price }) {
    return (
        <div className="bg-white px-5 py-2.5 flex justify-between items-center rounded-md">
            <div className="space-y-2">
                <div className="flex items-center space-x-3">
                    <h3 className="text-base">{name}</h3>
                    <span className="input-titel font-bold text-ufoGreen" style={{ paddingBottom: 0 }}>{id}</span>
                </div>
                <div className="flex items-center space-x-3">
                    <p className="text-quicksilver text-xs font-bold flex items-center"><i className="icon-location mr-2 text-sm"></i>Varachha, Surat</p>
                    <p className="text-quicksilver text-xs font-bold flex items-center"><i className="icon-booking mr-2 text-sm"></i>July 13, 2021</p>
                </div>
            </div>
            <h3 className="text-lg">{price}</h3>
        </div>
    )
}

export default DashboardEventAtteneeListItem;
