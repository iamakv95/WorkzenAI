import React, { useState } from "react";
import { JobCard } from "../components";
import { bg } from "../assets/index"
import { PiArrowArcLeft, PiArrowArcRight, PiHeart, PiHeartFill } from "react-icons/pi";

const JobDetails = () => {
  const [isWishListed, setIsWishListed] = useState(false);
  const handleWishlist = () => {
    setIsWishListed((prev) => !prev)
  }
  return (
    <section className="bg-black w-full py-24">
      <div className="container flex gap-10">
        <div className="w-1/4 px-4">
          <div className="border rounded-2xl border-offwhite/20 p-2 flex-1">
            <div className="bg-darkGray p-6 rounded-2xl min-h-[300px] flex items-center justify-center flex-col gap-6 "
              style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover", backgroundPosition: "center", backgroundBlendMode: "color-burn" }}>
              <h3 className="text-offwhite text-[20px] text-center">
                Get your resume with our Resume AI service
              </h3>
              <button className="bg-offwhite text-black rounded-full px-6 py-2">
                <span className="font-medium"> More Details</span>
              </button>
            </div>
          </div>
        </div>

        <div className="w-3/4">
          <div className="w-full">
            <div className="border-b border-offwhite/10 pb-4 flex justify-between">
              <div>
                <h2 className="text-white text-[25px]">
                  Senior Product & Brand Design
                </h2>
                <p className="text-offwhite/80 my-2">
                  18 Jul 2022 by <span className="text-offwhite">Adobe</span>
                </p>
              </div>
              <button onClick={handleWishlist}>
                {!isWishListed ? (
                  <PiHeart className="text-offwhite/80 text-2xl" />
                ) : (
                  <PiHeartFill className="text-offwhite/80 text-2xl" />
                )}
              </button>
            </div>
            <div className="w-full pt-4">
              <h5 className="text-white/90 mt-4">Overview</h5>
              <p className="text-offwhite py-2">
                When team members told us they needed more flexibility around
                where and how they worked, we acted, creating two options to
                accommodate two different styles of work. One non-negotiable
                principle along the way? We had to retain our deep culture of
                collaboration, both among ourselves and with our clients.
                Introducing Work From Near and Work From Anywhere at WillowTree.
              </p>
              <h5 className="text-white/90 mt-4">Overview</h5>
              <p className="text-offwhite py-2">
                When team members told us they needed more flexibility around
                where and how they worked, we acted, creating two options to
                accommodate two different styles of work. One non-negotiable
                principle along the way? We had to retain our deep culture of
                collaboration, both among ourselves and with our clients.
                Introducing Work From Near and Work From Anywhere at WillowTree.
              </p>
            </div>
          </div>
          <div className="mt-20 w-full">
            <div className="flex items-center justify-between">
              <h3 className="text-offwhite/90 text-xl font-medium">Related Jobs</h3>
              <div className=" flex items-center gap-6 pr-2">
                <PiArrowArcLeft className="text-white/70 hover:text-white text-2xl font-bold border rounded-full p-1 cursor-pointer" />
                <PiArrowArcRight className="text-white/70 hover:text-white text-2xl font-bold border rounded-full p-1 cursor-pointer" />
              </div>
            </div>
            <div className="flex justify-between gap-6 mt-8">
              <JobCard />
              <JobCard />
              <JobCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobDetails;
