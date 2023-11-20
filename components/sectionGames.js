import Link from "next/link";
import { useState } from "react";
import Unity, { UnityContext } from "react-unity-webgl";



export default () => {
  
  return (
    <>
      <div
        id="roadmap"
        className="px-4 py-16 h-[auto] lg:h-[auto] bg-gray-100 opacity-95"
      >
        <div className="max-w-screen-lg mx-auto px-4 py-16">
        <h1 className="max-w-md stroke-alpha mx-auto uppercase font-alpha text-white text-center text-[75px] md:text-[90px] mb-3">
            Our Game
          </h1>
          <Unity
  style={{
    width: '100%',
    height: '70vh',
    border: '15px solid rgba(32, 115, 174, 0.866)',
    background: 'green',
    '@media (maxWidth: 768px)': {
      height: '43vh',
      width: '70vw',
    }
  }}
  unityContext={unityContext}
/>
<h1 className="max-w-md stroke-alpha mx-auto uppercase font-alpha text-white text-center text-[75px] md:text-[90px] mb-3">
            Our Games
          </h1>
          {/* <h2 className="max-w-lg mx-auto text-center font-ubuntu text-xl">
            Lorem ipsum dolor sit
          </h2> */}
          <div className="relative mt-10 mb-28 px-10">
            <img
              className="border-[15px] border-white w-full h-auto rounded-xl"
              src="/img/section_image.jpeg"
              alt="animation"
            />
            {/* Border - TR */}
            {/* <img
              className="absolute top-16 right-[210px] translate-x-1/2 -translate-y-1/2"
              src="/img/border-alpha-tr.png"
              alt=""
            /> */}
            {/* Border - BL */}
            <img
              className="absolute left-[-5rem] bottom-[-10rem] md:-bottom-72 md:-left-40 translate-x-1/2 -translate-y-1/2 h-[13rem] md:h-[auto]"
              src="/img/border-alpha-bl.png"
              alt=""
            />
            {/* Border - BR */}
            <img
              className="absolute right-[7rem] bottom-[-8rem] md:-bottom-48 md:right-36 translate-x-1/2 -translate-y-1/2 h-[10rem] md:h-[auto]"
              src="/img/border-alpha-br.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};
