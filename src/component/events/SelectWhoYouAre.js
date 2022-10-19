import React from 'react'
import haveYouPlacesSvg from "../../assest/svg/have-you-places.svg";
import personalSkillBuisnesSvg from "../../assest/svg/personal-skills-business.svg";
import groupSkillBuisnessSsvg from "../../assest/svg/group-skils-business.svg";
import { useNavigate } from 'react-router-dom';

function SelectWhoYouAre() {
const navigate = useNavigate()

  return (
    <div className="wrapper">
            <h1>What is Your Business?</h1>
            <div className="flex flex-wrap justify-center pt-7 -mx-4">
              <div className="w-full sm:w-1/2 xl:w-1/3 px-2 xl:px-4 pb-4 xl:pb-0 group" onClick={() => navigate("/dashboard/event/places")}>
                <a href="#" className="text-center bg-white rounded flex flex-col justify-between items-center h-full px-7 py-12 border-2 border-transparent group-hover:border-2 group-hover:border-spiroDiscoBall">
                  <div className="">
                    <img src={haveYouPlacesSvg} alt="" className="" />
                  </div>
                  <h2 className="pt-12 group-hover:text-spiroDiscoBall">Have you Places?</h2>
                </a>
              </div>
              <div className="w-full sm:w-1/2 xl:w-1/3 px-2 xl:px-4 pb-4 xl:pb-0 group" onClick={() => navigate("/dashboard/event/personal_skills")}>
                <a href="#" className="text-center bg-white rounded flex flex-col justify-between items-center h-full px-7 py-12 border-2 border-transparent group-hover:border-2 group-hover:border-spiroDiscoBall">
                  <div className="">
                    <img src={personalSkillBuisnesSvg} alt="" className="" />
                  </div>
                  <h2 className="pt-12 group-hover:text-spiroDiscoBall">Personal Skills Business</h2>
                </a>
              </div>
              <div className="w-full sm:w-1/2 xl:w-1/3 px-2 xl:px-4 pb-4 xl:pb-0 group" onClick={() => navigate("/dashboard/event/group_skills")}>
                <a href="#" className="text-center bg-white rounded flex flex-col justify-between items-center h-full px-7 py-12 border-2 border-transparent group-hover:border-2 group-hover:border-spiroDiscoBall">
                  <div className="">
                    <img src={groupSkillBuisnessSsvg} alt="" className="" />
                  </div>
                  <h2 className="pt-12 group-hover:text-spiroDiscoBall">Group Skils Business</h2>
                </a>
              </div>
            </div>
          </div>
  )
}

export default SelectWhoYouAre
