import React from "react";
import { assets } from "../assets/assets";

const GenerateBtn = () => {
  return (
    <div className="text-center flex flex-col justify-center items-center mt-16">
      <h1 className="text-4xl font-semibold text-neutral-800">
        See the magic. Try now
      </h1>
      <button className="text-white bg-black mt-8 px-12 py-2.5 flex sm:text-lg w-auto  items-center gap-2 rounded-full mb-9">
        Generate Images
        <img src={assets.star_group} alt="star-group" className="h-6 ml-2" />
      </button>
    </div>
  );
};

export default GenerateBtn;
