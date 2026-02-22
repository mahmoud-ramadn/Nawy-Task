"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Image from "next/image";
import gsap from "gsap";

export default function InformDelight() {
  const containerRef = useScrollAnimation<HTMLDivElement>(
    (element) => {
      const tl = gsap.timeline();

      // Animate top paragraph
      tl.from(element.querySelector(".animate-top-p"), {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // Animate left column items (icon, heading, paragraph) with stagger
      tl.from(
        element.querySelectorAll(".animate-left-item"),
        {
          y: 40,
          opacity: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
        },
        "-=0.8"
      );

      // Animate phone image (scale + fade)
      tl.from(
        element.querySelector(".animate-phone"),
        {
          scale: 0.8,
          opacity: 0,
          duration: 1.2,
          ease: "back.out(1.7)",
        },
        "-=0.7"
      );

      return tl;
    },
    { start: "top 85%" }
  );

  return (
    <div ref={containerRef} className="pt-12 container">
      <p className="animate-top-p max-w-[805px] mx-auto text-primary text-center text-2xl">
        Just type in McDonald's for example and see all the times you have spent
        at McDonald's. Then type Gym Membership, realise there's no such
        transactions. Look yourself in the mirror, stop eating from McDonald's
        so much.
      </p>
      <div className="mt-28 grid md:grid-cols-2 grid-cols-1 gap-4 items-center gap-x-32">
        <div className="space-y-6">
          <Image
            src="/graph-icon.svg"
            alt="graph icon"
            width={64}
            height={64}
            className="animate-left-item mx-auto"
          />
          <h2 className="animate-left-item text-primary md:text-8xl text-4xl font-bold">
            Inform & Delight.
          </h2>
          <p className="animate-left-item text-primary md:text-2xl text-lg">
            Understand your financial health without drowning in numbers. Each
            nosedive, each swooping rise and each calm plateau gives real
            actionable insights. Take decisions, backed by Fold.
          </p>
        </div>
        <Image
          src="/phone.svg"
          alt="inform delight"
          width={462}
          height={796}
          className="animate-phone"
        />
      </div>
    </div>
  );
}
