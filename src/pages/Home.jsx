import React from "react";
import Hero from "../components/Hero";
import TotalHistory from "../components/TotalHistory";
import AppContainer from "../components/AppContainer";
import { useLoaderData } from "react-router";

const Home = () => {
  const appsData = useLoaderData();
  console.log(appsData);
  return (
    <>
      <Hero />
      <TotalHistory />
      <div className=" w-full bg-gray-50 pb-10 md:pb-14">
        <div className="w-11/12 mx-auto">
          <AppContainer appsData={appsData} />
        </div>
      </div>
    </>
  );
};

export default Home;
