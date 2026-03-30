import React from "react";
import { useLoaderData, useParams } from "react-router";
import { FaDownload, FaStar, FaRegHeart } from "react-icons/fa";

const AppDetails = () => {
  const appsData = useLoaderData();
  const { id } = useParams();
  const app = appsData.find((app) => app.id === parseInt(id));
  const formatLargeNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(2) + "M";
    if (num >= 1000) return (num / 1000).toFixed(0) + "k";
    return num.toString();
  };

  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-50 py-16 min-h-screen">
      <div className="w-11/12 mx-auto px-6">
        <div className="lg:flex lg:items-center lg:gap-12 bg-white shadow-2xl rounded-3xl p-8 hover:shadow-3xl transition-all duration-300">
          <div className="lg:w-1/3 h-64 lg:h-80 flex items-center justify-center rounded-2xl overflow-hidden shadow-xl bg-white">
            <img
              src={app.image || "/placeholder.png"}
              alt={app.title}
              className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
            />
          </div>

          <div className="lg:w-2/3 mt-6 lg:mt-0 space-y-6">
            <h2 className="text-4xl font-extrabold text-gray-800">
              {app.title}
            </h2>

            <p className="text-gray-600">
              Developed by{" "}
              <span className="font-bold bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent">
                {app.companyName}
              </span>
            </p>

            <div className="flex gap-6 flex-wrap">
              <div className="flex items-center gap-3 bg-purple-50 p-4 rounded-xl shadow-md flex-1 min-w-[120px]">
                <FaDownload className="text-purple-500 text-2xl" />
                <div>
                  <div className="text-gray-500 text-sm">Downloads</div>
                  <div className="font-semibold text-gray-800">
                    {app.downloads}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-yellow-50 p-4 rounded-xl shadow-md flex-1 min-w-[120px]">
                <FaStar className="text-yellow-400 text-2xl" />
                <div>
                  <div className="text-gray-500 text-sm">Average Rating</div>
                  <div className="font-semibold text-gray-800">
                    {app.ratingAvg}
                  </div>
                </div>
              </div>

              <div
                className="flex items-center gap-3 bg-pink-50 p-4 rounded-xl shadow-md 
              flex-1 min-w-[120px]"
              >
                <FaRegHeart className="text-pink-500 text-2xl" />
                <div>
                  <div className="text-gray-500 text-sm">Reviews</div>
                  <div className="font-semibold text-gray-800">
                    {formatLargeNumber(app.reviews)}
                  </div>
                </div>
              </div>
            </div>

            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-bold transition-all duration-300 cursor-pointer">
              Install Now ({app.size}MB)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
