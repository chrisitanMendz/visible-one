import { useEffect, useState } from "react";
import Axios from "axios";
import rubiks from "../assets/rubiks@2x.png";

const Challenges = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const fetch = await Axios.get("https://jsonplaceholder.typicode.com/posts");
    setPosts(fetch.data);
  };

  console.log(posts);

  return (
    <div className="flex relative justify-between items-center mt-[87px] max-w-[1350px] mx-auto">
      {/* Rubiks Image */}
      <div className="absolute -translate-x-[110px]">
        <img src={rubiks} alt="" className="w-[738px]" />
      </div>

      {/* Text */}
      <div className="ml-[50%]">
        <h1 className="relative text-[36px] font-bold mb-[47px]">
          OUR <span className="text-[#2DC4EA]">CHALLENGES</span>
        </h1>
        <ul>
          {posts.map(
            (item, index) =>
              index < 5 && (
                <li
                  key={item.id}
                  className={`h-[76px] flex items-center pl-[22px] shadow-xl mb-[34px] 
                  ${index === 0 && "bg-gradient-to-r from-[#2DC4EA] to-[#3AE7AB]"}`}
                >
                  <p
                    className={`text-[40px] font-bold text-[#2DC4EA]
                    ${index === 0 && "text-[#ffffff7e]"}`}
                  >{`0${item.id}`}</p>
                  <p className={`text-lg ml-[19px] ${index === 0 && "text-white"}`}>{item.title}</p>
                </li>
              )
          )}
        </ul>
        <button
          className="h-[74px] w-[215px] rounded-full mt-[30px] bg-gradient-to-r from-[#2DC4EA] to-[#3AE7AB]
          text-xl text-white font-bold"
        >
          VIEW MORE
        </button>
      </div>
    </div>
  );
};

export default Challenges;
