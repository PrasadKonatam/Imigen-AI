import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="flex sm:flex-col justify-between mt-10 py-10 shadow-sm items-center">
      <img src={assets.logo} alt="" className="w-24" />
      <p>Copyright @prasadkonatam96@gmail.com | All rights reserved.</p>
      <div className="flex gap-2">
        <img width={30} src={assets.facebook_icon} alt="" />
        <img width={30} src={assets.instagram_icon} alt="" />

        <img width={30} src={assets.twitter_icon} alt="" />
      </div>
    </div>
  );
};

export default Footer;
