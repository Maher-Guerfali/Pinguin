import Link from "next/link";
import { useState } from "react";

export default () => {
  const teamList = [
   { img: "team-4.png", nam: "Coolio", title: "Ceo,Founder" },
    { img: "void", nam: "", title: "" },
      { img: "team-3.png", nam: "Sheriff", title: "Chief Security Officer" },
    
    { img: "team-44.png", nam: "Cookie", title: "Cutest BTC Dev" },
  ];
  return (
    <>
      <div id="team" className="px-4 py-28 lg:py-64 bg-gamma relative">
        <h1 className="max-w-md mx-auto uppercase font-alpha text-white text-center text-5xl mb-3">
          Our Team
        </h1>
        <h2 className="max-w-lg mx-auto text-white text-center font-ubuntu text-xl">
          Meet Our Pingoos Team
        </h2>
        {/* Border - TR */}
        <img
          className="absolute w-full top-0 right-0"
          src="/img/border-beta-top.png"
          alt=""
        />
        <img
          className="absolute w-full bottom-0 right-0"
          src="/img/border-beta-bottom.png"
          alt=""
        />
        <div className="max-w-screen-xl mx-auto grid grid-cols-2 lg:grid-cols-2 my-10 gap-y-16">
          {teamList.map((item, index) => {
            return (
              <div className="relative">
                <img
                  className="w-full -translate-y-6"
                  src={`/img/team/${item.img}`}
                  alt=""
                />
                <h1 className="max-w-md mx-auto uppercase font-alpha text-white text-center text-3xl">
                  {item.nam}
                </h1>
                <h1 className="max-w-md mx-auto uppercase font-ubuntu text-white text-center text-2xl mb-3">
                  {item.title}
                </h1>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
