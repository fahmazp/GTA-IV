import { Bolt, Gamepad, Gamepad2, Infinity } from "lucide-react";

export default function AboutInfo() {
  return (
    <div className="w-full bg-black py-10 px-6 sm:px-20 text-white" id="About">
      <h2 className="text-3xl md:text-5xl text-center mb-5 md:mb-7">
        Welcome to Vice City - Reimagined.
      </h2>
      <p className="mb-3">
        Step into the most ambitious Grand Theft Auto experience ever made. GTA
        VI brings you back to the sun-soaked streets of Vice City, redefined for
        a new generation. Powered by cutting-edge technology, every moment is
        more immersive, more dynamic, and more dangerous than ever before.
      </p>

      <h4 className="text-xl tracking-wide text-center sm:text-left">Explore Without Limits <Infinity className="inline text-yellow-400 size-6"/> - </h4>
      <p className="pb-2">Roam a fully open world with zero loading screens, real-time weather, and AI-driven NPCs that react to your choices.</p>

      <h4 className="text-xl tracking-wide text-center sm:text-left">Multiplayer Like Never Before <Gamepad2 className="inline text-yellow-400 size-5"/> - </h4>
      <p className="pb-2">Drop in, squad up, and dominate the city with seamless online co-op and competitive modes.</p>

      <h4 className="text-xl tracking-wide text-center sm:text-left">Next-Gen Everything <Bolt className="inline text-yellow-400 size-5"/> - </h4>
      <p className="pb-2">Built for PS5, Xbox Series X|S, and high-end PCs — featuring ray tracing, ultra-detailed environments, and cinematic realism.</p>
    </div>
  );
}
