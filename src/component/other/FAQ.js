import React, { useState } from 'react'
import Advertisement from '../Advertisement';

function FAQ() {
    const [isopen, setIsOpen] = useState()
    return (
        <div class="wrapper min-h-full">
            <div class="space-y-7 h-full">
                {/* <!-- title-holder  --> */}
                <div class="w-full space-y-7">
                    <h1>FAQ</h1>
                    <div class="Accordions w-full space-y-5">
                        <div class="Accordion_item">
                            <h3 class="title_tab">What is the meaning of Lorem ipsum?<span>
                                <i class="icon-plus"></i>
                                <i class="icon-minus text-[3px]"></i>
                            </span>
                            </h3>
                            <div class="inner_content" style={{display: 'none'}}>
                                <p>You can create a new account at the end of the order process or on the following page: Create new account. You can view all of your orders and subscriptions in your customer account. You can also change your addresses and your password.</p>
                            </div>
                        </div>
                        <div class="Accordion_item">
                            <h3 class="title_tab active">Where on your website can I open a customer account?<span>
                                <i class="icon-plus"></i>
                                <i class="icon-minus text-[3px]"></i>
                            </span>
                            </h3>
                            <div class="inner_content" style={{display: 'none'}}>
                                <p>You can create a new account at the end of the order process or on the following page: Create new account. You can view all of your orders and subscriptions in your customer account. You can also change your addresses and your password.</p>
                            </div>
                        </div>
                        <div class="Accordion_item">
                            <h3 class="title_tab">Do I need to create an account to make an order?<span>
                                <i class="icon-plus"></i>
                                <i class="icon-minus text-[3px]"></i>
                            </span>
                            </h3>
                            <div class="inner_content" style={{display: 'none'}}>
                                <p>You can create a new account at the end of the order process or on the following page: Create new account. You can view all of your orders and subscriptions in your customer account. You can also change your addresses and your password.</p>
                            </div>
                        </div>
                        <div class="Accordion_item">
                            <h3 class="title_tab">Why do the prices in the shop sometimes change?<span>
                                <i class="icon-plus"></i>
                                <i class="icon-minus text-[3px]"></i>
                            </span>
                            </h3>
                            <div class="inner_content" style={{display: 'none'}}>
                                <p>You can create a new account at the end of the order process or on the following page: Create new account. You can view all of your orders and subscriptions in your customer account. You can also change your addresses and your password.</p>
                            </div>
                        </div>
                        <div class="Accordion_item">
                            <h3 class="title_tab">Do you also sell magazines that have been financed by crowdfunding?<span>
                                <i class="icon-plus"></i>
                                <i class="icon-minus text-[3px]"></i>
                            </span>
                            </h3>
                            <div class="inner_content" style={{display: 'none'}}>
                                <p>You can create a new account at the end of the order process or on the following page: Create new account. You can view all of your orders and subscriptions in your customer account. You can also change your addresses and your password.</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- advisement --> */}
                <Advertisement />
            </div>
        </div>
    )
}

export default FAQ;
