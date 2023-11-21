import Link from "next/link";

export default () => {
  const gameList = [
    { img: "playfly2.png", nam: "Icey Bird", title: "icey", link: "https://pingoos.itch.io/icey-bird" },
    { img: "playpin3.png", nam: "Pingball", title: "pingball", link: "https://pingoos.itch.io/pingoos-pinball" },
  ];

  return (
    <>
      <div
        id="games"
        className="px-4 py-28 lg:py-64 bg-gamma relative"
      >
        <h1 className="max-w-md mx-auto uppercase font-alpha text-white text-center text-5xl mb-3">
          PLAY OUR GAMES
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
                  className="w-full rounded overflow-hidden"
                  src={`/games/${item.img}`}
                  alt=""
                />
                <h1 className="max-w-md mx-auto uppercase font-alpha text-white text-center text-3xl">
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
