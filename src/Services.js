import React from "react"
import "./output.css"
import { FaPlus } from "react-icons/fa";
import pic1 from './pic1.jpeg';



export default function MySpecialties() {
  return (
    <div className=" w-[1635px] h-[960px] pl-[115px] pr-[285px] pt-20 pb-[92px] box-border  bg-[rgba(255,255,255,1)]">
      <div className=" flex flex-col justify-between h-[100%] box-border">
        <div className=" flex flex-col justify-start items-start gap-4 w-[undefinedundefined] box-border">
          <p className="  border-[#141313ff] text-lg  leading-[133%]  font-ibm plex sans  font-[400]">
            Service
          </p>
          <p className="  border-[#141313ff] text-5xl  leading-[117%]  font-ibm plex sans  font-[700] uppercase">
            My Specialties
          </p>
        </div>
        <div className=" flex flex-col w-[100%] box-border">
          <div className=" flex flex-row w-[100%] pb-6 box-border">
            <p className="  border-[#141313ff]  text-[32px]  leading-[150%]  font-ibm plex sans  font-[700] uppercase">
            • Web Design
            </p>
            <p className="  border-[#141313cc] text-base  leading-[175%]  font-ibm plex sans  font-[400]">
              You can customize a template or make your own from scratch, with
              an immersive library at your disposal. You can customize a
              template
            </p>
            <FaPlus />

          </div>
          <div className=" flex flex-row w-[100%] pb-6 box-border">
            <p className="  border-[#141313ff]  text-[32px]  leading-[150%]  font-ibm plex sans  font-[700] uppercase">
            • UI/UX Design
            </p>
            <p className="  border-[#141313cc] text-base  leading-[175%]  font-ibm plex sans  font-[400]">
              You can customize a template or make your own from scratch, with
              an immersive library at your disposal. You can customize a
              template
            </p>
            <FaPlus />

          </div>
          <div className=" relative w-[100%] h-[284px] box-border">
            <p className=" absolute top-[212px] left-[575px]  border-[#141313cc] text-base  leading-[150%]  font-ibm plex sans  font-[400]">
              You can customize a template or make your own from scratch, with
              an immersive library at your disposal. You can customize a
              template
            </p>
            <div className=" absolute flex flex-row justify-between w-[100%] h-12 box-border">
              <p className="  bg-[ linear-gradient(-89.66deg, rgba(255,177,71,1) 0%, rgba(255,108,99,1) 52%, rgba(184,106,223,1) 100%) ]  text-[32px]  leading-[150%]  font-ibm plex sans  font-[700] uppercase">
              •  Mobile Application
              </p>
              <FaPlus/>
              <img 
                          src={pic1}
                          alt="Not Found"
                        />

            </div>
          </div>
          <div className=" flex flex-row w-[100%] pb-6 box-border">
            <p className="  border-[#141313ff]  text-[32px]  leading-[150%]  font-ibm plex sans  font-[700] uppercase">
            • User research
            </p>
            <p className="  border-[#141313cc] text-base  leading-[175%]  font-ibm plex sans  font-[400]">
              You can customize a template or make your own from scratch, with
              an immersive library at your disposal. You can customize a
              template
            </p>
            <FaPlus />

          </div>
        </div>
      </div>
    </div>
  )
}
