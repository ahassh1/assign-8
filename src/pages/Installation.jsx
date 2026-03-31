import React, { useState } from "react";
import { useLoaderData } from "react-router";
import { toast } from "react-toastify";
import { getFromLocalStorage } from "../utils/localStroage";
import AppsInstall from "./AppsInstall";

const Installation = () => {
  const appsData = useLoaderData();
  // console.log(appsData);

  const [name, setName] = useState("");
  const [installedApps, setInstalledApps] = useState(() => {
    const ids = getFromLocalStorage();
    return appsData.filter((app) => ids.includes(app.id));
  });

  const handleUninstallBtn = (id) => {
    const newInstalledApps = installedApps.filter((app) => app.id !== id);
    setInstalledApps(newInstalledApps);

    const installAppsStr = JSON.stringify(newInstalledApps);
    localStorage.setItem("installed", installAppsStr);

    toast.success("This app is uninstalled");
  };

  const handleSortBtn = (to) => {
    const sorted = [...installedApps];

    if (to === "highToLow") {
      setName("High-Low");
      sorted.sort((a, b) => b.downloads - a.downloads);
    } else if (to === "lowToHigh") {
      setName("Low-High");
      sorted.sort((a, b) => a.downloads - b.downloads);
    }

    setInstalledApps(sorted);
  };

  return (
    <div className="bg-[linear-gradient(180deg,#EEF0F5_0%,#F8F9FC_100%)]">
      <div className="max-w-350 mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center">Your Installed Apps</h2>
        <p className="text-gray-500 text-center mt-6 mb-10">
          Explore All Trending Apps on the Market developed by us
        </p>

        <div className="flex justify-between flex-col-reverse lg:flex-row text-center lg:text-left mb-8">
          <h2 className="font-bold text-xl">
            ({installedApps.length}) Apps Found
          </h2>

          <div className="dropdown mb-4 lg:mb-0">
            <div tabIndex={0} role="button" className="btn m-1">
              {name ? name : "Sort by Downloads"}
            </div>
            <ul
              tabIndex="-1"
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li onClick={() => handleSortBtn("highToLow")}>
                <a>High-Low</a>
              </li>
              <li onClick={() => handleSortBtn("lowToHigh")}>
                <a>Low-High</a>
              </li>
            </ul>
          </div>
        </div>

        <div>
          {installedApps.map((app) => (
            <AppsInstall
              key={app.id}
              app={app}
              handleUninstallBtn={handleUninstallBtn}
            ></AppsInstall>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Installation;
