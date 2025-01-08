import React from "react";
import { assets } from "../assets/assets";

const Description = () => {
  return (
    <div className="flex flex-col mt-10 mb-5 ">
      <h1 className="text-center text-3lx font-semibold sm:text-4xl">
        Create AI Images
      </h1>
      <p className="text-center mb-5 text-gray-500">
        Turn your imagination into visuals
      </p>

      <div className="flex flex-col md:flex-row justify-center items-center gap-10 mt-4">
        <img src={assets.sample_img_1} alt="" className="w-80 xl:w-96" />

        <div className=" flex flex-col justify-center gap-5">
          <h1 className="text-2xl font-semibold md:w-[450px]">
            Introducing the Al-Powered Text to Image Generator
          </h1>
          <p className="text-md text-gray-500  ">
            Easily bring your ideas to life with our free Al image generator.
            Whether you need stunning visuals or unique imagery, our tool
            transforms your text into eye-catching images with just a few
            clicks. Imagine it, describe it, and watch it come to life
            instantly.
          </p>
          <p className="text-gray-500 ">
            Simply type in a text prompt, and our cutting-edge Al will generate
            high-quality images in seconds. From product visuals to character
            designs and portraits, even concepts that don't yet exist can be
            visualized effortlessly. Powered by advanced Al technology, the
            creative possibilities are limitless!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Description;
