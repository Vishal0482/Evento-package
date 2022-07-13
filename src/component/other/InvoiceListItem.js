import React from 'react'

function InvoiceListItem() {
    return (
        <div class="w-full bg-white flex justify-between p-6 rounded-lg">
            <div class="flex items-center space-x-6">
                <p class="h2"># 96935</p>
                <p class="h2 font-medium text-quicksilver">Sweet Love Catering</p>
                <p class="h2 font-medium text-quicksilver">Alexander wang</p>
            </div>
            <div class="flex items-center space-x-6">
                <p class="h2">100 Qty</p>
                <p class="h2">₹1,20,000</p>
            </div>
        </div>
    )
}

export default InvoiceListItem;
