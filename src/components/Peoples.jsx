export default function GTACharacters() {
  const characters = [
      {
          name: "Jason Burns",
          role: "Getaway Driver",
          image: "/people/char1.png",
          description: "Can drift through tight corners like they’re nothing. Silent but deadly.",
          status: "Wanted",
        },
        {
            name: "Karl Mercer",
            role: "Tech Specialist",
            image: "/people/char3.jpg",
            description: "Brains behind every heist. If it’s digital, he owns it.",
            status: "Off Grid",
        },
        {
            name: "Leon McReary",
            role: "Patrolling",
            image: "/people/char4.jpg",
            description: "Highly decorated, yet highly corrupt agent from the FIB.",
            status: "Alive",
        },
        {
          name: "Lucy DeVito",
          role: "Hustler",
          image: "/people/char5.png",
          description: "Fierce, determined, and street-smart. She's not just surviving—she's scheming for a better life.",
          status: "Wanted",
        },
              {
          name: "Darius Cole",
          role: "Entrepreneur - Fixer",
          image: "/people/char6.png",
          description: "Charismatic and smooth, but all business when it counts. A key player in the City's nightlife and music scene.",
          status: "Wanted",
        },
        {
          name: "Walter McCoy",
          role: "Veteran Smuggler",
          image: "/people/char7.jpg",
          description: "Slick and seasoned, he is the classic underworld elder—he doesn’t pull the trigger, but he decides who does.",
          status: "Alive",
        },
  ];

const statusColors = {
  Wanted: "bg-red-600",
  "Off Grid": "bg-zinc-500",
  Alive: "bg-emerald-600",
};


  return (
    <section className="my-10 pt-16 px-4 text-white" id="characters">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl text-center mb-12">
          Meet the <span className="text-fuchsia-600">Characters</span>
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {characters.map((char, index) => (
            <div
              key={index}
              className="bg-slate-950 rounded-lg overflow-hidden shadow-[inset_2px_2px_10px_2px_rgba(195,74,201,0.15)] hover:shadow-[0px_0px_0px_2px_#00ffff,0px_0px_0px_4px_#ff00ff] transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={char.image}
                  alt={char.name}
                  className="w-full sm:h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className={`absolute top-2 right-2 bg-fuchsia-600 text-xs md:text-sm px-3 py-1 rounded-full tracking-wide uppercase ${statusColors[char.status]}`}>
                  {char.status}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl md:text-3xl font-medium tracking-wide">{char.name}</h3>
                <p className="text-fuchsia-600 font-semibold mb-2">{char.role}</p>
                <p className="text-sm text-zinc-300">{char.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
