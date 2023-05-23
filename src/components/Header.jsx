import HeaderImage from "../assets/Header@2x.png";

const Header = () => {
  return (
    <div
      className="fixed top-0 h-20 w-full bg-cover bg-top bg-no-repeat"
      style={{
        backgroundImage: `url(${HeaderImage})`,
        zIndex: 9999999,
      }}
    ></div>
  );
};

export default Header;
