import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container flex items-center justify-between gap-4">
        <Link to="/">
          <img src="/src/assets/react.svg" alt="logo" />
        </Link>
        <nav className="flex space-x-6">
          <p>Home</p>
          <p>Job Find</p>
          <p>Blogs</p>
          <p>Faqs</p>
          <p>Contact Us</p>
        </nav>
        <p>Login</p>
      </div>
      <div className="container flex justify-between gap-6">
        <div className="flex relative">
          <input
            type="text"
            name="jobTitle"
            id="jobTitle"
            placeholder="Job Title"
          />
        </div>
        <div className="flex relative">
          <input
            type="text"
            name="jobTitle"
            id="jobTitle"
            placeholder="Job Title"
          />
        </div>
        <div className="flex relative">
          <input
            type="text"
            name="workLocation"
            id="workLocation"
            placeholder="Work Location"
          />
        </div>
        <div className="flex relative">
          <select
            value=""
            onChange={(e) => e.target.value}
            className="w-1/4 px-4 py-2 rounded bg-white text-black border border-gray-300 focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Experience</option>
            <option value="0-1">0-1 Year</option>
            <option value="1-3">1-3 Years</option>
            <option value="3-5">3-5 Years</option>
            <option value="5+">5+ Years</option>
          </select>
        </div>
        <div className="w-1/4 flex items-center">
          <input
            type="range"
            min="20000"
            max="200000"
            step="5000"
            value=""
            onChange={(e) => e.target.value}
            className="w-full cursor-pointer"
          />
          <span className="ml-2 text-white">salary</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
