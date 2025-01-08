import React from "react";
import { stepsData } from "../assets/assets";
import { motion } from "framer-motion";

const Steps = () => {
  return (
    <motion.div
      className="mt-20 flex justify-center items-center"
      initial={{ opacity: 0.2, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="">
        <h1 className="text-3xl sm:text-4xl font-semibold text-center">
          How it works
        </h1>
        <p className="text-center mb-8 text-lg text-gray-600">
          Transform words into stunning images
        </p>
        {stepsData.map((item, index) => (
          <div
            key={index}
            className="flex gap-5 m-6  text-sm shadow-md p-3 rounded-md md:w-full border bg-white/20 hover:scale-[1.02] transition-all duration-300"
          >
            <img src={item.icon} alt="" width={40} />
            <div>
              <h2 className="text-xl font-medium">{item.title}</h2>
              <p className="text-gray-500">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Steps;
