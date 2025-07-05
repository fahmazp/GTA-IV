import { motion } from "framer-motion";
import { Bot, CogIcon, Crown, Film, Gamepad2, Gem, Globe, Hammer, Heart, Moon, Phone, Smartphone, Trophy, Twitter, Worm } from "lucide-react";

const memeItems = [
  { text: "Elon bought Twitter", icon: <Twitter /> },
  { text: "COVID came and left", icon: <Worm /> },
  { text: "Queen Elizabeth died", icon: <Crown /> },
  { text: "RCB finally won the IPL", icon: <Heart /> },
  { text: "ChatGPT dropped… thrice.", icon: <Bot /> },
  { text: "India landed on the Moon", icon: <Moon /> },
  { text: "Barbenheimer happened", icon: <Film /> },
  { text: "Minecraft had 7 major updates", icon: <Hammer /> },
  { text: "Kanye got married again", icon: <Gem /> },
  { text: "Cyberpunk got fixed... kinda", icon: <CogIcon /> },
  { text: "Rockstar accidentally leaked GTA 6", icon: <Gamepad2 /> },
  { text: "PSG won the Champions League", icon: <Trophy /> },
  { text: "We got iPhone 20 Ultra Max Pro Fold", icon: <Smartphone /> },
  { text: "Built this before GTA 6 dropped", icon: <Globe /> },
  { text: "Still no GTA 6…" },
];

const MemeSection = () => {
  return (
    <section
      id="meme"
      className="bg-black text-white py-12 px-6 sm:px-16"
    >
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-5xl text-yellow-400 mb-2">
          Things We Got Before GTA 6
        </h2>
        <p className="text-gray-300">
          A painful timeline of what humanity accomplished while waiting.
        </p>
        <p className="text-gray-300">Earth kept moving. GTA 6 didn't</p>
      </div>

      <div className="grid gap-2 md:gap-4 grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {memeItems.map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col md:flex-row items-center bg-gradient-to-bl from-[#0f172a] via-[#1e1a78] to-[#0f172a] p-1 md:p-4 justify-center gap-2 rounded-sm tracking-wider shadow-lg text-center"
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
    </section>
  );
};

export default MemeSection;
