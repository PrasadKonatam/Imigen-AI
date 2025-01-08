import React from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <motion.div
      className="flex flex-col justify-center items-center mt-12 "
      initial={{ opacity: 0.2, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="flex flex-col justify-center items-center text-center"
        initial={{ opacity: 0.2, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 1 }}
      >
        <p className="border-2 px-4 text-gray-500 py-1 rounded-full flex gap-2 ">
          Best text to image generator
          <img src={assets.star_icon} alt="star" />
        </p>
        <h1 className="text-4xl sm:text-7xl sm:max-w-[590px] m-4">
          Turn text to <span className="text-blue-500">image</span>, in seconds
        </h1>
        <p className="sm:max-w-[500px] text-center max-w-xl mt-5 mx-auto">
          Uleash your creativity with AI. Turn your imagination into visual art
          in seconds - just type, and watch the magic happen.
        </p>
        <button
          onClick={() => navigate("/result")}
          className="text-white bg-black mt-8 px-12 py-2.5 flex sm:text-lg w-auto  items-center gap-2 rounded-full"
        >
          Generate Images
          <img src={assets.star_group} alt="star-group" className="h-6 ml-2" />
        </button>
        <div className="flex gap-3 mt-16">
          {Array(6)
            .fill()
            .map((item, index) => (
              <img
                src={
                  index % 2 === 0 ? assets.sample_img_2 : assets.sample_img_1
                }
                alt=""
                key={index}
                width={70}
                className="rounded-md hover:scale-105 transition-all duration-300 cursor-pointer max-sm:w-10"
              />
            ))}
        </div>
        <p className="text-neutral-500 mt-5">Generated images from Imigen</p>
      </motion.div>
    </motion.div>
  );
};

export default Header;
