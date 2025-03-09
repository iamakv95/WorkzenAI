import React from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../constant";
import { Button } from "../components";
import {
  PiMagnifyingGlassLight,
  PiMapPinLight,
  PiBriefcaseLight,
  PiCaretDownLight,
  PiArrowsSplit,
} from "react-icons/pi";

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
              className="text-offwhite hover:text-white transition-all duration-200 hover:underline underline-offset-[25px] active:underline"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link to="/login" className="font-medium text-white/70 hover:text-white/90 transition-all duration-300">
          Login
        </Link>
      </div>
      <div className="border-b-2 border-offwhite/20"></div>
      <div className="container flex justify-center gap-6 py-6 flex-wrap sticky top-0 w-full">
        <div className="flex relative px-6 items-center gap-4  border-r border-offwhite/10">
          <span className="text-offwhite rounded-full p-1 border border-offwhite/40 text-[15px]">
            <PiMagnifyingGlassLight />
          </span>
          <input
            type="text"
            name="jobTitle"
            id="jobTitle"
            placeholder="Job Title"
            className="bg-transparent text-offwhite placeholder:text-offwhite focus:outline-none"
          />
          <span className="text-offwhite">
            <PiCaretDownLight />
          </span>
        </div>
        <div className="flex relative px-6 items-center gap-4  border-r border-offwhite/10">
          <span className="text-offwhite rounded-full p-1 border border-offwhite/40 text-[15px]">
            <PiBriefcaseLight />
          </span>
          <p className="text-offwhite">Selecet Experience</p>

          <span className="text-offwhite">
            <PiCaretDownLight />
          </span>
        </div>
        <div className="flex relative px-6 items-center gap-4  border-r border-offwhite/10">
          <span className="text-offwhite rounded-full p-1 border border-offwhite/40 text-[15px]">
            <PiMapPinLight />
          </span>
          <input
            type="text"
            name="workLocation"
            id="workLocation"
            placeholder="Work Location"
            className="bg-transparent text-offwhite placeholder:text-offwhite focus:outline-none"
          />
          <span className="text-offwhite">
            <PiCaretDownLight />
          </span>
        </div>
        <Button
          title="Search Job"
          containerClass="px-4 py-2 bg-offwhite"
          titleClass="text-black text-[14px]"
        />
      </div>
      <div className="border-b-2 border-offwhite/20"></div>
    </header>
  );
};

export default Header;
