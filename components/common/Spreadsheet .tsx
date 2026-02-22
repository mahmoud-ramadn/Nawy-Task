"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Image from "next/image";
import gsap from "gsap";

export default function Spreadsheet() {
  const containerRef = useScrollAnimation<HTMLDivElement>(
    (element) => {
      const tl = gsap.timeline();

      // Animate the icon
      tl.from(element.querySelector(".animate-icon"), {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      // Animate the heading
      tl.from(
        element.querySelector(".animate-heading"),
        {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.6"
      );

      // Animate the paragraph
      tl.from(
        element.querySelector(".animate-paragraph"),
        {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.6"
      );

      // Animate the two images with a slight stagger
      tl.from(
        element.querySelectorAll(".animate-image"),
        {
          y: 40,
          opacity: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
        },
        "-=0.5"
      );

      return tl;
    },
    { start: "top 85%" }
  );

  return (
    <div ref={containerRef} className="container mt-24">
      <div className="max-w-[788px] mx-auto flex flex-col gap-y-5 justify-center items-center">
        <Image
          src="/icon-polygon.svg.svg"
          alt="spreadsheet image"
          width={143}
          height={122}
          className="animate-icon rounded-lg"
        />
        <h2 className="animate-heading text-primary text-center font-bold text-6xl">
          More than a row in a spreadsheet.
        </h2>
        <p className="animate-paragraph text-2xl text-gray-800">
          Not just the numbers, but the story as well
        </p>
        <div className="grid py-4 md:grid-cols-2 grid-cols-1 gap-x-5">
          <Image
            src="/leftsspreadSheet.svg"
            alt="left spreadsheet"
            width={688}
            height={664}
            className="animate-image rounded-lg"
          />
          <Image
            src="/rightSpreadsheet.svg"
            alt="right spreadsheet"
            width={688}
            height={664}
            className="animate-image rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
