import React from 'react'
import haveYouPlacesSvg from "../../assest/svg/have-you-places.svg";
import personalSkillBuisnesSvg from "../../assest/svg/personal-skills-business.svg";
import groupSkillBuisnessSsvg from "../../assest/svg/group-skils-business.svg";
import { Link, useNavigate } from 'react-router-dom';

function SelectWhoYouAre() {
const navigate = useNavigate()

  return (
    <div className="wrapper">
            <h1>What is Your Business?</h1>
            <div className="flex flex-wrap justify-center pt-7 -mx-4">
              <Link to="event/hyp" className="w-full sm:w-1/2 xl:w-1/3 px-2 xl:px-4 pb-4 xl:pb-0 group">
                <div className="text-center bg-white rounded flex flex-col justify-between items-center h-full px-7 py-12 border-2 border-transparent group-hover:border-2 group-hover:border-spiroDiscoBall">
                  <div>
                    <img src={haveYouPlacesSvg} alt="" className="" />
                  </div>
                  <h2 className="pt-12 group-hover:text-spiroDiscoBall">Have you Places?</h2>
                </div>
              </Link>
              <Link to="event/psb" className="w-full sm:w-1/2 xl:w-1/3 px-2 xl:px-4 pb-4 xl:pb-0 group">
                <div className="text-center bg-white rounded flex flex-col justify-between items-center h-full px-7 py-12 border-2 border-transparent group-hover:border-2 group-hover:border-spiroDiscoBall">
                  <div>
                    <img src={personalSkillBuisnesSvg} alt="" className="" />
                  </div>
                  <h2 className="pt-12 group-hover:text-spiroDiscoBall">Personal Skills Business</h2>
                </div>
              </Link>
              <Link to="event/gsb" className="w-full sm:w-1/2 xl:w-1/3 px-2 xl:px-4 pb-4 xl:pb-0 group">
                <div className="text-center bg-white rounded flex flex-col justify-between items-center h-full px-7 py-12 border-2 border-transparent group-hover:border-2 group-hover:border-spiroDiscoBall">
                  <div>
                    <img src={groupSkillBuisnessSsvg} alt="" className="" />
                  </div>
                  <h2 className="pt-12 group-hover:text-spiroDiscoBall">Group Skils Business</h2>
                </div>
              </Link>
            </div>
          </div>
  )
}

export default SelectWhoYouAre
