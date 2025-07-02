export default function TrailerVideo() {
  return (
        <div className="w-full bg-black py-10 px-6 sm:px-20 text-white" id="trailer">
            <h2 className="text-white text-2xl md:text-3xl text-center">Watch the Madness</h2>

            <div className="w-full mt-8 px-2 md:px-5 h-[300px] sm:h-[520px] relative bg-black overflow-hidden">
              <iframe
                className="w-full h-full object-cover rounded-xl"
                src="https://www.youtube.com/embed/VQRLujxTm3c?si=3Prran0KIN5DGpFM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
              </iframe>
            </div>
        </div>
  )
}