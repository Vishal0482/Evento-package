import React from 'react'
import Advertisement from '../Advertisement';
import InvoiceListItem from './InvoiceListItem';

function InvoiceHistory() {
    return (
        <div class="wrapper min-h-full">

            <div class="space-y-8 h-full">
                {/* <!-- title-holder  --> */}
                <div class="flex justify-between items-center">
                    <a href="#" class="flex items-center"><i class="icon-back-arrow mr-4 text-2xl"></i><h1>Invoice history</h1></a>
                    <a href="#" class="btn-primary small group"><i class="icon-filter before:content-['\e904'] before:text-white before:group-hover:text-spiroDiscoBall mr-3 transition-all duration-300 inline-block"></i>Filter</a>
                </div>
                {/* <!-- main-content  --> */}
                <div class="space-y-2.5">
                    <InvoiceListItem />
                    <InvoiceListItem />
                    <InvoiceListItem />
                    <InvoiceListItem />
                    {/* <!-- advisement --> */}
                    <Advertisement />
                    <InvoiceListItem />
                    <InvoiceListItem />
                    <InvoiceListItem />
                </div>
            </div>
        </div>
    )
}

export default InvoiceHistory;
