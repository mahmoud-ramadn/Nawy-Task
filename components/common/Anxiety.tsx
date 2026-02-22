"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Image from "next/image";
import { Button } from "../ui/button";
import gsap from "gsap";

export default function Anxiety() {
  const containerRef = useScrollAnimation<HTMLDivElement>(
    (element) => {
      const tl = gsap.timeline();

      // Animate the image
      tl.from(element.querySelector(".animate-image"), {
        y: 40,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      });

      // Animate text elements with stagger
      tl.from(
        element.querySelectorAll(".animate-text"),
        {
          y: 30,
          opacity: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
        },
        "-=0.9"
      );

      // Animate button separately
      tl.from(
        element.querySelector(".animate-button"),
        {
          scale: 0.9,
          opacity: 0,
          duration: 0.8,
          ease: "back.out(1.7)",
        },
        "-=0.5"
      );

      return tl;
    },
    { start: "top 85%" }
  );

  return (
    <div
      ref={containerRef}
      className="container border-t flex items-center justify-center flex-col py-16"
    >
      <Image
        src="/anxiety.svg"
        alt="anxiety image"
        width={733}
        height={718}
        className="animate-image border border-top-0"
      />
      <div className="pt-8 max-w-[566px] mx-auto border p-1">
        <span className="animate-text text-lg font-semibold text-gray">
          OUR GOAL
        </span>
        <h1 className="animate-text text-8xl font-bold text-primary">
          To separate anxiety from money
        </h1>
        <p className="animate-text text-2xl text-primary py-4">
          Tom & Jerry, Jim & Pam, Chai & Biscuit are examples of desirable
          pairs. An example of undesirable pair is money & anxiety. Does it have
          to be this way? What can software and good design in their limited
          reach do to decimate the pair? This is the question we asked
          ourselves.
        </p>
        <Button className="animate-button bg-blue rounded-full text-white font-semibold text-lg">
          Read our manifesto
        </Button>
      </div>
    </div>
  );
}
