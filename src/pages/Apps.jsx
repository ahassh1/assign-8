import React, { useState } from "react";
import { useLoaderData } from "react-router";
import AppCard from "../components/AppCard";

const Apps = () => {
  const [input, setInput] = useState("");
  const appsData = useLoaderData();
  const search = appsData.filter((app) =>
    app.title.toLowerCase().includes(input.toLowerCase()),
  );
  const handleSearch = (e) => {
    setInput(e.target.value);
  };
  return (
    <div className="bg-gray-50 ">
      <div className="w-11/12 mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center">Our All Applications</h2>
        <p className="text-gray-500 text-center mt-6 mb-10">
          Explore All Apps on the Market developed by us. We code for Millions
          AND we are proud of it.
        </p>

        <div className="flex justify-between flex-col-reverse lg:flex-row text-center lg:text-left">
          <h2 className="font-bold text-xl">
            ({search.length}) Apps Found Now
          </h2>
          <label className="input mx-auto lg:mx-0 mb-4 lg:mb-0">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              type="search"
              required
              placeholder="search Apps"
              onChange={handleSearch}
            />
          </label>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          {search.map((app) => (
            <AppCard key={app.id} app={app}></AppCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Apps;
