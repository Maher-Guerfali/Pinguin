import Link from "next/link";
import { useState } from "react";



export default () => {
  const gameList = [
   
    { img: "icey.png", nam: "Icey Bird ", title: "icey" },
      { img: "pinball.png", nam: "Pinball", title: "pinball" },
    
    
  ];
  return (
    <>
      <div id="team" className="px-4 py-28 lg:py-64 bg-gamma relative">
        <h1 className="max-w-md mx-auto uppercase font-alpha text-white text-center text-5xl mb-3">
          Our Games
        </h1>
        
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
       <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 my-10 gap-y-6">
  {/* Top Item */}
  {gameList.slice(0, 1).map((item, index) => (
    <div className="relative" key={index}>
      <img
        className="w-full -translate-y-6"
        src={`/img/team/${item.img}`}
        alt=""
      />
      <h1 className="max-w-md mx-auto uppercase font-alpha text-white text-center text-3xl">
        Game Name
      </h1>
      <h1 className="max-w-md mx-auto uppercase font-ubuntu text-white text-center text-2xl mb-3">
        {item.title}
      </h1>
    </div>
  ))}
  <div className="relative">
  </div>
  {/* Bottom Items */}
  {gameList.slice(1).map((item, index) => (
    <div className="relative" key={index}>
      <img
        className="w-full"
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
  ))}
</div>

      </div>
    </>
  );
};
