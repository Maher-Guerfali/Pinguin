import Link from "next/link";
import { useState } from "react";

export default () => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto px-4 py-16">
        <h1 className="max-w-md stroke-alpha mx-auto uppercase font-alpha text-white text-center text-5xl mb-3">
          WHAT ARE THE VIBES LIKE AT THE EGLOO?
        </h1>
        <h2 className="max-w-lg mx-auto mb-2 text-center font-[500] font-ubuntu text-xl">
          We are a group of Arctic-dwelling, Bitcoin-loving birds that love to
          play games and have fun!
        </h2>
        <h2 className="max-w-lg mx-auto mb-2 text-center font-[500] font-ubuntu text-xl">
          However, don’t be fooled by our sweetness! There is a zombie virus
          that could transform us all into brain-eating zombies if we do not
          stay strong and work together!
        </h2>
        <h2 className="max-w-lg mx-auto text-center font-[500] font-ubuntu text-xl">
          Luckily, we are a strong community and we have a plan! The Egloo has
          been fortified and we are stocked up on rare sats, pizza and fish
          so we can thrive during the apocalypse!
        </h2>
        <div className="relative mt-10 mb-28 px-10">
          <img
            className="border-[15px] border-white rounded-xl"
            src="/img/animation-alpha.gif"
            alt="animation"
          />
          {/* Border - TR */}
          <img
            className="absolute top-[2rem] right-[8.5rem] md:top-16 md:right-52 translate-x-1/2 -translate-y-1/2 h-[6rem] md:h-[auto]"
            src="/img/border-alpha-tr.png"
            alt=""
          />
          {/* Border - BL */}
          <img
            className="absolute left-[-5rem] bottom-[-10rem] md:-bottom-72 md:-left-40 translate-x-1/2 -translate-y-1/2 h-[13rem] md:h-[auto]"
            src="/img/border-alpha-bl.png"
            alt=""
          />
          {/* Border - BR */}
          <img
            className="absolute right-[5.5rem] bottom-[-6rem] md:-bottom-48 md:right-36 translate-x-1/2 -translate-y-1/2 h-[7rem] md:h-[auto]"
            src="/img/border-alpha-br.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
};
