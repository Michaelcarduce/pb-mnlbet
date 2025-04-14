"use client";

import React from "react";
import CountUp from "react-countup";

const stats = [
  { label: "Active Users", value: 18968 },
  { label: "Loyal Players", value: 8456 },
  { label: "VIP Members", value: 1000 },
  { label: "Jackpot Prize", value: 85676791, isCurrency: true },
];

const Stats = () => {
  return (
    <section className="py-4 md:py-8 bg-[radial-gradient(circle_at_center,_#10122b_0%,_#171717_100%)]">
      <div className="bg-[radial-gradient(circle_at_center,_#31399a_0%,_#252b73_100%)] border-[1.5px] border-amber-800 rounded-[50px] p-4  md:p-6 grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 text-center">
        {stats.map((stat, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <span className="text-xl md:text-4xl font-bold text-[#ededed]">
              <CountUp
                end={stat.value}
                duration={2.5}
                separator=","
                prefix={stat.isCurrency ? "$" : ""}
                suffix="+"
              />
            </span>
            <span className="text-xs md:text-sm text-[#FFD700] ">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
