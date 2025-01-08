import React from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";

const GenerateBtn = () => {
  return (
    <motion.div
      className="text-center flex flex-col justify-center items-center mt-16"
      initial={{ opacity: 0.2, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h1 className="text-4xl font-semibold text-neutral-800">
        See the magic. Try now
      </h1>
      <button className="text-white bg-black mt-8 px-12 py-2.5 flex sm:text-lg w-auto  items-center gap-2 rounded-full mb-9">
        Generate Images
        <img src={assets.star_group} alt="star-group" className="h-6 ml-2" />
      </button>
    </motion.div>
  );
};

export default GenerateBtn;
