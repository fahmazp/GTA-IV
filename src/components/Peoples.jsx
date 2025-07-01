export default function GTACharacters() {
  const characters = [
      {
          name: "Jason Derulo",
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
            description: "Brains behind every heist. If it’s digital, he owns it.",
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
          name: "Darnell Harris",
          role: "Entrepreneur - Fixer",
          image: "/people/char6.png",
          description: "Charismatic and smooth, but all business when it counts. A key player in the City's nightlife and music scene.",
          status: "Alive",
        },
        {
          name: "Walter McCoy",
          role: "Smuggler",
          image: "/people/char2.jpg",
          description: "Slick and seasoned, looks like a laid-back beach bum, but operates like a shark beneath the surface.",
          status: "Alive",
        },
  ];

  return (
    <section className="py-16 px-4 text-white" id="characters">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Meet the <span className="text-fuchsia-600">Characters</span>
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {characters.map((char, index) => (
            <div
              key={index}
              className="bg-slate-950 rounded-lg overflow-hidden shadow-lg hover:shadow-fuchsia-600/40 transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={char.image}
                  alt={char.name}
                  className="w-full sm:h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-2 right-2 bg-fuchsia-600 text-xs md:text-sm px-3 py-1 rounded-full tracking-wide uppercase">
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
