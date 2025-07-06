import { motion } from "framer-motion";
import { Bot, CogIcon, Crown, Film, Gamepad2, Gem, Globe, Hammer, Heart, Moon, Phone, Smartphone, Trophy, Twitter, Worm } from "lucide-react";

const memeItems = [
  { text: "Elon bought Twitter", icon: <Twitter size={18} /> },
  { text: "COVID came and left", icon: <Worm size={18} /> },
  { text: "Queen Elizabeth died", icon: <Crown size={18} /> },
  { text: "RCB finally won the IPL", icon: <Heart size={18} /> },
  { text: "ChatGPT dropped… thrice.", icon: <Bot size={18} /> },
  { text: "India landed on the Moon", icon: <Moon size={18} /> },
  { text: "Barbenheimer happened", icon: <Film size={18} /> },
  { text: "Minecraft had 7 major updates", icon: <Hammer size={18} /> },
  { text: "Kanye got married again", icon: <Gem size={18} /> },
  { text: "Cyberpunk got fixed... kinda", icon: <CogIcon size={18} /> },
  { text: "Rockstar accidentally leaked GTA 6", icon: <Gamepad2 size={18} /> },
  { text: "PSG won the Champions League", icon: <Trophy size={18} /> },
  { text: "We got iPhone 20 Ultra Max Pro Fold", icon: <Smartphone size={18} /> },
  { text: "Built this before GTA 6 dropped", icon: <Globe size={18} /> },
  { text: "Still no GTA 6…" },
];

const MemeSection = () => {
  return (
    <section
      id="timeline"
      className="bg-black text-white py-12 px-6 sm:px-16"
    >
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-5xl text-yellow-400 mb-2">
          Things We Got Before GTA 6
        </h2>
        <p className="text-gray-300 italic">
          A painful timeline of what humanity accomplished while waiting.
        </p>
        <p className="text-gray-300 italic">Earth kept moving. GTA 6 didn't</p>
      </div>

      <div className="grid gap-2 md:gap-4 grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {memeItems.map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col md:flex-row items-center font-bold bg-gradient-to-bl from-[#0f172a] via-[#1e1a78] to-[#0f172a] p-1 md:p-4 justify-center gap-2 rounded-sm shadow-lg text-center meme-timeline-font 
            transition duration-200 ease-in-out hover:animate-[glitch_0.5s_ease-in-out_infinite]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.08,
              ease: "easeOut"
            }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <span className={item.text === "Still no GTA 6…" ? "text-red-400 text-xl" : "text-white"}>
              {item.text}
            </span>
            <span>{item.icon}</span>
          </motion.div>
        ))}
      </div>

        <p className="mt-8 text-center text-sm text-zinc-500 italic">
          Still waiting... and aging.
        </p>


    </section>
  );
};

export default MemeSection;
