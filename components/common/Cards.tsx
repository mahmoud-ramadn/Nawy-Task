"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Image from "next/image";
import gsap from "gsap";

export default function Cards() {
  const containerRef = useScrollAnimation<HTMLDivElement>(
    (element) => {
      // Animate each card image with a staggered fade‑up
      return gsap.fromTo(
        element.querySelectorAll(".card-image"),
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out" }
      );
    },
    { start: "top 85%" }
  );

  const CardsData = [
    {
      id: 1,
      title: "Card Title",
      description: "This is a sample card",
      image: "/car-right.svg",
    },
    {
      id: 2,
      title: "Card Title",
      description: "This is a sample card",
      image: "/card-left.svg",
    },
    {
      id: 3,
      title: "Card Title",
      description: "This is a sample card",
      image: "/card-right-bottom.svg",
    },
    {
      id: 4,
      title: "Card Title",
      description: "This is a sample card",
      image: "/card-left-bottom.svg",
    },
  ];

  return (
    <div
      ref={containerRef}
      className="container grid-cols-1 md:pb-32 pb-14 md:mt-[500px] mt-10 md:grid-cols-2 gap-6 grid"
    >
      {CardsData.map((card) => (
        <Image
          key={card.id}
          src={card.image}
          alt="card-1"
          width={588}
          height={322}
          className="card-image" // 👈 class added for GSAP targeting
        />
      ))}
    </div>
  );
}
