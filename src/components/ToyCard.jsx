import React from "react";

const ToyCard = ({ img }) => {
  return (
    <div className="flex flex-col p-2">
      <div className="w-full bg-[#404144] rounded-lg flex-grow flex flex-col items-center justify-center p-4">
        <img src={img} alt="carstoys/img" className="h-20 w-32" />
      </div>
      <div className="w-full flex p-2 space-x-2">
        <div className="rounded-full bg-[#1a1a1d] px-2">
          <button className="p-2 text-gray-100">Buy now</button>
        </div>
        <div className="rounded-full bg-[#f6b83d] px-2">
          <button className="p-2 text-gray-100">Add to Car</button>
        </div>
      </div>
    </div>
  );
};

export default ToyCard;
