import { Bolt, Gamepad, Gamepad2, Infinity } from "lucide-react";
import { CarouselSize } from "./ImagesCarousel";

export default function AboutInfo() {
  return (
    <div className="w-full bg-black py-10 px-6 sm:px-20 text-white" id="About">
      <h2 className="text-3xl md:text-5xl text-center mb-5 md:mb-7">
        Welcome to Vice City - <span className="text-fuchsia-500">Reimagined.</span>
      </h2>
      <p className="mb-3">
        Step into the most ambitious <span className="text-fuchsia-500">Grand Theft Auto</span> experience ever made. GTA
        VI brings you back to the sun-soaked streets of <span className="text-fuchsia-500">Vice City</span>, redefined for
        a new generation. Powered by cutting-edge technology, every moment is
        more immersive, more dynamic, and more dangerous than ever before.
      </p>
      <p>
        Enjoy new high-performance vehicle upgrades and improvements like the Career Builder as well as all GTA Online gameplay upgrades,
        expansions, and content released since launch, ready to enjoy solo or with friends. Pull off daring co-operative Heists, enter adrenaline-fueled Stunt Races,
        compete in unique Adversary Modes, or hang out in social spaces including nightclubs, arcades, penthouse parties, car meetups, and much more
        {/* <Infinity className="ml-2 inline text-fuchsia-500 size-6"/> */}
        <Gamepad2 className="mx-1 inline text-fuchsia-500 size-6"/>.
      </p>

    </div>
  );
}
