import * as React from "react"
import AutoScroll from "embla-carousel-auto-scroll"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import portrait from "../assets/images/portrait.jpg"
import portrait2 from "../assets/images/portrait2.jpg"
import portrait3 from "../assets/images/portrait3.jpg"
import portrait4 from "../assets/images/portrait4.jpg"
import portrait5 from "../assets/images/portrait5.jpg"

const gallery = [
  portrait.src,
  portrait2.src,
  portrait3.src,
  portrait4.src,
  portrait5.src,
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
      className="max-w-7xl mx-auto py-10"
    >
      <CarouselContent className="touch-pan-y touch-pinch-zoom">
        {gallery.map((item, index) => (
          <CarouselItem
            key={index}
            className="min-w-0 flex-grow-0 flex-shrink-0 basis-auto"
          >
            <img src={item} alt="A starry night sky." />
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious />
      <CarouselNext /> */}
    </Carousel>
  )
}
