import banner from "../assets/15740@2x.png";
import responsive from "../assets/responsive@2x.png";
import wordpress from "../assets/wordpress@2x.png";
import shoppingCart from "../assets/shoppingCart@2x.png";
import Laptop from "../assets/Laptop@2x.png";
import LaptopContent from "../assets/LaptopContent@2x.png";

const Banner = () => {
  return (
    <div className="flex flex-col">
      {/* Banner */}
      <div
        className="relative h-[673px] bg-cover bg-center bg-no-repeat -z-10 flex flex-col items-center
          before:content-[''] before:absolute before:top-0 before:left-0 before:h-full before:w-full before:bg-[#00000062] before:-z-10"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      >
        <h1 className="text-center text-[60px] text-white h-[82px] mt-[63px]">TRIPPRO - AN ECOMMERCE SOLUTION</h1>
        <p className="text-center text-18px text-white w-[1278px] mt-[25px] h-[73px]">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
        </p>
        <div className="flex justify-center mt-[13px]">
          <div className="flex items-center mx-[30px]">
            <div className="flex flex-col justify-center">
              <p className="text-[24px] font-bold text-white">Built for:</p>
            </div>
            <img src={responsive} alt="" className="h-[58px] ml-[20px]" />
          </div>
          <div className="w-[3px] h-[56px] bg-white"></div>
          <div className="flex items-center mx-[30px]">
            <div className="flex flex-col justify-center">
              <p className="text-[24px] text-white leading-7">Technologies:</p>
              <p className="text-[24px] font-bold text-white leading-7">Wordpress</p>
            </div>
            <img src={wordpress} alt="" className="h-[58px] ml-[12px]" />
          </div>
          <div className="w-[3px] h-[56px] bg-white"></div>
          <div className="flex items-center mx-[30px]">
            <div className="flex flex-col justify-center">
              <p className="text-[24px] text-white leading-7">Industry:</p>
              <p className="text-[24px] font-bold text-white leading-7">Ecommerce</p>
            </div>
            <img src={shoppingCart} alt="" className="h-[58px] ml-[8px]" />
          </div>
        </div>
      </div>

      {/* Laptop */}
      <div className="relative w-full self-center bottom-0 flex justify-center mt-[-280px]">
        <img src={Laptop} alt="" className="w-[850px]" />
        <img src={LaptopContent} alt="" className="absolute w-[644px] top-[28px]" />
      </div>
    </div>
  );
};

export default Banner;
