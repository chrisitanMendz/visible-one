import About from "./components/About";
import Banner from "./components/Banner";
import Challenges from "./components/Challenges";
import DesktopMobile from "./components/DesktopMobile";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="pt-20">
      <Header />
      <Banner />
      <About />
      <Challenges /> {/* List of posts */}
      <DesktopMobile />
      <Footer />
    </div>
  );
};

export default App;
