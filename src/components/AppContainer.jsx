import React from "react";
import AppCard from "./AppCard";

const AppContainer = ({ appsData }) => {
  const ratingAvg = appsData
    .sort((a, b) => b.ratingAvg - a.ratingAvg)
    .slice(0, 8);

  return (
    <div>
      <div className="py-14 md:py-18 text-center">
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-gray-700">
          Trending Apps
        </h1>
        <p className="text-[13px] text-gray-400 mt-3">
          Explore by All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3.5">
        {ratingAvg.map((app) => (
          <AppCard key={app.id} app={app} />
        ))}
      </div>
    </div>
  );
};

export default AppContainer;
