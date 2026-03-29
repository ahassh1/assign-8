import React from "react";
import loader from "../assets/logo.png";

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img src={loader} alt="Loading..." className="w-12 h-12 animate-spin" />
    </div>
  );
};

export default Loader;
