import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setNumber } from '../../redux/stepProgressCount';

function StepProgressBar({eventType}) {

    const placesProgressBarList = ["Add Place","About Place","Personal Details","Photos & Videos","Add Service","Capacity", "Company Details","Terms & Conditions","Discount","Calendar"];

    const personalSkillProgressVBarList = ["Select Skill", "Personal Details", "Photos & Videos", "Equipment", "Other Cost", "Company Details", "Terms and Conditions", "Discount", "Calendar"];

    const groupSkillProgressBarList = ["Select Skill", "Personal Details", "Photos & Videos", "Add Item", "Equipment", "Other Cost", "Company Details", "Terms and Conditions", "Discount", "Calendar" ];

    const dispatch = useDispatch();
    const count = useSelector(state => state.StepProgressCount.count);
    console.log("Count", count);
    
    return (
        <div className="w-full overflow-hidden">
            <ul className="flex justify-between step-progress-holder">
                {eventType === "places" && placesProgressBarList.map((element, index) => (
                    <li className={(count>=(index+1) ? "active" : "")+" cursor-pointer"} key={index} onClick={() => dispatch(setNumber(index+1))} >
                        <div>
                            <span className={count>=(index+1) ? "active" : ""}>{index+1}</span>
                        </div>
                        <h3>{element}</h3>
                    </li>
                ))}

                {eventType === "personal_skills" && personalSkillProgressVBarList.map((element, index) => (
                    <li className={(count>=(index+1) ? "active" : "")+" cursor-pointer"} key={index} onClick={() => dispatch(setNumber(index+1))} >
                        <div>
                            <span className={count>=(index+1) ? "active" : ""}>{index+1}</span>
                        </div>
                        <h3>{element}</h3>
                    </li>
                ))}
                
                {eventType === "group_skills" && groupSkillProgressBarList.map((element, index) => (
                    <li className={(count>=(index+1) ? "active" : "")+" cursor-pointer"} key={index} onClick={() => dispatch(setNumber(index+1))} >
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
