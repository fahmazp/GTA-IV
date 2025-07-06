import { Parallax } from "react-scroll-parallax";

export default function Parallaxgta() {
  return (
    <div className="relative w-full md:h-[100vh] overflow-hidden">
      <Parallax speed={-20}>
        <img
          src="/images/parallaxbg.png"
          alt="Background"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </Parallax>

      {/* Overlay Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 px-4 text-center ">
      <p className="text-yellow-300 text-base md:text-xl">Grand Theft Auto – VI</p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gray-200 xl:leading-20 drop-shadow-2xl"
        style={{
    textShadow: `
      2px 2px 0 #ff0057,
      4px 4px 0 #00ffff,
      6px 6px 0 #ffff00
    `,
  }}>
          Run the Streets <br /> Rule the Game
        </h1>
      </div>
    </div>
  );
}
