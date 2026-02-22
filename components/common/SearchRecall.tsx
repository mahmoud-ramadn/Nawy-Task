"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Image from "next/image";
import { MarqueeDemo } from "./MarqueeMarke";
import gsap from "gsap";

export default function SearchRecall() {
  const containerRef = useScrollAnimation<HTMLDivElement>(
    (element) => {
      const tl = gsap.timeline();

      // Animate main elements in sequence
      tl.from(element.querySelector(".animate-search-icon"), {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      tl.from(
        element.querySelector(".animate-search-heading"),
        {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.6"
      );

      tl.from(
        element.querySelector(".animate-input-salary"),
        {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.6"
      );

      tl.from(
        element.querySelector(".animate-filter-heading"),
        {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.6"
      );

      tl.from(
        element.querySelector(".animate-marquee"),
        {
          y: 40,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.5"
      );

      tl.from(
        element.querySelector(".animate-abc"),
        {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.7"
      );

      tl.from(
        element.querySelector(".animate-bar"),
        {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.6"
      );

      // Background image – subtle fade in
      tl.from(
        element.querySelector(".animate-bg"),
        {
          opacity: 0,
          duration: 1.5,
          ease: "power2.out",
        },
        "-=1.0"
      );

      return tl;
    },
    { start: "top 85%" }
  );

  return (
    <div ref={containerRef} className="relative overflow-hidden">
      <div className="relative container flex pb-20 z-1 flex-col items-center md:mt-56 mt-24">
        <Image
          src="/search-icon.svg"
          alt="search recall"
          width={74}
          height={74}
          className="animate-search-icon rounded-lg"
        />
        <h1 className="animate-search-heading text-primary text-6xl mt-10 font-bold">
          Search. Recall
        </h1>
        <Image
          src="/InputSallary.svg"
          alt="input salary"
          width={500}
          height={100}
          className="animate-input-salary"
        />
        <h1 className="animate-filter-heading text-primary pb-10 text-6xl font-bold">
          Filter
        </h1>
        <div className="animate-marquee w-full">
          <MarqueeDemo />
        </div>
        <Image
          src="/ABCPVt.svg"
          alt="ABCPVt"
          width={588}
          height={164}
          className="animate-abc mt-12"
        />
        <Image
          src="/bar.svg"
          alt="bar"
          width={588}
          height={164}
          className="animate-bar absolute left-1/2 -translate-x-1/2 -bottom-25"
        />
      </div>

      <Image
        src="/backGrounGrayForSeachRecall.svg"
        alt="background"
        width={1200}
        height={600}
        className="animate-bg mt-12 absolute left-0 bottom-0 w-full"
      />
    </div>
  );
}
