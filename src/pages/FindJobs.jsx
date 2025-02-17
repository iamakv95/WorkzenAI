import React, { useState } from "react";
import { JobCard } from "../components";
import {
  PiArrowCircleLeftLight,
  PiArrowCircleDownLight,
  PiFadersHorizontalLight,
} from "react-icons/pi";

const FindJobs = () => {
  const [isFilterVisible, setIsFilterVisible] = useState(true);

  const handleShowFilters = () => {
    setIsFilterVisible((prev) => !prev);
  };

  return (
    <section className="bg-black w-full py-24">
      <div className="container flex">
        {/* Sidebar */}
        <div className="w-1/5 px-4">
          <div className="border border-offwhite/20 bg-black p-6 rounded-2xl font-semibold flex flex-col items-center gap-6 mb-10">
            <h3 className="text-offwhite text-[20px] text-center">
              Get your resume with our Resume AI service
            </h3>
            <button className="bg-offwhite text-black rounded-full px-6 py-2">
              Job Details
            </button>
          </div>

          {/* Filters Section */}
          <div
            className={`${
              isFilterVisible ? "border-r" : "border-none"
            } py-6 border-offwhite/10 px-4`}
          >
            <div
              onClick={handleShowFilters}
              className="flex items-center justify-between cursor-pointer"
            >
              <h5 className="text-[18px] font-medium text-offwhite">Filters</h5>
              {isFilterVisible ? (
                <PiArrowCircleDownLight className="fill-offwhite text-[25px]" />
              ) : (
                <PiArrowCircleLeftLight className="fill-offwhite text-[25px]" />
              )}
            </div>
            <div className="border-b-2 border-offwhite/20 mt-2"></div>

            {isFilterVisible && (
              <div className="flex flex-col gap-4 py-4 mt-4">
                {/* Working Schedule */}
                <div>
                  <h6 className="text-[15px] text-offwhite">
                    Working Schedule
                  </h6>
                  <div className="flex items-center gap-1 mt-2">
                    <input type="checkbox" name="work1" id="work1" />
                    <label htmlFor="work1" className="text-white text-[13px]">
                      Work 1
                    </label>
                  </div>
                </div>

                {/* Employment */}
                <div>
                  <h6 className="text-[15px] text-offwhite">Employment</h6>
                  <div className="flex items-center gap-1 mt-2">
                    <input
                      type="checkbox"
                      name="employment1"
                      id="employment1"
                    />
                    <label
                      htmlFor="employment1"
                      className="text-white text-[13px]"
                    >
                      Employment 1
                    </label>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Job Listings */}
        <div className="w-4/5 px-8">
          <div className="mb-8 flex items-center justify-between">
            <h5 className="text-white text-[25px]">Recommended Jobs</h5>
            <div className="flex gap-2 items-center">
              <p className="text-offwhite/80">Sort by:</p>
              <p className="text-offwhite font-medium">Last Update</p>
              <PiFadersHorizontalLight className="fill-offwhite text-[25px]" />
            </div>
          </div>

          {/* Job Cards Grid */}
          <div className="w-full grid grid-cols-3 gap-8">
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindJobs;
