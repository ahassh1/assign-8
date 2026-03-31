import React from "react";
import { FaDownload, FaStar } from "react-icons/fa";

const AppsInstall = ({ app, handleUninstallBtn }) => {
  return (
    <div className="w-11/12 mx-auto bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 p-5 mb-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center overflow-hidden">
            <img
              src={app.image}
              alt={app.title}
              className="w-full h-full object-contain"
            />
          </div>

          <div>
            <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
              {app.title}
            </h2>

            <div className="flex items-center gap-4 mt-2 text-sm">
              <div className="flex items-center gap-1 text-green-500 bg-green-50 px-3 py-1 rounded-full">
                <FaDownload />
                <span>{app.downloads}</span>
              </div>

              <div className="flex items-center gap-1 text-yellow-500 bg-yellow-50 px-3 py-1 rounded-full">
                <FaStar />
                <span>{app.ratingAvg}</span>
              </div>

              <span className="text-gray-500">{app.size} MB</span>
            </div>
          </div>
        </div>

        <button
          onClick={() => handleUninstallBtn(app.id)}
          className="px-6 py-2 rounded-xl bg-red-500 text-white font-medium hover:bg-red-600 transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer"
        >
          Uninstall
        </button>
      </div>
    </div>
  );
};

export default AppsInstall;
