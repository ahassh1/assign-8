import React, { useState, useEffect, useRef } from "react";

// CountUp component
const CountUp = ({ end, suffix = "", duration = 2000, startCounting }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCounting) return;

    setCount(0);

    let start = 0;
    const increment = end / (duration / 40);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 50);

    return () => clearInterval(timer);
  }, [end, duration, startCounting]);

  const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
    if (num >= 1000) return (num / 1000).toFixed(0) + "K";
    return Math.floor(num);
  };

  return (
    <span>
      {formatNumber(count)}
      {suffix}
    </span>
  );
};

const TotalHistory = () => {
  const ref = useRef(null);
  const [startCounting, setStartCounting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCounting(false);
          setTimeout(() => setStartCounting(true), 50);
        }
      },
      { threshold: 0.3 },
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="bg-[linear-gradient(138deg,#632EE3,#9F62F2)] text-white text-center py-20"
    >
      <h1 className="text-3xl md:text-4xl font-bold">
        Trusted by Millions, Built for You
      </h1>

      <div className="flex flex-col md:flex-row justify-center items-center md:space-x-12 space-y-6 md:space-y-0 mt-8 text-center">
        <div>
          <h5 className="text-gray-200 font-medium mb-2">Total Downloads</h5>
          <h1 className="text-4xl md:text-5xl font-bold">
            <CountUp end={25800000} startCounting={startCounting} />
          </h1>
          <h6 className="text-green-400 mt-1 text-sm">
            25% more than last month
          </h6>
        </div>

        <div>
          <h5 className="text-gray-200 font-medium mb-2">Total Reviews</h5>
          <h1 className="text-4xl md:text-5xl font-bold">
            <CountUp end={936000} startCounting={startCounting} />
          </h1>
          <h6 className="text-green-400 mt-1 text-sm">
            42% more than last month
          </h6>
        </div>

        <div>
          <h5 className="text-gray-200 font-medium mb-2">Active Apps</h5>
          <h1 className="text-4xl md:text-5xl font-bold">
            <CountUp end={122} suffix="+" startCounting={startCounting} />
          </h1>
          <h6 className="text-green-400 mt-1 text-sm">34 more will Launch</h6>
        </div>
      </div>
    </div>
  );
};

export default TotalHistory;
