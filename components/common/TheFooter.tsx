"use client"; // 👈 Required for GSAP in Next.js App Router

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Image from "next/image";
import gsap from "gsap";

export default function TheFooter() {
  const containerRef = useScrollAnimation<HTMLDivElement>(
    (element) => {
      // Animate each direct child of the grid container (the cards)
      return gsap.fromTo(
        element.querySelectorAll(".grid-item"),
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power3.out" }
      );
    },
    { start: "top 85%" }
  );

  return (
    <div
      ref={containerRef}
      className="container mt-32 z-10 md:overflow-y-visible overflow-y-hidden grid gap-8 lg:grid-cols-3 md:grid-cols-2 grid-cols-1"
    >
      {/* Add a common class "grid-item" to each card for easy targeting */}
      <div className="grid-item bg-blue-400 rounded-2xl flex items-center justify-center py-16">
        <Image src="/Img_margin.svg" alt="footer" width={120} height={128} />
      </div>

      <div className="grid-item bg-gray-400 flex items-end row-span-2 relative p-8 rounded-2xl md:h-full h-[500px]">
        <Image
          src="/key.svg"
          alt="footer"
          width={1000}
          height={100}
          className="absolute z-20 -top-19 left-18"
        />
        <p className="text-blue max-w-[162px] font-bold text-2xl">
          Our approach to Privacy.
        </p>
      </div>

      <div className="grid-item bg-gray-400 rounded-2xl p-12 space-y-1">
        <p className="text-blue font-semibold text-xl">Mainfesto</p>
        <p className="text-blue font-semibold text-xl">Career</p>
        <p className="text-blue font-semibold text-xl">Blog</p>
        <p className="text-blue font-semibold text-xl">FAQ</p>
        <p className="text-blue font-semibold text-xl">Contact</p>
        <p className="text-blue font-semibold text-xl">Privacy</p>
        <p className="text-blue font-semibold text-xl">Terms</p>
      </div>

      <div className="grid-item rounded-2xl overflow-hidden">
        <Image
          src="/Team.svg"
          alt="footer"
          width={500}
          height={300}
          className="object-cover w-full h-full"
        />
      </div>

      <div className="grid-item bg-gray-400 text-white flex items-center justify-center p-12 rounded-2xl">
        © 2023 Lunchbrake Classic Pvt Ltd. Reach out to us at hello@fold.money.
        Built at 2586 Labs Inc.
      </div>
    </div>
  );
}
