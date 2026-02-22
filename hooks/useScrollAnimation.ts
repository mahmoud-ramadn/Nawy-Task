"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ScrollAnimationOptions {
  trigger?: string;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  markers?: boolean;
  once?: boolean;
  toggleActions?: string;
}

export function useScrollAnimation<T extends HTMLElement = HTMLDivElement>(
  animationFn: (element: T) => gsap.core.Tween | gsap.core.Timeline,
  options: ScrollAnimationOptions = {}
) {
  const elementRef = useRef<T>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const element = elementRef.current;

    // Kill any existing ScrollTriggers on this element
    ScrollTrigger.getAll().forEach((trigger) => {
      if (trigger.trigger === element) {
        trigger.kill();
      }
    });

    // Create the animation
    const animation = animationFn(element);

    // Create ScrollTrigger
    ScrollTrigger.create({
      trigger: element,
      start: options.start || "top 80%",
      end: options.end || "bottom 20%",
      scrub: options.scrub || false,
      markers: options.markers || false,
      once: options.once ?? true, // Only trigger once by default
      toggleActions: options.toggleActions || "play none none none",
      animation: animation,
    });

    return () => {
      // Cleanup
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === element) {
          trigger.kill();
        }
      });
      if (animation) {
        animation.kill();
      }
    };
  }, [animationFn, options]);

  return elementRef;
}

// Predefined animation functions
export const animations = {
  fadeInUp: (element: HTMLElement, delay = 0) => {
    return gsap.fromTo(
      element,
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay, ease: "power3.out" }
    );
  },

  fadeInLeft: (element: HTMLElement, delay = 0) => {
    return gsap.fromTo(
      element,
      { x: -50, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, delay, ease: "power3.out" }
    );
  },

  fadeInRight: (element: HTMLElement, delay = 0) => {
    return gsap.fromTo(
      element,
      { x: 50, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, delay, ease: "power3.out" }
    );
  },

  scaleIn: (element: HTMLElement, delay = 0) => {
    return gsap.fromTo(
      element,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.2, delay, ease: "back.out(1.7)" }
    );
  },

  staggerChildren: (element: HTMLElement, selector: string, delay = 0) => {
    return gsap.fromTo(
      element.querySelectorAll(selector),
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.15,
        delay,
        ease: "power3.out",
      }
    );
  },
};
