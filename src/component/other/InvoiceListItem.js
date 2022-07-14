import React from 'react'

function InvoiceListItem() {
    return (
        <div className="w-full bg-white flex justify-between p-6 rounded-lg">
            <div className="flex items-center space-x-6">
                <p className="h2"># 96935</p>
                <p className="h2 font-medium text-quicksilver">Sweet Love Catering</p>
                <p className="h2 font-medium text-quicksilver">Alexander wang</p>
            </div>
            <div className="flex items-center space-x-6">
                <p className="h2">100 Qty</p>
                <p className="h2">₹1,20,000</p>
            </div>
        </div>
    )
}

export default InvoiceListItem;
