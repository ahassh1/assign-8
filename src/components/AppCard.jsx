import React from "react";
import { FaDownload, FaStar } from "react-icons/fa";

const AppCard = ({ app }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 space-y-3 hover:shadow-xl transition duration-500 cursor-pointer">
      <img
        className="w-full bg-gray-200 rounded-xl p-5 object-cover"
        src={app?.image}
        alt={app?.title || "app image"}
      />

      <h2 className="text-xl font-bold text-left line-clamp-1">{app?.title}</h2>

      <div className="flex justify-between items-center">
        <div className="badge badge-ghost text-[#00D390] flex items-center gap-1">
          <FaDownload className="w-3 h-3" />
          {app?.downloads}M
        </div>

        <div className="badge badge-ghost bg-[#FFF0E1] text-[#FF8811] flex items-center gap-1">
          <FaStar className="w-3 h-3" />
          {app?.ratingAvg}
        </div>
      </div>
    </div>
  );
};

export default AppCard;
