// installation gsap
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { CustomEase } from "gsap/CustomEase";
import { RoughEase, ExpoScaleEase, SlowMo } from "gsap/EasePack";

import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Draggable } from "gsap/Draggable";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { EaselPlugin } from "gsap/EaselPlugin";
import { PixiPlugin } from "gsap/PixiPlugin";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(
  useGSAP,
  Flip,
  ScrollTrigger,
  Observer,
  ScrollToPlugin,
  Draggable,
  MotionPathPlugin,
  EaselPlugin,
  PixiPlugin,
  TextPlugin,
  RoughEase,
  ExpoScaleEase,
  SlowMo,
  CustomEase
);
/*^^^^^^^^^^^^^^^^ ^^^^^^^^ ^^^^^^^^installation gsap ^^^^^^^^ ^^^^^^^^^ ^^^^^^^^ ^^^^^^^^^^^^^^^^*/

/* first logo  */

// JavaScript to handle the scroll effect
window.addEventListener("scroll", function () {
  // Get the scroll position
  const scrollY = window.scrollY;

  // Set opacity levels based on scroll position
  let opacity = 1; // Full opacity at the top

  if (scrollY > 100 && scrollY <= 200) {
    opacity = 0.8; // 80% opacity after a bit of scrolling
  } else if (scrollY > 200 && scrollY <= 300) {
    opacity = 0.2; // 20% opacity after more scrolling
  } else if (scrollY > 300) {
    opacity = 0; // Fully transparent after even more scrolling
  }

  // Apply the opacity to the background color of .first-logo
  document.querySelector(
    ".first-logo"
  ).style.backgroundColor = `rgba(255, 255, 255, ${opacity})`;
});

/* first logo  */
