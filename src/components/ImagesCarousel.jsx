import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import useEmblaCarousel from "embla-carousel-react";

const imageUrls = [
    "/images/slides(4).jpg",
    "/images/slides(2).jpeg",
    "/images/slides(3).jpeg",
    "/images/slides(1).jpg",
    "/images/slides(5).jpg",
]

export function CarouselSize() {
// const autoplay = React.useRef(Autoplay({ delay: 3000, stopOnInteraction: true }))
  const [emblaRef] = useEmblaCarousel({ loop: true })

  return (
    <div className="max-w-6xl mx-auto py-10 px-14 sm:px-20">

    <Carousel opts={{ loop: true }} className="w-full" setRef={emblaRef}>
      <CarouselContent className="-ml-4 flex">
        {imageUrls.map((src, index) => (
          <CarouselItem
            key={index}
            className="pl-4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
          >
            <div className="p-1">
              <Card className="bg-black p-2">
                <CardContent className="aspect-square p-2 flex items-center justify-center">
                  <img
                    src={src}
                    alt={`Carousel Image ${index + 1}`}
                    className="object-cover w-full h-full rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </div>
  );
}
