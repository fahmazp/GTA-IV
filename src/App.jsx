import { useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import AboutInfo from "./components/About";
import WhatsNew from "./components/WhatsNew";
import { ChevronDownCircle, ChevronsDownIcon, ChevronsUpIcon, ChevronUp, CircleArrowDown, DownloadCloud } from "lucide-react";
import TrailerVideo from "./components/Trailer";
import Gtalogo from "./components/GtaLogo";
import TextCirclePreview from "./components/animation-files/SpinningText";
import { CarouselSize } from "./components/ImagesCarousel";
import Parallaxgta from "./components/GTA-Parallax";
import Footer from "./components/Footer";
import ButtonCreative from "./components/buttons/DownloadBtn";
import { ShimmerButtonDemo } from "./components/buttons/PreOrderBtn";
import GTACharacters from "./components/Peoples";
import GtaShop from "./components/Shop";

function App() {
  const [showContent, setShowContent] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

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

useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowScrollTop(true);
    } else {
      setShowScrollTop(false);
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);


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


    const mm = gsap.matchMedia();  

    mm.add("(min-width: 768px)", () => {
    gsap.to(".character", {
      scale: 1.2,
      xPercent: -50,
      bottom: "-25%",
      rotate: 0,
      duration: 2,
      delay: 0.2,
      ease: "expo.inOut",
    });
   });

     mm.add("(max-width: 767px)", () => {
    gsap.to(".character", {
      scale: 1.4,
      xPercent: -50,
      bottom: "-25%",
      rotate: 0,
      duration: 2,
      delay: 0.2,
      ease: "expo.inOut",
    });
  });

    gsap.to(".text", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: 0.2,
      ease: "expo.inOut",
    });

    // Mouse move 
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
      mm.revert(); 
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
            
            <Gtalogo/>

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
                    <a href="#About" className="hover:text-yellow-400" onClick={() => setIsMenuOpen(false)}>
                      Overview
                    </a>
                    <a href="#characters" className="hover:text-yellow-400" onClick={() => setIsMenuOpen(false)}>
                      Characters
                    </a>
                    <a href="#" className="hover:text-yellow-400" onClick={() => setIsMenuOpen(false)}>
                      Story
                    </a>
                    <a href="#trailer" className="hover:text-yellow-400" onClick={() => setIsMenuOpen(false)}>
                      Trailer
                    </a>
                    <a href="#shop" className="hover:text-yellow-400" onClick={() => setIsMenuOpen(false)}>
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
                className="absolute character w-[310px] object-contain sm:w-[400px] lg:w-[420px] top-100 sm:top-[120px] lg:top-[80px] left-1/2 -translate-x-1/2 scale-[2] sm:scale-[2.5] md:scale-[3] rotate-[-20deg]"
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
            className="my-6 w-full h-screen flex flex-col md:flex-row items-center justify-center bg-black px-4"
            id="next-section"
          >
            <div className="limg relative w-full md:w-1/2 h-full flex items-center justify-center">
              <img
                className="absolute top-0  scale-[1.1] max-w-full max-h-full"
                src="./imag.png"
                alt=""
              />
            </div>
            <div className="rg w-full md:w-[50%] px-5 sm:px-10 py-10">
              <h1 className="text-4xl md:text-6xl xl:text-8xl text-white heading-shadow">
                Still Running,
              </h1>
              <h1 className="text-4xl md:text-6xl xl:text-8xl text-white heading-shadow">
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
              <a href="https://www.rockstargames.com/VI" target="_blank" rel="noopener noreferrer">
              {/* <button className="bg-yellow-400 px-5 sm:px-10 py-3 sm:py-4 text-black mt-5 sm:mt-7 text-2xl sm:text-3xl">
                Download Now
              </button> */}
              <ButtonCreative/>
              </a>
            </div>
          </div>

          <AboutInfo/>                  
          <WhatsNew/>         
          <CarouselSize/>
          <TrailerVideo/>

          <div className="py-16">
          <Parallaxgta/>
          </div>

          <div className="w-full my-10 bg-yellow-500 text-black py-14 sm:py-16 sm:px-10 text-center">
            <h2 className="text-3xl sm:text-5xl font-light mb-4">Ready to Hit the Streets?</h2>
            <p className="text-md sm:text-lg mb-6">Pre-order Grand Theft Auto VI now and get exclusive in-game rewards.</p>
            <div className="flex justify-center">
              <a href="https://www.rockstargames.com/gta-v?info=order" target="_blank" rel="noopener noreferrer">
              <ShimmerButtonDemo/>
              </a>
            </div>
          </div>

        <GTACharacters/>
        <GtaShop/>   
          
        <div className="relative hidden md:block">
           <div className=" md:fixed md:top-[700px] xl:top-[64rem] md:left-[32px] z-50">
              <TextCirclePreview/>
            </div>
        </div>
     
         {/* <Footer/>          */}

    {showScrollTop && (
      
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-[10px] right-[14px] z-50 bg-fuchsia-500 hover:bg-purple-600/70 text-black p-1.5 rounded-full shadow-lg transition-transform hover:scale-110"
        aria-label="Scroll to top"
        >
        <ChevronsUpIcon/>
      </button>
        
    )}
         
        </div>
      )}
    </>
  );
}

export default App;
