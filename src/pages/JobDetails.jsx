import React from "react";
import { JobCard } from "../components";

const JobDetails = () => {
  return (
    <section className="bg-black w-full py-24">
      <div className="container flex gap-10">
        {/* Sidebar */}
        <div className="w-1/4 px-4">
          <div className="border rounded-2xl border-offwhite/20 p-2 flex-1 ">
            <div className="bg-darkGray p-6 rounded-2xl min-h-[300px]">
              <h3 className="text-offwhite text-[20px] text-center">
                Get your resume with our Resume AI service
              </h3>
              <button className="bg-offwhite text-black rounded-full px-6 py-2">
                <span className="font-medium"> More Details</span>
              </button>
            </div>
          </div>
        </div>

        {/* Job info */}
        <div className="w-3/4">
          <div className="border-b border-offwhite/10 pb-4">
            <h2 className="text-white text-[25px]">
              Senior Product & Brand Design
            </h2>
            <p className="text-offwhite/80 my-2">
              18 Jul 2022 by <span className="text-offwhite">Adobe</span>
            </p>
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
      </div>
    </section>
  );
};

export default JobDetails;
