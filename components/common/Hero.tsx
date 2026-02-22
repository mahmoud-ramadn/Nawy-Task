"use client";

import { useScrollAnimation, animations } from "@/hooks/useScrollAnimation";
import Image from "next/image";
import gsap from "gsap";

export default function Hero() {
  const containerRef = useScrollAnimation<HTMLDivElement>(
    (element) => {
      const tl = gsap.timeline();

      // Left QR code – slide in from left
      tl.from(element.querySelector(".animate-left-qr"), {
        x: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // Hero image – subtle scale + fade
      tl.from(
        element.querySelector(".animate-hero-image"),
        {
          scale: 0.9,
          opacity: 0,
          duration: 1.2,
          ease: "back.out(1.2)",
        },
        "-=0.8"
      );

      // Heading and paragraph – stagger fade‑up
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

      // Download card – fade and slide up
      tl.from(
        element.querySelector(".animate-download-card"),
        {
          y: 30,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.7"
      );

      // Bottom frames – animate from bottom with stagger
      tl.from(
        element.querySelectorAll(".animate-bottom-frame"),
        {
          y: 50,
          opacity: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power3.out",
        },
        "-=0.5"
      );

      return tl;
    },
    { start: "top 85%" }
  );

  return (
    <div ref={containerRef} className="bg-[#f0f1f5] w-full relative">
      <Image
        src="/qrocode.svg"
        alt="header image"
        width={116}
        height={116}
        className="animate-left-qr absolute hidden md:block md:left-9 top-1/2 -translate-y-1/2"
      />
      <div className="container flex items-center justify-center flex-col">
        <Image
          src="/hero.webp"
          alt="hero image"
          width={500}
          height={800}
          className="animate-hero-image"
        />
        <div className="max-w-[588px] space-y-11">
          <h1 className="animate-text font-bold md:text-8xl text-5xl text-center text-[#20294C]">
            Be painfully 😜 aware.
          </h1>
          <p className="animate-text md:text-2xl text-xl text-primary text-center">
            Fold securely connects to your Bank accounts and gives a clear
            picture of your finances. So you can make better decisions and lead
            a healthier financial life.
          </p>
        </div>
        <div className="animate-download-card md:w-[388px] w-[350px] bg-gray rounded-[18px] p-2 mt-12 flex items-center justify-between">
          <div className="space-y-1">
            <h3 className="font-semibold text-2xl text-gray-800">
              Download iOS app
            </h3>
            <p className="text-lg text-gray-600">
              Currently in invite only Beta
            </p>
          </div>
          <Image
            src="/qrocodtwo.svg"
            alt="hero image"
            width={100}
            height={100}
          />
        </div>
        <div className="relative md:w-[520px] w-[300px] md:h-[400px] h-[200px]">
          <Image
            src="/frame.svg"
            alt="frame"
            width={200}
            height={100}
            className="animate-bottom-frame absolute left-1/2 -translate-x-1/2 -bottom-8"
          />
          <Image
            src="/IcIcIbanck.svg"
            alt="hero image"
            width={150}
            height={150}
            className="animate-bottom-frame absolute left-1/2 z-20 -translate-x-1/2 -bottom-20"
          />
        </div>
      </div>
    </div>
  );
}
