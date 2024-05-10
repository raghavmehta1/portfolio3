import React from "react"
import "./output.css"
import aboutpage from'./aboutpage.png';
import { CiLink } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { IoMdContact } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";

export default function WelcomeTo() {
  return (
    <div className=" w-[1635px] h-[910px] pl-[115px] pr-[285px] pt-[100px] pb-[60px] box-border  bg-[rgba(255,255,255,1)]">
      <div className=" flex flex-col justify-between h-[100%] box-border">
        <div className=" flex flex-col justify-start items-start gap-4 w-[undefinedundefined] box-border">
          <p className="  border-[#141313ff] text-lg  leading-[133%]  font-ibm plex sans  font-[400]">
            Nice to meet you!
          </p>
          <p className="  border-[#ffffff] text-5xl  leading-[117%]  font-ibm plex sans  font-[700] uppercase">
            Welcome to...
          </p>
        </div>
        <div className=" flex flex-row w-[100%] box-border">
          <div className=" flex flex-col h-[100%] box-border">
            <img
              src={aboutpage}
              alt="Not Found"
              className=" w-[100%] h-[410px]"
            />
            <div className=" flex flex-col justify-start items-center gap-4 w-[100%] box-border">
              <div className=" flex flex-col justify-start items-start gap-3 w-[100%] box-border">
                <p className=" flex flex-col justify-center  bg-[ linear-gradient(-89.57deg, rgba(255,177,71,1) 0%, rgba(255,108,99,1) 52%, rgba(184,106,223,1) 100%) ] text-5xl  leading-[100%]  font-ibm plex sans  font-[700] text-center  tracking-[-2.4px] uppercase">
                  Jacob Jones
                </p>
                <p className=" flex flex-col justify-center  border-[#141313ff] text-2xl  leading-[133%]  font-ibm plex sans  font-[400] text-center  tracking-[-0.72px]">
                  Product Designer based in London
                </p>
              </div>
              <div className=" w-[undefinedundefined] h-14 box-border">
                <div className=" flex flex-row justify-center items-center gap-2 w-[100%] h-[100%] px-[37.83px] py-[15.83px] box-border  bg-[rgba(255,255,255,1)]">
                  <p className="  border-[#141313ff] text-lg  leading-[133%]  font-ibm plex sans  font-[500] underline">
                    Download CV
                  </p>
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/mnsdz5gzdc-1%3A413?alt=media&token=0c7d445d-a8ea-4eda-b5a9-876ad223515f"
                    alt="Not Found"
                    className=" w-6 h-6"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className=" flex flex-col h-[undefinedundefined] box-border">
            <div className=" flex flex-col w-[100%] pr-[93px] pb-8 box-border">
              <div className=" flex flex-row w-[undefinedundefined] box-border">
                <div className=" flex flex-row justify-start items-center gap-3 h-[100%] box-border">
                <CiLink />

                  <p className="  border-[#141313ff] text-lg  leading-[133%]  font-ibm plex sans  font-[400]">
                    +77 022 444 05 05
                  </p>
                </div>
                <div className=" flex flex-row justify-start items-center gap-3 h-[100%] box-border">
                <IoMdContact />

                  <p className="  border-[#141313ff] text-lg  leading-[133%]  font-ibm plex sans  font-[400]">
                    25 yrs
                  </p>
                </div>
              </div>
              <div className=" flex flex-row w-[undefinedundefined] box-border">
                <div className=" flex flex-row justify-start items-center gap-3 h-[100%] box-border">
                <CiMail />
                  <p className="  border-[#141313ff] text-lg  leading-[133%]  font-ibm plex sans  font-[400]">
                    jacob360@gmail.com
                  </p>
                </div>
                <div className=" flex flex-row justify-start items-center gap-3 h-[100%] box-border">
            <CiLocationOn />

                  <p className="  border-[#141313ff] text-lg  leading-[133%]  font-ibm plex sans  font-[400]">
                    United kingdom, London
                  </p>
                </div>
              </div>
            </div>
            <div className=" flex flex-row w-[100%] box-border">
              <div className=" flex flex-col justify-start items-start gap-5 h-[undefinedundefined] box-border">
                <div className=" flex flex-row justify-start items-center gap-3 w-[100%] box-border">
                  <p className=" flex flex-col justify-center  bg-[ linear-gradient(-88.38deg, rgba(255,177,71,1) 0%, rgba(255,108,99,1) 52%, rgba(184,106,223,1) 100%) ] text-5xl  leading-[100%]  font-ibm plex sans  font-[700] text-center  tracking-[-2.4px] uppercase">
                    10+
                  </p>
                  <p className="  border-[#141313ff] text-lg  leading-[111%]  font-ibm plex sans  font-[400]">
                    Years experience...
                  </p>
                </div>
                <p className="  border-[#141313ff] text-lg  leading-[133%]  font-ibm plex sans  font-[400]">
                  Hello there! My name is Jacob Jones. I am a web designer &
                  developer, and I'm very passionate and dedicated to my work.
                </p>
              </div>
              <div className=" flex flex-col justify-start items-start gap-5 h-[100%] box-border">
                <div className=" flex flex-row justify-start items-center gap-3 w-[100%] box-border">
                  <p className=" flex flex-col justify-center  bg-[ linear-gradient(-87.64deg, rgba(255,177,71,1) 0%, rgba(255,108,99,1) 52%, rgba(184,106,223,1) 100%) ] text-5xl  leading-[100%]  font-ibm plex sans  font-[700] text-center  tracking-[-2.4px] uppercase">
                    14
                  </p>
                  <p className="  border-[#141313ff] text-lg  leading-[111%]  font-ibm plex sans  font-[400]">
                    Clients Worldwide...
                  </p>
                </div>
                <p className="  border-[#141313ff] text-lg  leading-[133%]  font-ibm plex sans  font-[400]">
                  With 10+ years experience as a professional a graphic
                  designer, I have acquired the skills and knowledge necessary
                  to make your project a success.
                </p>
              </div>
            </div>
            <div className=" w-[100%] h-36 p-10 box-border  bg-[rgba(20,19,19,1)]">
              <div className=" flex flex-row justify-start items-start gap-3 w-[100%] h-[100%] box-border">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/mnsdz5gzdc-1%3A455?alt=media&token=954069ba-4187-4519-974b-e1c6689e1b3a"
                  alt="Not Found"
                  className=" w-16 h-[100%] opacity-20"
                />
                <p className="  border-[#000000] text-xl  leading-[160%]  font-ibm plex sans  font-[400] text-white">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Faucibus sed sit ultrices et sed metus sollicitudin.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
