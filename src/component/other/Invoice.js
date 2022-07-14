import React from 'react'
import { useNavigate } from 'react-router-dom';
import Advertisement from "../Advertisement";
import InvoiceListItem from "./InvoiceListItem";

function Invoice() {
    const navigate = useNavigate();
    return (
        <div className="wrapper min-h-full">

            <div className="space-y-8 h-full">
                {/* <!-- title-holder  --> */}
                <div className="flex justify-between items-center">
                    <h1>Invoice</h1>
                    <button type="button" className="btn-primary text-base" onClick={() => navigate("/dashboard/invoice-history")}>History</button>
                </div>
                {/* <!-- main-content  --> */}
                <div className="space-y-2.5">
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
