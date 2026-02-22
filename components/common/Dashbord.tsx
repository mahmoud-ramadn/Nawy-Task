"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Image from "next/image";
import Switch from "../ui/ToggleModeButton";
import gsap from "gsap";

export default function Dashboard() {
  const containerRef = useScrollAnimation<HTMLDivElement>(
    (element) => {
      const tl = gsap.timeline();

      // Paragraph
      tl.from(element.querySelector(".animate-paragraph"), {
        y: 20,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // Switch
      tl.from(
        element.querySelector(".animate-switch"),
        {
          y: 20,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.8"
      );

      // Dashboard image
      tl.from(
        element.querySelector(".animate-image"),
        {
          y: 30,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
        },
        "-=0.7"
      );

      // Background SVG (fade in)
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
      <div className="bg-white pt-25 container relative flex items-center justify-center pb-10 flex-col gap-y-24">
        <p className="animate-paragraph max-w-[606px] mx-auto text-gray-800 text-center">
          Fold establishes connection to your Banks through the Government
          regulated Account Aggregator Framework. OTP is required to connect
          bank accounts,
          <span className="text-blue-400">
            {" "}
            see the list of banks that support Fold .
          </span>
        </p>
        <div className="animate-switch">
          <Switch />
        </div>
        <Image
          src="/dahsbord.png"
          alt="dashboard image"
          className="animate-image z-10 relative aspect-auto"
          width={1400}
          height={300}
        />
      </div>
      <Image
        src="/Section.svg"
        alt="dashboard image"
        width={1200}
        height={400}
        className="animate-bg absolute left-0 top-[124px] w-full h-auto"
      />
    </div>
  );
}
