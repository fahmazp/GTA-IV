import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import { CircleArrowDown } from "lucide-react";

function App() {
  const [showContent, setShowContent] = useState(false);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "power4.inOut",
      transformOrigin: "50% 50%",
    }).to(".vi-mask-group", {
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: "expo.inOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          const svgEl = document.querySelector(".svg");
          if (svgEl) svgEl.remove();
          setShowContent(true);
          this.kill();
        }
      },
    });
  }, []);

  useGSAP(() => {
    if (!showContent) return;

    gsap.to(".main", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: 0,
      ease: "expo.inOut",
    });

    gsap.to(".sky, .bg", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: 0.2,
      ease: "expo.inOut",
    });

    gsap.to(".character", {
      scale: 1.4,
      xPercent: -50,
      bottom: "-25%",
      rotate: 0,
      duration: 2,
      delay: 0.2,
      ease: "expo.inOut",
    });

    gsap.to(".text", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: 0.2,
      ease: "expo.inOut",
    });

    const main = document.querySelector(".main");
    const handleMouseMove = (e) => {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;

      gsap.to(".main .text", {
        xPercent: xMove * 0.4,
        duration: 0.5,
        ease: "power2.out",
      });

      gsap.to(".sky", {
        x: xMove,
        duration: 0.5,
        ease: "power2.out",
      });

      gsap.to(".bg", {
        x: xMove * 1.7,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    main?.addEventListener("mousemove", handleMouseMove);

    return () => {
      main?.removeEventListener("mousemove", handleMouseMove);
    };
  }, [showContent]);

  return (
    <>
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
        <svg
          viewBox="0 0 800 600"
          preserveAspectRatio="xMidYMid slice"
          className="w-full h-full"
        >
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>

      {showContent && (
        <div className="main w-full rotate-[-5deg] sm:rotate-[-10deg] scale-[1.2] sm:scale-[1.7]">
          <div className="landing overflow-hidden relative w-full h-screen bg-black">
            <div className="navbar absolute top-0 left-0 z-[10] w-full py-4 sm:py-6 px-4 sm:px-10">
              <div className="logo flex gap-4 items-center sm:gap-7">
                <div className="lines flex flex-col gap-[4px]">
                  <div className="line w-8 sm:w-10 h-1 sm:h-2 bg-white" />
                  <div className="line w-6 sm:w-8 h-1 sm:h-2 bg-white" />
                  <div className="line w-4 sm:w-5 h-1 sm:h-2 bg-white" />
                </div>
                <h3 className="text-xl sm:text-3xl md:text-4xl leading-none text-white">
                  Rockstar
                </h3>
              </div>
            </div>

            <div className="imagesdiv relative overflow-hidden w-full h-screen">
              <img
                className="absolute sky scale-[1.5] rotate-[-20deg] top-0 left-0 w-full h-full object-cover"
                src="./sky.png"
                alt=""
              />
              <img
                className="absolute bg scale-[1.8] rotate-[-3deg] top-0 left-0 w-full h-full object-cover"
                src="./bg.png"
                alt=""
              />

              <div className="text text-white flex flex-col gap-2 absolute top-20 md:top-1 left-1/2 -translate-x-1/2 scale-[1.2] sm:scale-[1.4] rotate-[-10deg] text-center">
                <h1 className="text-[5rem] md:text-[8rem] xl:text-[12rem] leading-none -ml-10 sm:-ml-20 md:-ml-0">grand</h1>
                <h1 className="text-[5rem] md:text-[8rem] xl:text-[12rem] leading-none ml-10 sm:ml-30">theft</h1>
                <h1 className="text-[5rem] md:text-[8rem] xl:text-[12rem] leading-none -ml-10 sm:-ml-20 md:-ml-0">auto</h1>
              </div>

              <img
                className="absolute character w-auto object-contain lg:w-[500px] left-1/2 -translate-x-1/2 scale-[2] sm:scale-[2.5] md:scale-[3] rotate-[-20deg]"
                src="./DeWatermark-Photoroom-2.png"
                alt=""
              />
            </div>

            {/* <div className="btmbar text-white absolute bottom-0 left-0 w-full py-8 px-5 sm:px-10 bg-gradient-to-t from-black to-transparent">
              <div className="flex gap-2 items-center">
                <i className="text-2xl md:text-4xl ri-arrow-down-line" />
                <h3 className="text-base sm:text-xl  ">
                  Scroll Down
                </h3>
              </div>
              <img
                className="absolute h-[35px] sm:h-[55px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                src="./ps5.png"
                alt=""
              />
            </div> */}
            
          <div className="btmbar text-white absolute bottom-0 left-0 w-full py-8 px-5 sm:px-10 bg-gradient-to-t from-black to-transparent">
            <div className="relative w-full flex flex-col sm:flex-row justify-between items-center">
                      
              <div className="flex gap-2 items-center sm:static z-10">
                <i className="text-2xl md:text-4xl ri-arrow-down-line" />
                <p className="text-base sm:text-xl  ">
                  Scroll Down
                </p>
              </div>
              <img
                className="h-[35px] sm:h-[55px] sm:absolute sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2"
                src="./ps5.png"
                alt="PS5 Logo"
              />
            </div>
          </div>
            
          </div>

          <div className="w-full h-screen flex flex-col md:flex-row items-center justify-center bg-black px-4">
            <div className="limg relative w-full md:w-1/2 h-full flex items-center justify-center">
              <img
                className="scale-[1.1] md:scale-[1.3] max-w-full max-h-full"
                src="./imag.png"
                alt=""
              />
            </div>
            <div className="rg w-full md:w-[50%] px-5 sm:px-10 py-10">
              <h1 className="text-4xl sm:text-6xl md:text-8xl text-white">Still Running,</h1>
              <h1 className="text-4xl sm:text-6xl md:text-8xl text-white">Not Hunting</h1>
              <p className="mt-5 sm:mt-10 text-base md:text-2xl xl:text-3xl text-white">
                Coming <span className="text-fuchsia-400 font-semibold">May 26 2026</span>
              </p>
              <p className="mt-3 text-sm sm:text-lg md:text-xl   text-white">
                No worries — you can still grab the previous version in the meantime!
                <CircleArrowDown className="inline ml-1.5 text-yellow-500 animate-bounce"/>
              </p>
              <button className="bg-yellow-500 px-5 sm:px-10 py-3 sm:py-4 text-black mt-5 sm:mt-7 text-2xl sm:text-3xl cursor-pointer">
                Download Now
              </button>
            </div>
          </div>

          <div className="w-full bg-black py-10 px-6 sm:px-20 text-white">
            <h2 className="text-4xl sm:text-6xl font-bold mb-10 text-center">What’s New in VI?</h2>
            <div className="grid sm:grid-cols-3 gap-10">
              <div>
                <img src="./feature1.png" alt="Open World" className="w-full rounded-xl mb-4" />
                <h3 className="text-2xl font-semibold">Massive Open World</h3>
                <p className="text-sm mt-2 text-gray-300">Explore Vice City with no loading screens and real-time weather.</p>
              </div>
              <div>
                <img src="./feature2.png" alt="Multiplayer" className="w-full rounded-xl mb-4" />
                <h3 className="text-2xl font-semibold">Enhanced Multiplayer</h3>
                <p className="text-sm mt-2 text-gray-300">Drop in, squad up, and own the streets with seamless co-op.</p>
              </div>
              <div>
                <img src="./feature3.png" alt="Graphics" className="w-full rounded-xl mb-4" />
                <h3 className="text-2xl font-semibold">Next-Gen Visuals</h3>
                <p className="text-sm mt-2 text-gray-300">Built for PS5 and beyond — it’s unreal (literally, Unreal Engine 5).</p>
              </div>
            </div>
          </div>


        </div>
      )}
    </>
  );
}

export default App;
