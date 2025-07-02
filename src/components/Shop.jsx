export default function GtaShop() {

const weapons = [
      {
          name: "Sniper Rifle",
          role: "Getaway Driver",
          image: "/shop/sniper.png",
          description: "Standard sniper rifle. High damage, long range. Perfect for stealth kills. Ideal for situations that require accuracy at long range",
        },
        {
          name: "Rocket Launcher",
          role: "Getaway Driver",
          image: "/shop/sniper.png",
          description: "The Rocket Launcher or RPG, is a heavy weapon featured in every GTA game, being the most basic explosive weapon in the series.",
        },
        {
          name: "Minigun",
          role: "Getaway Driver",
          image: "/shop/sniper.png",
          description: "The Minigun is a recurring machine gun in the GTA franchise, based on various US minigun models, appearing as a heavy weapon since its introduction.",
        },
        {
          name: "Grenade",
          role: "Getaway Driver",
          image: "/shop/sniper.png",
          description: "Grenades are throwable devices which have been featured in every GTA since GTA 2. Ideal for eliminating clustered assailants.",
        },        
        {
          name: "Baseball Bat",
          role: "Getaway Driver",
          image: "/shop/sniper.png",
          description: "The Baseball Bat is a common melee weapon present in every GTA game since GTA 3. Lightweight yet powerful for all you big hitters out there.",
        },
        {
          name: "AK47",
          role: "Getaway Driver",
          image: "/shop/sniper.png",
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
          image: "/shop/infernus.png",
          v_type: "Civilian car",
          description: "The Infernus is a supercar that was introduced in GTA 3 and has gained a reputation for being one of the oldest sports cars to still be in a vast number of GTA titles.",
          class: "Super"
        },
      {
          name: "Banshee",
          image: "/shop/banshee.png",
          v_type: "Sports car",
          description: "The Banshee has appeared throughout the GTA, returning from the 3D Universe. It shares its reputation with the Infernus for being one of the two longest running sports cars in the series.",
          class: "Sports"
        },        
      {
          name: "Rapid GT",
          image: "/shop/infernus.png",
          v_type: "Civilian car",
          description: "The Dewbauchee Rapid GT is a two-door luxury coupé featured in GTA V and GTA Online. A British supercar that's as superior and classist as its fellow countrymen.",
          class: "Sports"
        },       
      {
          name: "Rat-Truck",
          image: "/shop/infernus.png",
          v_type: "Civilian truck",
          description: "Rat-Truck is a pickup truck featured in GTA V and GTA Online. This pickup looks fresh off the lot—like you're hauling moonshine with the weight of the Great riding shotgun.",
          class: "Muscle"
        },         
    ]

  return (
    <section className="my-10 pt-16 px-4 text-white" id="shop">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl text-center mb-12">
          <span className="text-fuchsia-600">Weapons & </span>Vehicles
        </h2>
        <h5 className="text-center text-3xl mb-4 underline">Weapons</h5>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-4 max-w-7xl mx-auto">

        {weapons.map((prod, index) => (
          <div
          key={index}
           className="bg-black border border-yellow-500 p-4 rounded-xl shadow-md hover:scale-105 transition-all">
            <img
              src={prod.image}
              alt={prod.name}
              className="w-full h-40 object-contain mb-4"
            />
            <h3 className="text-2xl tracking-wide text-center">{prod.name}</h3>
            <p className="text-sm text-gray-300 text-center">{prod.description}</p>
          </div>
        ))}
        </div>

        <div className="py-10">
        <h5 className="text-center text-3xl mb-4 text-fuchsia-500/90 underline">Vehicles</h5>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-4 max-w-7xl mx-auto">

        {vehicles.map((prod2, index) => (
          <div
          key={index}
           className="bg-black border border-yellow-500 p-4 rounded-xl shadow-md hover:scale-105 transition-all">
            <img
              src={prod2.image}
              alt={prod2.name}
              className="w-full h-40 object-contain mb-4"
            />
            <h3 className="text-2xl tracking-wide text-center">{prod2.name}</h3>
            <p className="text-sm text-gray-300 text-center">{prod2.description}</p>
          </div>
        ))}
        </div>
        </div>
        
      </div>
    </section>
  );
}
