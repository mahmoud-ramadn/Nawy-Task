"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Image from "next/image";
import gsap from "gsap";

export default function NeverVistYourBank() {
  const containerRef = useScrollAnimation<HTMLDivElement>(
    (element) => {
      const tl = gsap.timeline();

      // Animate top icons (first two images)
      tl.from(element.querySelectorAll(".animate-icon"), {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
      });

      // Animate heading
      tl.from(
        element.querySelector(".animate-heading"),
        {
          y: 40,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
        },
        "-=0.8"
      );

      // Animate paragraph
      tl.from(
        element.querySelector(".animate-paragraph"),
        {
          y: 30,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.9"
      );

      // Animate the large recurring payments image (slides in from right)
      tl.from(
        element.querySelector(".animate-large-image"),
        {
          x: 200,
          opacity: 0,
          duration: 1.5,
          ease: "power4.out",
        },
        "-=0.7"
      );

      return tl;
    },
    { start: "top 85%" }
  );

  return (
    <div
      ref={containerRef}
      className="bg-primary md:pt-36 pt-20 pb-12 relative"
    >
      <div className="container relative">
        <div className="flex items-center flex-wrap gap-y-7 gap-x-7">
          <Image
            src="/icon-computer.svg.svg"
            alt="icon computer"
            width={75}
            height={75}
            className="animate-icon"
          />
          <Image
            src="/InputWebstieLink.svg"
            alt="icon computer"
            width={690}
            height={75}
            className="animate-icon"
          />
        </div>
        <h1 className="animate-heading text-white max-w-[792px] mt-16 md:ml-24 md:text-8xl text-4xl font-bold">
          Never visit your Bank’s website again.
        </h1>
        <p className="animate-paragraph text-white font-semibold max-w-[272px] mt-16 md:ml-24 text-lg">
          As great as our bank’s infrastructures are, they still haven’t caught
          up with the rest of the industry, software wise. Good thing, they
          don’t have to anymore.
        </p>
        <Image
          src="/RecurringPayments.svg"
          alt="Recurring Payments"
          width={894}
          height={687}
          className="animate-large-image md:absolute md:right-0 md:z-10 mt-20 md:-bottom-[32rem]"
        />
      </div>
    </div>
  );
}
