import React from 'react'
import { useSelector } from 'react-redux'


function StepProgressBar() {
    const placesProgressBarList = ["Add Place", "About Place", "Personal Details", "Photos & Videos", "Add Service", "Capacity", "Company Details", "Terms & Conditions", "Discount", "Calendar"];
    const count = useSelector(state => state.stepCountPogress.count);
    return (
        // <div className="w-full overflow-hidden">
        //     <ul className="flex justify-between step-progress-holder">
        //         <li>
        //             <div>
        //                 <span>01</span>
        //             </div>
        //             <h3>Add Place</h3>
        //         </li>
        //         <li>
        //             <div>
        //                 <span>02</span>
        //             </div>
        //             <h3>about place</h3>
        //         </li>
        //         <li>
        //             <div>
        //                 <span>03</span>
        //             </div>
        //             <h3>personal details</h3>
        //         </li>
        //         <li>
        //             <div>
        //                 <span>04</span>
        //             </div>
        //             <h3>Photos & videos</h3>
        //         </li>
        //         <li>
        //             <div>
        //                 <span>05</span>
        //             </div>
        //             <h3>add service</h3>
        //         </li>
        //         <li>
        //             <div>
        //                 <span>06</span>
        //             </div>
        //             <h3>capacity</h3>
        //         </li>
        //         <li>
        //             <div>
        //                 <span>07</span>
        //             </div>
        //             <h3>company details</h3>
        //         </li>
        //         <li>
        //             <div>
        //                 <span>08</span>
        //             </div>
        //             <h3>Terms & Conditions</h3>
        //         </li>
        //         <li>
        //             <div>
        //                 <span>09</span>
        //             </div>
        //             <h3>Discount</h3>
        //         </li>
        //         <li>
        //             <div>
        //                 <span>10</span>
        //             </div>
        //             <h3>Calendar</h3>
        //         </li>
        //     </ul>
        // </div>

        <div className="w-full overflow-hidden">
            <ul className="flex justify-between step-progress-holder">
                {placesProgressBarList.map((element, index) => (
                    <li className={count >= (index + 1) ? "active" : ""} key={index}>
                        <div>
                            <span className={count >= (index + 1) ? "active" : ""}>{index + 1}</span>
                        </div>
                        <h3>{element}</h3>
                    </li>
                ))}
            </ul>
        </div>

    )
}

export default StepProgressBar
