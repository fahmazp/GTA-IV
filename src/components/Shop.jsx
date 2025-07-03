export default function GtaShop() {

const weapons = [
      {
          name: "Sniper Rifle",
          role: "Rifle",
          image: "/shop/sniper.jpeg",
          description: "Standard sniper rifle. High damage, long range. Perfect for stealth kills. Ideal for situations that require accuracy at long range",
        },
        {
          name: "Rocket Launcher",
          role: "Launcher",
          image: "/shop/launcher.jpeg",
          description: "The Rocket Launcher or RPG, is a heavy weapon featured in every GTA game, being the most basic explosive weapon in the series.",
        },
        {
          name: "Minigun",
          role: "Rotary machine gun",
          image: "/shop/minigun.jpeg",
          description: "The Minigun is a recurring machine gun in the GTA franchise, based on various US minigun models, appearing as a heavy weapon since its introduction.",
        },
        {
          name: "Grenade",
          role: "Fragmentation Grenade",
          image: "/shop/grenade.jpg",
          description: "Grenades are throwable devices which have been featured in every GTA since GTA 2. Ideal for eliminating clustered assailants.",
        },        
        {
          name: "Baseball Bat",
          role: "Bat",
          image: "/shop/bat.jpeg",
          description: "The Baseball Bat is a common melee weapon present in every GTA game since GTA 3. Lightweight yet powerful for all you big hitters out there.",
        },
        {
          name: "AK47",
          role: "Assault rifle",
          image: "/shop/ak47 (2).jpg",
          description: "AK47 is an assault rifle appearing in GTA. The weapon is designed after the real-world AK-47 or one of its many variants",
        },
        {
          name: "Flamethrower",
          role: "Getaway Driver",
          image: "/shop/sniper.png",
          description: "The Flamethrower is a weapon that has appeared in every GTA game. When bullets, shells, and explosives won't get the job done, burn it down!...",
        },                        
  ];

const vehicles = [
      {
          name: "Infernus",
          image: "/shop/Infernus-GTA.webp",
          v_type: "Civilian car",
          description: "The Infernus is a supercar that was introduced in GTA 3 and has appeared in every GTA title since and has gained a reputation for being one of the oldest sports cars to still be in a vast number of GTA titles.",
          class: "Super"
        },
      {
          name: "Bullet",
          image: "/shop/bulletGTA-2.webp",
          v_type: "Civilian car",
          description: "The Bullet is a supercar appeared throughout the GTA. It's design closely resembles a 2005 Ford GT, judging by the overall design, rear side intakes and rear fascia, although it has circular headlights and a standard hood",
          class: "Super"
        },        
      {
          name: "Rapid GT",
          image: "/shop/rapidGT.webp",
          v_type: "Civilian car",
          description: "The Dewbauchee Rapid GT is a two-door luxury coupé featured in GTA V and GTA Online. It's the ultimate blend of luxury, refinement and breeding, GT is British supercar that's as superior and classist as its fellow countrymen.",
          class: "Sports"
        },       
      {
          name: "Rat-Truck",
          image: "/shop/truck.webp",
          v_type: "Civilian truck",
          description: "Rat-Truck is a pickup truck featured in GTA V. This pickup looks fresh off the lot—like you're hauling moonshine with the weight of a riding shotgun. The Rat-Truck is a cleaned-up, restored version of the Rat-Loader, with the same chassis, front, and cabin.",
          class: "Muscle"
        },  
      {
          name: "Carbon RS",
          image: "/shop/Carbon-GTA.webp",
          v_type: "Street motorcycle",
          description: "The Nagasaki Carbon RS is a sport bike appearing in GTA. Carbon is extra lightweight because of its carbon body, resulting in a very fine line between joy to drive and infernal deathtrap.",
          class: "Motorcycle"
        },               
      {
          name: "Asea",
          image: "/shop/Asea-GTA.webp",
          v_type: "Compact car",
          description: "Asea is a compact four-door sedan in GTA. An affordable, no frills, fuel-efficient compact sedan. When 'ample headroom' is central to the marketing campaign, what you see is what you get.",
          class: "Sedan"
        },            
    ]

  return (
    <section className="my-10 pt-16 px-8 text-white" id="shop">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl text-center mb-12">
          <span className="text-fuchsia-600">Weapons & </span>Vehicles
        </h2>
        <h5 className="text-center text-3xl mb-4 underline">Weapons</h5>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">

        {weapons.map((prod, index) => (
          <div
          key={index}
           className="bg-gray-950 rounded-lg overflow-hidden shadow-[inset_2px_2px_10px_2px_rgba(195,74,201,0.15)] hover:shadow-[0px_0px_0px_2px_#00ffff,0px_0px_0px_4px_#ff00ff] transition-all duration-300 group">

          <div className="relative ">
            <img
              src={prod.image}
              alt={prod.name}
              className="w-full h-60 object-cover mb-4 group-hover:scale-105 transition-transform duration-300"
              />
          </div>
          <div className="px-3">
            <h3 className="text-2xl tracking-wide text-center">{prod.name}</h3>
            <p className="text-sm text-fuchsia-500 text-center">{prod.role}</p>
            <p className="text-sm text-gray-300 text-center mb-3">{prod.description}</p>
          </div>
          </div>
        ))}
        </div>

        <div className="py-10">
        <h5 className="text-center text-3xl mb-4 text-fuchsia-500/90 underline">Vehicles</h5>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-4 max-w-7xl mx-auto">

        {vehicles.map((prod2, index) => (
          <div
          key={index}
           className="bg-gray-950 rounded-lg overflow-hidden shadow-[inset_2px_2px_10px_2px_rgba(195,74,201,0.15)] hover:shadow-[0px_0px_0px_2px_#00ffff,0px_0px_0px_4px_#ff00ff] transition-all duration-300 group">
          <div className="relative ">
            <img
              src={prod2.image}
              alt={prod2.name}
              className="w-full h-50 object-cover mb-4 group-hover:scale-105 transition-transform duration-300"
              />

                <span className="absolute top-2 right-2 bg-indigo-700 text-xs md:text-sm px-2.5 py-0.5 rounded-full tracking-wide uppercase">
                  {prod2.class}
                </span>
          </div>

          <div className="px-3">
            <h3 className="text-2xl tracking-wide text-center">{prod2.name}</h3>
            <p className="text-sm text-fuchsia-500 text-center">{prod2.v_type}</p>
            <p className="text-sm text-gray-300 text-center mb-3">{prod2.description}</p>
          </div>

          </div>
        ))}
        </div>
        </div>
        
      </div>
    </section>
  );
}
