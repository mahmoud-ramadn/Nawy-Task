"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Image from "next/image";
import gsap from "gsap";

export default function JustMoneyAfterAll() {
  const containerRef = useScrollAnimation<HTMLDivElement>(
    (element) => {
      const tl = gsap.timeline();

      // Animate the text block children
      tl.from(element.querySelectorAll(".text-animate"), {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      });

      // Animate the image separately (e.g., scale + fade)
      tl.from(
        element.querySelector(".image-animate"),
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
    <div
      ref={containerRef}
      className="container grid-cols-1 md:grid-cols-2 grid items-center justify-center gap-8"
    >
      <div className="md:py-12 md:pl-24 pl-12 py-6">
        <span className="text-animate text-lg font-semibold text-gray">
          You Know
        </span>
        <h1 className="text-animate text-8xl font-bold text-primary">
          It&apos;s just money after all
        </h1>
        <p className="text-animate text-2xl text-primary py-4">
          An equal source of stress, and joy. Exhilaration and anxiety, a
          centrepiece for most of our spinning around in lives. A belief
          ingrained from childhood, that money is complex, you’re not enough to
          handle it. But a few good habits, some restraint, awareness, and tools
          that don’t make you feel dumb have the power to change that.
        </p>
      </div>
      <Image
        src="/coins.svg"
        alt="just money after all"
        width={157}
        className="image-animate mx-auto"
        height={1042}
      />
    </div>
  );
}
