import React from "react";
import { assets, testimonialsData } from "../assets/assets";

const Testimonials = () => {
  return (
    <div className="mt-24 ">
      <h1 className="text-3xl font-semibold text-center">
        Customer Testimonials
      </h1>
      <p className="text-gray-500 text-center">what Our users are saying</p>
      <div className=" flex flex-wrap lg:flex-row justify-center items-center mt-5 ">
        {testimonialsData.map((item, index) => (
          <div
            key={index}
            className="bg-white hover:scale-[1.02] transition-all duration-300 flex flex-col justify-center items-center m-3 text-center rounded-lg shadow-md w-[300px] p-10 mb-10"
          >
            <img className="w-14" src={item.image} alt="" />
            <h3 className="text-xl font-semibold">{item.name}</h3>
            <p className="text-sm text-gray-500">{item.role}</p>
            <div className="flex my-2">
              {Array(item.stars)
                .fill()
                .map((item, index) => (
                  <img src={assets.rating_star} alt="" />
                ))}
            </div>
            <p className="text-md w-[250px] ">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
