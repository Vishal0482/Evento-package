import React from "react";
import cardImage1 from "../../assest/svg/have-you-places.svg";
import cardImage2 from "../../assest/svg/personal-skills-business.svg";
import cardImage3 from "../../assest/svg/group-skils-business.svg";
import cardImage4 from "../../assest/svg/all-user.svg";
import cardImage5 from "../../assest/svg/existing-user.svg";
import SelectBusinessCard from "./SelectBusinessCard";

function SelectBusiness() {
  return (
        <div className="">
          <h3>Select Business</h3>
          <div className="flex flex-wrap justify-center pt-4 -mx-4">

            <SelectBusinessCard imageUrl={cardImage1} title={"Have you Places?"} />
            <SelectBusinessCard imageUrl={cardImage2} title={"Personal Skills Business"} />
            <SelectBusinessCard imageUrl={cardImage3} title={"Group Skils Business"} />
            <SelectBusinessCard imageUrl={cardImage4} title={"All User"} />
            <SelectBusinessCard imageUrl={cardImage5} title={"Existing User"} />

          </div>
        </div>
  );
}

export default SelectBusiness;
