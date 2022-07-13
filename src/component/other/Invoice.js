import React from 'react'
import { useNavigate } from 'react-router-dom';
import Advertisement from "../Advertisement";
import InvoiceListItem from "./InvoiceListItem";

function Invoice() {
    const navigate = useNavigate();
    return (
        <div class="wrapper min-h-full">

            <div class="space-y-8 h-full">
                {/* <!-- title-holder  --> */}
                <div class="flex justify-between items-center">
                    <h1>Invoice</h1>
                    <button type="button" class="btn-primary text-base" onClick={() => navigate("/dashboard/invoice-history")}>History</button>
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

export default Invoice;
