import React, { useState } from "react";
import { PiBookmarkSimple, PiBookmarkFill } from "react-icons/pi";
import { Button } from "../components";
import { Link } from "react-router-dom";

const JobCard = () => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const handleBookmark = () => {
    setIsBookmarked((prev) => !prev);
  };
  return (
    <div className="border rounded-2xl border-offwhite/20 p-2 flex-1 ">
      <div className="bg-darkGray p-6 rounded-2xl min-h-[300px]">
        <div className="flex justify-between items-center gap-2 mb-4">
          <Button
            title="20 July, 2024"
            containerClass="px-3 py-1 border-offwhite bg-offwhite cursor-default"
            titleClass="text-darkGray text-[12px]"
          />
          <div
            onClick={handleBookmark}
            className="rounded-full border border-offwhite bg-offwhite p-1 cursor-pointer"
          >
            {isBookmarked ? <PiBookmarkFill /> : <PiBookmarkSimple />}
          </div>
        </div>
        <h4 className="text-offwhite/80 mb-1 text-[12px]">Amazon</h4>
        <Link to="/jobs/1" className="text-white text-[20px] leading-7">
          Senior Product & Brand Design
        </Link>
        <div className="flex flex-wrap gap-2 mt-4">
          <div className="rounded-full border border-offwhite/20 bg-darkgray text-offwhite px-4 py-1 text-[12px]">
            Part time
          </div>

          <div className="rounded-full border border-offwhite/20 bg-darkgray text-offwhite px-4 py-1 text-[12px]">
            Senior
          </div>
          <div className="rounded-full border border-offwhite/20 bg-darkgray text-offwhite px-4 py-1 text-[12px]">
            Remote
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center px-6 py-4">
        <div className="text-left">
          <p className="text-white text-[14px]">$250/month</p>
          <p className="text-offwhite/90 text-[12px]">New yourk, USA</p>
        </div>
        <Button
          title="Job Details"
          containerClass="px-4 py-2 bg-offwhite"
          titleClass="text-black text-[14px]"
        />
      </div>
    </div>
  );
};

export default JobCard;
