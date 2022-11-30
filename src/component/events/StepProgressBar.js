import React from 'react';
import { useSelector } from 'react-redux';

function StepProgressBar({eventType}) {

    const placesProgressBarList = ["Add Place","About Place","Personal Details","Photos & Videos","Add Service","Capacity", "Company Details","Terms & Conditions","Discount","Calendar"];

    const personalSkillProgressVBarList = ["Select Skill", "Personal Details", "Photos & Videos", "Equipment", "Other Cost", "Company Details", "Terms and Conditions", "Discount", "Calendar"];

    const groupSkillProgressBarList = ["Select Skill", "Personal Details", "Photos & Videos", "Add Item", "Equipment", "Other Cost", "Company Details", "Terms and Conditions", "Discount", "Calendar" ];

    const count = useSelector(state => state.StepProgressCount.count);
    // console.log("Count", count);
    
    return (
        <div className="w-full overflow-hidden">
            <ul className="flex justify-between step-progress-holder">
                {eventType === "hyp" && placesProgressBarList.map((element, index) => (
                    <li className={count>=(index+1) ? "active" : ""} key={index}>
                        <div>
                            <span className={count>=(index+1) ? "active" : ""}>{index+1}</span>
                        </div>
                        <h3>{element}</h3>
                    </li>
                ))}

                {eventType === "psb" && personalSkillProgressVBarList.map((element, index) => (
                    <li className={count>=(index+1) ? "active" : ""} key={index}>
                        <div>
                            <span className={count>=(index+1) ? "active" : ""}>{index+1}</span>
                        </div>
                        <h3>{element}</h3>
                    </li>
                ))}
                
                {eventType === "gsb" && groupSkillProgressBarList.map((element, index) => (
                    <li className={count>=(index+1) ? "active" : ""} key={index}>
                        <div>
                            <span className={count>=(index+1) ? "active" : ""}>{index+1}</span>
                        </div>
                        <h3>{element}</h3>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default StepProgressBar
