import * as React from "react"
import AutoScroll from "embla-carousel-auto-scroll"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import jenny from "@/assets/images/jenny.webp"
import erik from "@/assets/images/erik.webp"
import hafijur from "@/assets/images/hafijur.webp"
import jonas from "@/assets/images/jonas.webp"

const Testimonials = [
  {
    recommendation:
      "“Mustafa is an experienced developer with a strong sense of leadership and commitment. He’s a pleasure to work with, always bringing positive energy and a collaborative attitude to the team.”",
    name: "Jenny Hall",
    role: "Product Manager",
    company: "Tele 2",
    image: jenny.src,
    cite: "",
  },
  {
    recommendation:
      "“What sets Mustafa apart is his passion for frontend development. He continually strives to improve his skills and delivers projects reliably, on time, and within budget, showing his dedication and high level of expertise.”",
    name: "Erik Lydecker",
    role: "Founder | Advisor | Investor",
    company: "Bridgeblock Capital",
    image: erik.src,
    cite: "",
  },
  {
    recommendation:
      "“I worked closely with Mustafa and can say that he’s one of the most talented frontend developers I’ve encountered. His attention to detail, creative problem-solving, and ability to transform designs into user-friendly interfaces make him a key asset to any team.”",
    name: "Mohammad Hafijur Rahman",
    company: "RCO Security",
    role: "Tech Lead",
    image: hafijur.src,
    cite: "",
  },
  {
    recommendation:
      "“I worked with Musse for over a year and highly recommend him. He has a deep interest in design and always brings positive energy to the team. He’s responsible, ensures timely implementation, and is a pleasure to work with.”",
    name: "Jonas Fornander",
    role: "Technical Project Manager",
    company: "",
    image: jonas.src,
    cite: "",
  },
]

export function TestimonialCarousel() {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[AutoScroll({ playOnInit: true, stopOnInteraction: false })]}
      className="w-full carousel"
    >
      {/* <div className="w-20 h-full absolute left-0 top-0 bg-gradient-to-r from-white to-white/70 z-10"></div> */}
      <CarouselContent className="touch-pan-y touch-pinch-zoom">
        {Testimonials.map((testimonial, index) => (
          <CarouselItem
            key={index}
            className="min-w-0 flex-grow-0 flex-shrink-0 basis-auto"
          >
            <div className="bg-gray-50 dark:bg-neutral-900 p-10 max-w-lg rounded-3xl">
              <blockquote cite={testimonial.cite} className="">
                <p className="italic leading-6">{testimonial.recommendation}</p>
              </blockquote>

              <div className="mt-10 flex items-center gap-4">
                <img
                  className="rounded-full"
                  src={testimonial.image}
                  alt={testimonial.name}
                  width="50"
                  height="50"
                  loading="eager"
                />
                <div className="flex flex-col">
                  <p>{testimonial.name}</p>
                  <cite className="opacity-70">
                    {testimonial.role}, {testimonial.company}
                  </cite>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious />
      <CarouselNext /> */}
    </Carousel>
  )
}
