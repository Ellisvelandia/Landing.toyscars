import React, { useState } from "react";
import wall from "../assets/wall.jfif";
import car1 from "../assets/car1.png";
import car2 from "../assets/car2.png";
import car3 from "../assets/car3.png";
import ToyCard from "../components/ToyCard";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { RiMenuUnfoldLine } from "react-icons/ri";
import { useMediaQuery, useTheme } from "@mui/material";
const toycars = [
  { id: 1, url: car1 },
  { id: 2, url: car2 },
  { id: 3, url: car3 },
  { id: 4, url: car1 },
  { id: 5, url: car2 },
  { id: 6, url: car3 },
];

const ToyLanding = () => {
  let theme = useTheme();
  let ismatch = useMediaQuery(theme.breakpoints.down("md"));

  const [menuOption, setMenuOption] = useState(false);

  const onMenuClick = () => {
    setMenuOption(!menuOption);
  };

  const onLeftClick = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 300;
  };

  const onRightClick = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 300;
  };

  const Drawer = (
    <div className="relative">
      <div className="bg-[#f6b83d] rounded-xl p-2 m-2 ">
        <RiMenuUnfoldLine
          size={32}
          className="text-white"
          onClick={onMenuClick}
        />
      </div>
      {menuOption && (
        <div className="absolute bg-[#fcdda074] top-12 right-1 p-2 rounded-lg max-sm:bg-[#fcdd40f4]">
          <ul className="w-40 h-full">
            <li className="p-2 text-white font-bold hover:bg-[#f6b83d] rounded-lg">
              Home
            </li>
            <li className="p-2 text-white font-bold hover:bg-[#f6b83d] rounded-lg">
              Products
            </li>
            <li className="p-2 text-white font-bold hover:bg-[#f6b83d] rounded-lg">
              About Us
            </li>
            <li className="p-2 text-white font-bold hover:bg-[#f6b83d] rounded-lg">
              Contact Us
            </li>
            <div></div>
            <li className="p-2 text-white font-bold hover:bg-[#f6b83d] rounded-lg">
              Login
            </li>
            <li className="p-2 text-white font-bold hover:bg-[#f6b83d] rounded-lg">
              Sing Up
            </li>
          </ul>
        </div>
      )}
    </div>
  );

  return (
    <div className="w-screen h-[120vh] bg-[#10151c]">
      <div className="w-[95%] h-full bg-gradient-to-br from-[#413a33] to-[#615032c] flex flex-row justify-around">
        <div className="w-[85%] h-full bg-[#caa463] flex flex-col items-center justify-center">
          <div className="w-[80%] h-[95%] bg-gray-200 rounded-1xl flex flex-col">
            <div
              className="w-full flex-grow rounded-t-2xl"
              style={{
                backgroundImage: `url(${wall})`,
                backgroundSize: "cover",
              }}
            >
              {ismatch ? (
                <>{Drawer}</>
              ) : (
                <>
                  <div className="flex flex-row-reverse items-center gap-3 p-2 relative">
                    <div className="bg-inherit px-4 py-2 border-[#f6b83d] border-2 rounded-full">
                      <button className="text-[#f6b83d] font-bold">
                        Sing Up
                      </button>
                    </div>
                    <div className="bg-[#f6b83d] px-4 py-2 rounded-full">
                      <button className="text-white font-bold">Login</button>
                    </div>
                    <div className="px-2">
                      <button className="text-white font-bold">
                        Contact Us
                      </button>
                    </div>
                    <div className="px-2">
                      <button className="text-white font-bold">About Us</button>
                    </div>
                    <div className="px-2">
                      <button className="text-white font-bold">Products</button>
                    </div>
                    <div className="px-2">
                      <button className="text-white font-bold">Home</button>
                    </div>
                  </div>
                </>
              )}

              <div className="flex justify-center sm:justify-start w-full">
                <div className="p-4 m-4 w-[40%] max-sm:w-full">
                  <p className="text-3xl text-[#f8734c] font-extrabold max-sm:text-center">
                    Rally Cars
                  </p>
                  <p className="text-xl text-[#f0d2c3] font-extrabold max-sm:text-center">
                    On the way
                  </p>
                  <p className="text-[#f6b83d] py-2 font-bold max-sm:text-center">
                    Beatiful Cars
                  </p>
                  <p className="max-sm:text-center text-white font-bold">
                    Matchbox has inspired generations of kids to unleash their
                    imaginations! Treat your young driver to a collection of
                    die-cast cars, Action Drivers playsets, oversized vehicles &
                    more.
                  </p>
                  <button className="bg-[#f6b83d] px-3 py-2 my-4 rounded-full mas-sm:text-center mas-sm:w-full text-zinc-100 font-extrabold">
                    Go to store
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full h-[35%] bg-[#29292d] rounded-b-2xl flex relative items-center space-x-2">
              <div className="rounded-full cursor-pointer bg-[#404144] py-2">
                <SlArrowLeft
                  size={32}
                  className="opacity-50 hover:opacity-100"
                  style={{ color: "white" }}
                  onClick={onLeftClick}
                />
              </div>
              <div
                id="slider"
                className="flex flex-row overflow-x-hidden whitespace-nowrap scroll-smooth"
              >
                {toycars.map((item, id) => {
                  return <ToyCard key={id} img={item.url} />;
                })}
              </div>
              <div className="rounded-full cursor-pointer bg-[#404144] py-2">
                <SlArrowRight
                  size={32}
                  className="opacity-50 hover:opacity-100"
                  style={{ color: "white" }}
                  onClick={onRightClick}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyLanding;
