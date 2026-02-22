"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Image from "next/image";
import { Button } from "./button";
import { EyeClosed } from "lucide-react";
import gsap from "gsap";

export default function StopRecording() {
  const containerRef = useScrollAnimation<HTMLDivElement>(
    (element) => {
      const tl = gsap.timeline();

      // Animate left image
      tl.from(element.querySelector(".animate-left-image"), {
        x: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // Animate right column items with stagger
      tl.from(
        element.querySelectorAll(".animate-right-item"),
        {
          y: 30,
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
        },
        "-=0.8"
      );

      // Animate buttons separately
      tl.from(
        element.querySelectorAll(".animate-button"),
        {
          scale: 0.9,
          opacity: 0,
          duration: 0.6,
          stagger: 0.1,
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
      className="container bg-white md:mt-24 mt-12 grid md:grid-cols-2 grid-cols-1 items-start"
    >
      <Image
        src="/restPayements.svg"
        width={488}
        height={800}
        className="animate-left-image mx-auto"
        alt="rest payments"
      />
      <div className="space-y-10">
        <Image
          src="/icon-category.svg.svg"
          alt="icon category"
          width={64}
          height={64}
          className="animate-right-item"
        />
        <h1 className="animate-right-item font-bold text-6xl text-primary">
          Stop recording expenses manually.
        </h1>
        <div className="flex gap-3">
          <Button
            variant="outline"
            className="animate-button py-2 rounded-full"
          >
            <EyeClosed /> No Email scraping
          </Button>
          <Button
            variant="outline"
            className="animate-button py-2 rounded-full"
          >
            <EyeClosed /> No SMS scraping
          </Button>
        </div>
        <p className="animate-right-item text-primary text-2xl">
          It’s easy to forget, fall off the wagon, and miss. It’s hard to be
          diligent with expense tracking when you have to do it manually. Fold
          automatically pulls your expenses from your Bank accounts and
          categorises them. So you can relax and focus on things that are more
          important than tracking expenses.
        </p>
      </div>
    </div>
  );
}
