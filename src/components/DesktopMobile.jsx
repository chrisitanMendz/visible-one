import { useState } from "react";
import arrowRight from "../assets/arrowRight@2x.png";
import left from "../assets/left@2x.png";
import right from "../assets/right@2x.png";
import desktop from "../assets/desktop@2x.png";
import smartphone from "../assets/smartphone@2x.png";
import mac from "../assets/mac.png";
import macContent from "../assets/macContent@2x.png";
import mac1 from "../assets/mac1@2x.png";
import iphone from "../assets/iphone.png";
import mobileContent from "../assets/mobileContent@2x.png";
import mobile1 from "../assets/mobile1@2x.png";
import mobile2 from "../assets/mobile2@2x.png";
import mobile3 from "../assets/mobile3@2x.png";

const DesktopMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  console.log(isMobile);

  return (
    <div className="relative mt-[59px] grid max-w-[1920px] mx-auto overflow-hidden">
      {/* Desktop */}
      <div className={`absolute flex duration-500 ${isMobile && "-translate-x-full"}`}>
        <div className="ml-[-340px] -translate-y-2">
          <img src={mac1} alt="" className="h-[360px]" />
        </div>
        <div className="relative flex justify-center">
          <img src={mac} alt="" className="h-[516px]" />
          <img src={macContent} alt="" className="absolute w-[569px] top-[23px] " />
        </div>
      </div>

      {/* Mobile */}
      <div
        className={`absolute flex items-center duration-500 bg-white ${
          !isMobile ? "-translate-x-full" : "-translate-x-[70px] "
        }`}
      >
        <div>
          <img src={mobile1} alt="" className="h-[406px]" />
        </div>
        <div>
          <img src={mobile2} alt="" className="h-[406px]" />
        </div>
        <div>
          <img src={mobile3} alt="" className="h-[406px]" />
        </div>
        <div className="relative flex justify-center">
          <img src={iphone} alt="" className="h-[516px]" />
          <img src={mobileContent} alt="" className="absolute w-[225px] top-[60px]" />
        </div>
      </div>

      {/* Text */}
      <div className="w-[1300px] justify-self-end bg-gradient-to-r from-[#3AE7AB] to-[#2DC4EA] pl-[350px]">
        <h1 className="mt-[83px] mb-[50px] text-[36px] text-white font-bold">Their Old Website & Problems</h1>
        {[0, 1, 2].map((item) => (
          <div key={item} className="flex items-center mb-[10px]">
            <img src={arrowRight} alt="" className="w-[19px] h-[13px] -translate-y-[14px]" />
            <p className="text-lg text-white max-w-[688px] ml-[13px]">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
              et dolore magna aliquyam erat, sed diam
            </p>
          </div>
        ))}
        <div className="flex mt-[33px]">
          <img src={left} alt="" className="h-[16px] mr-[20px]" />
          <img src={right} alt="" className="h-[16px]" />
        </div>

        {/* Sliding button */}
        <div
          className="relative mt-[40px] w-[231px] h-[47px] overflow-hidden rounded-full ring-1 ring-white mb-[5px] cursor-pointer"
          onClick={() => setIsMobile((prev) => !prev)}
        >
          {/* Desktop Button */}
          <div className="w-[231px] h-[47px] bg-gradient-to-r from-[#2DC4EA] to-[#3AE7AB] flex items-center rounded-full">
            <img src={desktop} alt="" className="h-[30px] ml-[20px]" />
            <p className="text-lg text-white font-bold ml-[10px]">Desktop</p>
          </div>
          {/* Mobile Button */}
          <div
            className={`absolute top-0 w-[231px] h-[47px] bg-gradient-to-r from-[#2DC4EA] to-[#3AE7AB] flex items-center duration-300 rounded-full
            ${!isMobile && "translate-x-[178px] bg-none"}`}
          >
            <div className="w-[26px] h-[26px] rounded-full bg-white ml-[16px]"></div>
            <img src={smartphone} alt="" className="h-[30px] ml-[20px]" />
            <p className="text-lg text-white font-bold ml-[10px]">Mobile</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopMobile;
