import Tablet from "../assets/Tablet@2x.png";

const About = () => {
  return (
    <div className="flex justify-between mt-[126px] max-w-[1350px] mx-auto">
      {/* Text */}
      <div className="flex flex-col justify-center">
        <h1
          className="relative text-[36px] font-bold
          after:content-[''] after:absolute after:w-[152px] after:h-[3px] after:bg-[#2DC4EA] after:left-0 after:bottom-[-17px]"
        >
          ABOUT <span className="text-[#2DC4EA]">TRIPPRO</span>
        </h1>
        <p className="max-w-[665px] mt-[37px] text-lg">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
          clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
          consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
        </p>
        <button
          className="h-[74px] w-[280px] rounded-full mt-[30px] bg-gradient-to-r from-[#2DC4EA] to-[#3AE7AB]
          text-xl text-white font-bold"
        >
          TOUR TO WEBSITE
        </button>
      </div>

      {/* Tablet */}
      <div className="w-[524px] h-[524px] rounded-full grid place-items-center">
        {/* <div className="absolute w-[524px] h-[524px] rounded-full border-[5px] border-dashed border-[#EA1A25]"></div> */}
        <div
          className="absolute transform scale-[270%]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='100' ry='100' stroke='%23EA1A25FF' stroke-width='3' stroke-dasharray='50%25%2c 30%25' stroke-dashoffset='86' stroke-linecap='rounded'/%3e%3c/svg%3e")`,
            borderRadius: "100px",
            height: 200,
            width: 200,
          }}
        ></div>
        <div
          className="absolute transform scale-[230%] rotate-45"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='100' ry='100' stroke='%23EA1A25FF' stroke-width='3' stroke-dasharray='50%25%2c 30%25' stroke-dashoffset='86' stroke-linecap='rounded'/%3e%3c/svg%3e")`,
            borderRadius: "100px",
            height: 200,
            width: 200,
          }}
        ></div>
        <div
          className="absolute transform scale-[200%] rotate-90"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='100' ry='100' stroke='%23EA1A25FF' stroke-width='4' stroke-dasharray='50%25%2c 30%25' stroke-dashoffset='86' stroke-linecap='rounded'/%3e%3c/svg%3e")`,
            borderRadius: "100px",
            height: 200,
            width: 200,
          }}
        ></div>
        <img src={Tablet} alt="" className="w-[368px] z-30" />
      </div>
    </div>
  );
};

export default About;
