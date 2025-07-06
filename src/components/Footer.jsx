import { GradientBars } from "./ui/gradient-bars";

const GradientBarFooter = () => {
  return (
    <footer className="relative w-full h-[400px] md:h-[350px] mt-12 overflow-hidden bg-black text-white flex items-center justify-center">
      <GradientBars bars={24} colors={["#8f0feb", "transparent"]} />

      {/* Content Layer */}
      <div className="relative z-10 text-center ">
        <h2></h2>
        <p className="text-sm md:text-base text-white/80">
          © {new Date().getFullYear()} Made with hope... ✨
        </p>
        <p className="text-xs text-white/50">
          Built by <a href="#" className="text-red-500"> Fahmaz Ashraf.</a>
        </p>
        <p className="text-xs text-white/40 mt-2">May contain content inappropriate for children.
        </p>
        
      <div className="flex items-center justify-center">
        <img src="/logo-1.png" className="w-20 md:w-24" alt="" />
      </div>
      <p className="text-sm md:text-base bg-gradient-to-r from-yellow-500 via-blue-500 to-indigo-100 text-transparent bg-clip-text">Loading… May 26, 2026</p>
      </div>

      <div className="absolute bottom-2 w-full pb-2 px-4 sm:px-16 text-center text-xs text-zinc-400 leading-snug">
        <p>
          *This is a fan-made, satirical website. All trademarks and copyrights
          referenced (e.g., Grand Theft Auto, Rockstar Games) are the property
          of their respective owners. No affiliation or endorsement is implied.
        </p>
      </div>

    </footer>
  );
};

export default GradientBarFooter;
