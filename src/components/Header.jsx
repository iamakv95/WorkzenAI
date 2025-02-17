import React from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../constant";
import { PiArrowsSplit } from "react-icons/pi";

const Header = () => {
  return (
    <header className="bg-black">
      <div className="container flex items-center justify-between gap-4 py-4">
        <Link to="/" className="flex items-center gap-1">
          <PiArrowsSplit className="fill-white text-[22px]" />
          <p className="text-offwhite font-semibold text-[20px]">WorkZen.ai</p>
        </Link>
        <nav className="flex space-x-6">
          {navLinks.map((link) => (
            <Link
              to={link.href}
              key={link.label}
              className="text-offwhite hover:text-white transition-all duration-200 hover:underline underline-offset-[28px] active:underline"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <p className="text-offwhite">Login</p>
      </div>
      <div className="border-b-2 border-offwhite/20"></div>
      <div className="container flex justify-between gap-6 py-6 divide-x divide-offwhite/20">
        <div className="flex relative px-6">
          <input
            type="text"
            name="jobTitle"
            id="jobTitle"
            placeholder="Job Title"
            className="bg-transparent text-offwhite placeholder:text-offwhite"
          />
        </div>
        <div className="flex relative px-6">
          <input
            type="text"
            name="jobTitle"
            id="jobTitle"
            placeholder="Job Title"
            className="bg-transparent text-offwhite placeholder:text-offwhite"
          />
        </div>
        <div className="flex relative px-6">
          <input
            type="text"
            name="workLocation"
            id="workLocation"
            placeholder="Work Location"
            className="bg-transparent text-offwhite placeholder:text-offwhite"
          />
        </div>
        <div className="flex relative px-4">
          <select className=" border-none px-4 py-2 rounded bg-transparent text-offwhite w-full border border-gray-300 focus:ring-2 focus:ring-blue-400">
            <option value="">Experience</option>
            <option value="0-1">0-1 Year</option>
            <option value="1-3">1-3 Years</option>
            <option value="3-5">3-5 Years</option>
            <option value="5+">5+ Years</option>
          </select>
        </div>
        <div className="w-1/4 flex items-center flex-col px-6">
          <label
            htmlFor="default-range"
            className="w-full flex items-center justify-between mb-2 text-sm font-medium text-gray-900 text-offwhite"
          >
            <p>Salary Range</p>
            <p>$1000-$20000</p>
          </label>
          <input
            id="default-range"
            type="range"
            value="50"
            onChange={() => {}}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 text-offwhite"
          />
        </div>
      </div>
      <div className="border-b-2 border-offwhite/20"></div>
    </header>
  );
};

export default Header;
