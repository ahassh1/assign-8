import { toast } from "react-toastify";

const getFromLocalStorage = () => {
  const installApps = localStorage.getItem("installed");
  if (installApps) {
    return JSON.parse(installApps);
  }
  return [];
};

const saveToLocalStorage = (id) => {
  const installApps = getFromLocalStorage();
  if (installApps.includes(id)) {
    toast("Already installed this app");
  } else {
    installApps.push(id);
  }

  const installAppsStr = JSON.stringify(installApps);
  localStorage.setItem("installed", installAppsStr);
};
const removeFromLocalStorage = (id) => {
  const installApps = getFromLocalStorage();
  const newInstallApps = installApps.filter((appId) => appId !== id);
  const installAppsStr = JSON.stringify(newInstallApps);
  localStorage.setItem("installed", installAppsStr);
};

export { getFromLocalStorage, saveToLocalStorage, removeFromLocalStorage };
