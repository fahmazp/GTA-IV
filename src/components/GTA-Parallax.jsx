// import { Parallax } from 'react-scroll-parallax';

export default function Parallaxgta() {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <div >
        <img
          src="/images/parallax2.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Add foreground content */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white">
        <h1 className="md:text-7xl  text-black">Welcome to the Future</h1>
      </div>
    </div>
  );
}
