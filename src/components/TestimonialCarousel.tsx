import * as React from "react"
import AutoScroll from "embla-carousel-auto-scroll"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import jenny from "../assets/images/jenny.jpg"
import erik from "../assets/images/erik.jpg"
import hafijur from "../assets/images/hafijur.jpg"

const Testimonials = [
  {
    recommendation:
      "“Mustafa is an experienced developer with leadership instinct and commitment and also very fun to work with.”",
    name: "Jenny Hall",
    role: "Product Manager",
    company: "Tele 2",
    image: jenny.src,
  },
  {
    recommendation:
      "“What sets Mustafa apart from other Front-end Developers is his passion for his work. He is always looking for ways to improve his skills and knowledge, and his drive to stay ahead of the curve is evident in the quality of his work. He is not only highly skilled but also very reliable and takes pride in delivering projects on time and within budget.”",
    name: "Erik Lydecker",
    role: "Founder | Advisor | Investor",
    company: "Bridgeblock Capital",
    image: erik.src,
  },
  {
    recommendation:
      "“I had the pleasure of working closely with Mustafa during his work at the Dinbox. I can confidently say that he is one of the most talented and dedicated frontend developers I’ve ever had the opportunity to work with. Mustafa consistently demonstrated a deep understanding of frontend technologies. His attention to detail is impeccable, and he has a natural ability to turn complex design concepts into intuitive, user-friendly interfaces. He has a keen eye for design and a thorough understanding of UX principles. He tackles challenges with creativity and always finding innovative solutions to ensure that the end product not only meets but exceeds expectations. Beyond his technical skills, Mustafa is an exceptional team player and a top-tier frontend developer who would be an asset to any team. I highly recommend Mustafa for any role where frontend expertise, creativity, and a collaborative spirit are valued.”",
    name: "Mohammad Hafijur Rahman",
    company: "RCO Security",
    role: "Tech Lead",
    image: hafijur.src,
  },
  {
    recommendation:
      "“What sets Mustafa apart from other Front-end Developers is his passion for his work. He is always looking for ways to improve his skills and knowledge, and his drive to stay ahead of the curve is evident in the quality of his work. He is not only highly skilled but also very reliable and takes pride in delivering projects on time and within budget.”",
    name: "Erik Lydecker",
    role: "Founder | Advisor | Investor",
    company: "",
    image: erik.src,
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
      className="w-full"
    >
      <CarouselContent className="touch-pan-y touch-pinch-zoom">
        {Testimonials.map((testimonial, index) => (
          <CarouselItem
            key={index}
            className="min-w-0 flex-grow-0 flex-shrink-0 basis-auto"
          >
            <div className="bg-gray-50 p-10 max-w-lg rounded-3xl">
              <blockquote>{testimonial.recommendation}</blockquote>

              <div className="mt-10 flex items-center gap-4">
                <img
                  className="rounded-full"
                  src={testimonial.image}
                  alt="A bird sitting on a nest of eggs."
                  width="80"
                  height="80"
                  loading="eager"
                />
                <div className="flex flex-col">
                  <span>{testimonial.name}</span>
                  <span className="opacity-70">
                    {testimonial.role}, {testimonial.company}
                  </span>
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
