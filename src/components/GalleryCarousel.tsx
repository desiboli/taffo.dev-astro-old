import * as React from "react"
import AutoScroll from "embla-carousel-auto-scroll"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import portrait from "@/assets/images/portrait.webp"
import portrait2 from "@/assets/images/portrait2.webp"
import portrait3 from "@/assets/images/portrait3.webp"
import portrait4 from "@/assets/images/portrait4.webp"
import portrait5 from "@/assets/images/portrait5.webp"

const gallery = [
  { image: portrait.src, alt: "Me and my son." },
  { image: portrait2.src, alt: "My family under a tree." },
  { image: portrait3.src, alt: "Me and my pregnant girlfriend." },
  { image: portrait4.src, alt: "Me and my sister." },
  { image: portrait5.src, alt: "Me and my pregnant girlfriend." },
]

export function GalleryCarousel() {
  return (
    <Carousel
      opts={{
        loop: true,
        watchDrag: false,
        containScroll: "trimSnaps",
      }}
      plugins={[
        AutoScroll({
          playOnInit: true,
          stopOnInteraction: false,
          stopOnFocusIn: false,
        }),
      ]}
      className="max-w-7xl mx-auto py-10 carousel"
    >
      <CarouselContent className="touch-pan-y touch-pinch-zoom ove">
        {gallery.map((item, index) => (
          <CarouselItem
            key={index}
            className="min-w-0 flex-grow-0 flex-shrink-0 basis-auto overflow-hidden"
          >
            <img src={item.image} alt={item.alt} className="rounded-3xl" />
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious />
      <CarouselNext /> */}
    </Carousel>
  )
}
