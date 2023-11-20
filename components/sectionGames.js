import Link from "next/link";
import { useState } from "react";

export default () => {
  const gameList = [
    { img: "flying.png", nam: "Icey Bird", title: "icey", link: "https://www.google.com" },
    { img: "pingoosball.png", nam: "Pinball", title: "pinball", link: "https://www.facebook.com" },
  ];

  return (
    <>
      <div
        id="team"
        className="px-4 py-28 lg:py-64 bg-gamma relative"
      >
        <h1 className="max-w-md mx-auto uppercase font-alpha text-blue text-center text-5xl mb-3">
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
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 my-10 gap-y-6">
          {gameList.map((item, index) => (
            <Link href={item.link} key={index}>
              <a className="relative border border-gray-300 rounded p-4 transition duration-300 hover:border-blue hover:shadow-md">
                <img
                  className="w-full"
                  src={`/games/${item.img}`}
                  alt=""
                />
                <h1 className="max-w-md mx-auto uppercase font-alpha text-blue text-center text-3xl">
                  {item.nam}
                </h1>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
