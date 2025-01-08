import React from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.div
      className="flex  flex-col  md:flex-row justify-between mt-10 py-10 shadow-sm items-center gap-2"
      initial={{ opacity: 0.2, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <img src={assets.logo} alt="" className="w-24" />
      <p className="text-center">
        Copyright @prasadkonatam96@gmail.com | All rights reserved.
      </p>
      <div className="flex gap-2">
        <img width={30} src={assets.facebook_icon} alt="" />
        <img width={30} src={assets.instagram_icon} alt="" />

        <img width={30} src={assets.twitter_icon} alt="" />
      </div>
    </motion.div>
  );
};

export default Footer;
