import React, { useState } from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [user, setUser] = useState(false);
  return (
    <div className=" container flex flex-row justify-between items-center p-4">
      <div className="px-4">
        <Link to="/">
          <img src={assets.logo} alt="logo" className="w-28" />
        </Link>
      </div>

      <div className="hidden md:block">
        {user ? (
          <div className="flex justify-center items-center p-4 mt-5">
            <img src={assets.credit_star} alt="starLogo" className="w-6" />
            <p className="mr-4 ml-1 text-gray-400">Credits left : 5</p>

            <p>Hi, there</p>
            <div className="relative group mx-1">
              <img
                src={assets.profile_icon}
                alt="usericon"
                className="w-10 ml-2 drop-shadow-sm"
              />
              <div className=" absolute hidden group-hover:block">
                <button
                  className="px-2 py-1 bg-blue-500 rounded-md text-white mt-2"
                  onClick={() => setUser(!user)}
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex justify-center items-center px-4 p-4 mt-5">
            <p className="text-lg mr-1">pricing</p>
            <button
              className="bg-black text-white px-6 py-1 rounded-[30px]  mx-4"
              onClick={() => setUser(!user)}
            >
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
