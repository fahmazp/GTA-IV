import { useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import { ChevronDownCircle, CircleArrowDown } from "lucide-react";
import AboutInfo from "./components/About";

function App() {
  const [showContent, setShowContent] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isMenuOpen]);

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
            <div className="navbar absolute top-0 left-0 z-[10] w-full py-4 px-4 sm:px-8">
              <div className="logo mt-2.5 md:mt-1 flex gap-4 md:items-end-safe">
                <div
                  className="lines flex flex-col gap-[4px] cursor-pointer"
                  onClick={() => setIsMenuOpen(true)}
                >
                  <span className="line w-10 h-1.5 sm:h-2 bg-white" />
                  <span className="line w-8 h-1.5 sm:h-2 bg-white" />
                  <span className="line w-5 h-1.5 sm:h-2 bg-white" />
                </div>

                <h3 className="text-2xl sm:text-3xl md:text-4xl leading-none text-white">
                  Rockstar
                </h3>
              </div>
            </div>

            {isMenuOpen && (
              <div
                className="fixed inset-0 z-[50] bg-black/60 backdrop-blur-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                <div
                  className={`fixed top-0 left-0 h-full w-72 sm:w-80 bg-zinc-950/75 text-white p-6 transition-all duration-300 ease-in-out 
                        ${isMenuOpen
                      ? "translate-x-0 opacity-100 delay-500"
                      : "-translate-x-full opacity-0 delay-200"
                    }`}
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* <div 
                     className={`fixed top-0 left-0 h-lvh w-64 bg-zinc-950/75 text-white p-6 transform transition-transform duration-300 ease-in-out  ${
                      isMenuOpen ? "translate-x-0" : "-translate-x-full"
                    }`}>
                    </div> */}
                  <button
                    className="text-white text-4xl md:text-5xl mb-5 hover:text-yellow-400"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    &times;
                  </button>
                  <nav className="flex flex-col gap-8 text-3xl md:text-4xl">
                    <a href="#About" className="hover:text-yellow-400">
                      Home
                    </a>
                    <a href="#" className="hover:text-yellow-400">
                      Characters
                    </a>
                    <a href="#" className="hover:text-yellow-400">
                      Images
                    </a>
                    <a href="#Trailer" className="hover:text-yellow-400">
                      Trailer
                    </a>
                    <a href="#" className="hover:text-yellow-400">
                      Shop
                    </a>
                  </nav>
                </div>
              </div>
            )}

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

              <div className="text text-white flex flex-col gap-2 absolute top-32 md:top-1 left-1/2 -translate-x-1/2 scale-[1.2] sm:scale-[1.4] rotate-[-10deg] text-center">
                <h1 className="text-[5rem] md:text-[8rem] leading-none -ml-10 sm:-ml-20 md:-ml-0">
                  grand
                </h1>
                <h1 className="text-[5rem] md:text-[8rem] leading-none ml-10 sm:ml-30">
                  theft
                </h1>
                <h1 className="text-[5rem] md:text-[8rem] leading-none -ml-10 sm:-ml-20 md:-ml-0">
                  auto
                </h1>
              </div>

              <img
                className="absolute character w-[310px] object-contain sm:w-[470px] lg:w-[420px] top-100 sm:top-80 xl:top-[100px] left-1/2 -translate-x-1/2 scale-[2] sm:scale-[2.5] md:scale-[3] rotate-[-20deg]"
                src="./DeWatermark-Photoroom-2.png"
                alt=""
              />
            </div>

            <div className="btmbar text-white absolute bottom-0 left-0 w-full py-8 px-5 sm:px-10 bg-gradient-to-t from-black to-transparent">
              <div className="relative w-full flex flex-col sm:flex-row justify-between items-center">

                <button
                  onClick={() => {
                    const target = document.getElementById("next-section");
                    if (target) {
                      setTimeout(() => {
                        target.scrollIntoView({ behavior: "smooth" });
                      }, 300);
                    }
                  }}
                  className="flex gap-1 items-end p-3 text-base sm:text-xl hover:text-yellow-500 transition-colors"
                >
                  {/* <i className="text-2xl md:text-4xl ri-arrow-down-line" /> */}
                  <ChevronDownCircle />
                  Scroll Down
                </button>

                <img
                  className="h-[35px] sm:h-[55px] sm:absolute sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2"
                  src="./ps5.png"
                  alt="PS5 Logo"
                />
              </div>
            </div>
          </div>
          {/* hero section end */}

          <div
            className="w-full h-screen flex flex-col md:flex-row items-center justify-center bg-black px-4"
            id="next-section"
          >
            <div className="limg relative w-full md:w-1/2 h-full flex items-center justify-center">
              <img
                className="scale-[1.1] md:scale-[1.2] max-w-full max-h-full"
                src="./imag.png"
                alt=""
              />
            </div>
            <div className="rg w-full md:w-[50%] px-5 sm:px-10 py-10">
              <h1 className="text-4xl md:text-6xl xl:text-8xl text-white">
                Still Running,
              </h1>
              <h1 className="text-4xl md:text-6xl xl:text-8xl text-white">
                Not Hunting
              </h1>
              <p className="mt-5 sm:mt-10 text-base md:text-2xl xl:text-3xl text-white">
                Coming{" "}
                <span className="text-fuchsia-400 font-semibold">
                  May 26 2026
                </span>
              </p>
              <p className="mt-3 text-sm sm:text-lg md:text-xl   text-white">
                No worries — you can still grab the previous version in the
                meantime!
                <CircleArrowDown className="size-5 inline ml-1.5 text-yellow-400" />
              </p>
              <button className="bg-yellow-400 px-5 sm:px-10 py-3 sm:py-4 text-black mt-5 sm:mt-7 text-2xl sm:text-3xl cursor-pointer">
                Download Now
              </button>
            </div>
          </div>

          <AboutInfo/>                  

          <div className="w-full bg-black py-10 px-6 sm:px-20 text-white">
            <h2 className="text-4xl sm:text-5xl  mb-10 text-center">
              What’s New in VI?
            </h2>
            <div className="grid sm:grid-cols-3 gap-10">
              <div>

                <div className="">
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 64 64">
                    <linearGradient id="ylrMPbggYAMAnP4cE0Amfa_69482_gr1" x1="32" x2="32" y1="9" y2="55" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#1a6dff"></stop><stop offset="1" stop-color="#c822ff"></stop></linearGradient><path fill="url(#ylrMPbggYAMAnP4cE0Amfa_69482_gr1)" d="M46.694,11C50.171,11,53,13.829,53,17.306v29.389C53,50.171,50.171,53,46.694,53H17.306 C13.829,53,11,50.171,11,46.694V17.306C11,13.829,13.829,11,17.306,11H46.694 M46.694,9H17.306C12.718,9,9,12.718,9,17.306v29.389 C9,51.282,12.718,55,17.306,55h29.389C51.282,55,55,51.282,55,46.694V17.306C55,12.718,51.282,9,46.694,9L46.694,9z"></path><linearGradient id="ylrMPbggYAMAnP4cE0Amfb_69482_gr2" x1="40.434" x2="40.434" y1="9.125" y2="54.483" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#1a6dff"></stop><stop offset="1" stop-color="#c822ff"></stop></linearGradient><path fill="url(#ylrMPbggYAMAnP4cE0Amfb_69482_gr2)" d="M30.203,49.481l3.951-8.685L29.72,36.01l7.152-0.031l4.69-7.823l1.304,7.82h8.281 l-7.509,5.306l1.196,7.888l-6.146-4.714L30.203,49.481z M38.833,42.045l3.28,2.517l-0.637-4.2l3.375-2.386h-3.68l-0.688-4.131 l-2.476,4.128L34.28,37.99l2.245,2.424l-1.867,4.104L38.833,42.045z"></path><linearGradient id="ylrMPbggYAMAnP4cE0Amfc_69482_gr3" x1="27.063" x2="27.063" y1="16.028" y2="36.002" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#6dc7ff"></stop><stop offset="1" stop-color="#e6abff"></stop></linearGradient><path fill="url(#ylrMPbggYAMAnP4cE0Amfc_69482_gr3)" d="M29.717,36.001l-0.177-0.383c-0.037-0.08-0.355-0.819-0.191-2.168 c0.267-2.193,0.071-3.312-0.474-3.939c-0.297-0.342-0.766-0.509-1.436-0.509L24.055,29l-1.241,6h-5.689l3.944-18.972h9.19 c1.898,0,4.253,0.193,5.617,1.696c0.88,0.971,1.238,2.326,1.093,4.145c-0.257,3.215-2.052,4.435-3.357,4.946 c0.804,0.744,1.576,1.8,1.356,4.007c-0.279,2.809,0.017,3.825,0.217,4.181L35.75,36l-6.033,0.002V36.001z M28.84,24.445 c0.795,0,2.179-0.248,2.513-1.903c0.114-0.565,0.054-0.999-0.181-1.289c-0.252-0.313-0.739-0.494-1.339-0.494h-3.967l-0.772,3.684 h3.746V24.445z"></path>
                  </svg>
                </div>


                <h3 className="text-2xl tracking-wide">Massive Open World</h3>
                <p className="text-sm mt-2 text-gray-300">
                  Explore Vice City with no loading screens and real-time
                  weather.
                </p>
              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 64 64">
                  <linearGradient id="ylrMPbggYAMAnP4cE0Amfa_69482_gr1" x1="32" x2="32" y1="9" y2="55" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#1a6dff"></stop><stop offset="1" stop-color="#c822ff"></stop></linearGradient><path fill="url(#ylrMPbggYAMAnP4cE0Amfa_69482_gr1)" d="M46.694,11C50.171,11,53,13.829,53,17.306v29.389C53,50.171,50.171,53,46.694,53H17.306 C13.829,53,11,50.171,11,46.694V17.306C11,13.829,13.829,11,17.306,11H46.694 M46.694,9H17.306C12.718,9,9,12.718,9,17.306v29.389 C9,51.282,12.718,55,17.306,55h29.389C51.282,55,55,51.282,55,46.694V17.306C55,12.718,51.282,9,46.694,9L46.694,9z"></path><linearGradient id="ylrMPbggYAMAnP4cE0Amfb_69482_gr2" x1="40.434" x2="40.434" y1="9.125" y2="54.483" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#1a6dff"></stop><stop offset="1" stop-color="#c822ff"></stop></linearGradient><path fill="url(#ylrMPbggYAMAnP4cE0Amfb_69482_gr2)" d="M30.203,49.481l3.951-8.685L29.72,36.01l7.152-0.031l4.69-7.823l1.304,7.82h8.281 l-7.509,5.306l1.196,7.888l-6.146-4.714L30.203,49.481z M38.833,42.045l3.28,2.517l-0.637-4.2l3.375-2.386h-3.68l-0.688-4.131 l-2.476,4.128L34.28,37.99l2.245,2.424l-1.867,4.104L38.833,42.045z"></path><linearGradient id="ylrMPbggYAMAnP4cE0Amfc_69482_gr3" x1="27.063" x2="27.063" y1="16.028" y2="36.002" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#6dc7ff"></stop><stop offset="1" stop-color="#e6abff"></stop></linearGradient><path fill="url(#ylrMPbggYAMAnP4cE0Amfc_69482_gr3)" d="M29.717,36.001l-0.177-0.383c-0.037-0.08-0.355-0.819-0.191-2.168 c0.267-2.193,0.071-3.312-0.474-3.939c-0.297-0.342-0.766-0.509-1.436-0.509L24.055,29l-1.241,6h-5.689l3.944-18.972h9.19 c1.898,0,4.253,0.193,5.617,1.696c0.88,0.971,1.238,2.326,1.093,4.145c-0.257,3.215-2.052,4.435-3.357,4.946 c0.804,0.744,1.576,1.8,1.356,4.007c-0.279,2.809,0.017,3.825,0.217,4.181L35.75,36l-6.033,0.002V36.001z M28.84,24.445 c0.795,0,2.179-0.248,2.513-1.903c0.114-0.565,0.054-0.999-0.181-1.289c-0.252-0.313-0.739-0.494-1.339-0.494h-3.967l-0.772,3.684 h3.746V24.445z"></path>
                </svg>
                <h3 className="text-2xl tracking-wide">Enhanced Multiplayer</h3>
                <p className="text-sm mt-2 text-gray-300">
                  Drop in, squad up, and own the streets with seamless co-op.
                </p>
              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 64 64">
                  <linearGradient id="ylrMPbggYAMAnP4cE0Amfa_69482_gr1" x1="32" x2="32" y1="9" y2="55" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#1a6dff"></stop><stop offset="1" stop-color="#c822ff"></stop></linearGradient><path fill="url(#ylrMPbggYAMAnP4cE0Amfa_69482_gr1)" d="M46.694,11C50.171,11,53,13.829,53,17.306v29.389C53,50.171,50.171,53,46.694,53H17.306 C13.829,53,11,50.171,11,46.694V17.306C11,13.829,13.829,11,17.306,11H46.694 M46.694,9H17.306C12.718,9,9,12.718,9,17.306v29.389 C9,51.282,12.718,55,17.306,55h29.389C51.282,55,55,51.282,55,46.694V17.306C55,12.718,51.282,9,46.694,9L46.694,9z"></path><linearGradient id="ylrMPbggYAMAnP4cE0Amfb_69482_gr2" x1="40.434" x2="40.434" y1="9.125" y2="54.483" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#1a6dff"></stop><stop offset="1" stop-color="#c822ff"></stop></linearGradient><path fill="url(#ylrMPbggYAMAnP4cE0Amfb_69482_gr2)" d="M30.203,49.481l3.951-8.685L29.72,36.01l7.152-0.031l4.69-7.823l1.304,7.82h8.281 l-7.509,5.306l1.196,7.888l-6.146-4.714L30.203,49.481z M38.833,42.045l3.28,2.517l-0.637-4.2l3.375-2.386h-3.68l-0.688-4.131 l-2.476,4.128L34.28,37.99l2.245,2.424l-1.867,4.104L38.833,42.045z"></path><linearGradient id="ylrMPbggYAMAnP4cE0Amfc_69482_gr3" x1="27.063" x2="27.063" y1="16.028" y2="36.002" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#6dc7ff"></stop><stop offset="1" stop-color="#e6abff"></stop></linearGradient><path fill="url(#ylrMPbggYAMAnP4cE0Amfc_69482_gr3)" d="M29.717,36.001l-0.177-0.383c-0.037-0.08-0.355-0.819-0.191-2.168 c0.267-2.193,0.071-3.312-0.474-3.939c-0.297-0.342-0.766-0.509-1.436-0.509L24.055,29l-1.241,6h-5.689l3.944-18.972h9.19 c1.898,0,4.253,0.193,5.617,1.696c0.88,0.971,1.238,2.326,1.093,4.145c-0.257,3.215-2.052,4.435-3.357,4.946 c0.804,0.744,1.576,1.8,1.356,4.007c-0.279,2.809,0.017,3.825,0.217,4.181L35.75,36l-6.033,0.002V36.001z M28.84,24.445 c0.795,0,2.179-0.248,2.513-1.903c0.114-0.565,0.054-0.999-0.181-1.289c-0.252-0.313-0.739-0.494-1.339-0.494h-3.967l-0.772,3.684 h3.746V24.445z"></path>
                </svg>
                <h3 className="text-2xl tracking-wide">Next-Gen Visuals</h3>
                <p className="text-sm mt-2 text-gray-300">
                  Built for PS5 and beyond — it’s unreal (literally, Unreal
                  Engine 5).
                </p>
              </div>
            </div>
          </div>


          <div className="w-full bg-black py-10 px-6 sm:px-20 text-white" id="Trailer">
            <h2 className="text-white text-2xl md:text-3xl text-center">Watch the Madness</h2>

            <div className="w-full mt-8 px-2 md:px-5 h-[300px] sm:h-[520px] relative bg-black overflow-hidden">
              <iframe
                className="w-full h-full object-cover rounded-xl"
                src="https://www.youtube.com/embed/VQRLujxTm3c?si=3Prran0KIN5DGpFM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
              </iframe>
            </div>

          </div>

          <div className="w-full my-10 bg-yellow-400 text-black py-10 sm:px-10 text-center">
            <h2 className="text-3xl sm:text-5xl font-light mb-4">Ready to Hit the Streets?</h2>
            <p className="text-md sm:text-lg mb-6">Pre-order Grand Theft Auto VI now and get exclusive in-game rewards.</p>
              <a href="https://www.rockstargames.com/gta-v?info=order" target="_blank" rel="noopener noreferrer">
              <button className="bg-black text-white px-8 md:px-10 py-4 rounded-full text-lg hover:scale-105 transition-transform">
                Pre-order Now
              </button>
              </a>
          </div>



        </div>
      )}
    </>
  );
}

export default App;
