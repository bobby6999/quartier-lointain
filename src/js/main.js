// installation gsap
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
/*^^^^^^^^^^^^^^^^ ^^^^^^^^ ^^^^^^^^installation gsap ^^^^^^^^ ^^^^^^^^^ ^^^^^^^^ ^^^^^^^^^^^^^^^^*/

function disableScroll() {
  document.body.style.overflow = "hidden";
}

function enableScroll() {
  document.body.style.overflow = "";
}

/* logo puis papillon_____________________________________________________________________*/
gsap
  .timeline()
  .call(disableScroll)
  .to(".first-logo", { opacity: 0, duration: 2 }) // Fade out the logo
  .from("#papillon", { opacity: 0, duration: 0.5 })
  .to({}, { duration: 0 })
  //animation du papillon
  .to("#papillon", { x: 100, duration: 0.3 })
  .to("#papillon", { x: 200, y: -20, duration: 0.3 })
  .to("#papillon", { x: 300, y: -80, duration: 0.3 })
  .to("#papillon", { x: 400, y: -60, duration: 0.3 })
  .to("#papillon", { x: 500, y: 0, duration: 0.3 })
  .to("#papillon", { scale: 1.5, duration: 0.3 })
  .to("#papillon", { scale: 1, duration: 0.3 })
  .to("#papillon", { scale: 1.5, duration: 0.3 })
  .to("#papillon", { scale: 1, duration: 0.3 })

  .to("#papillon", { x: 800, y: -100, duration: 1, delay: 1 })
  .to("#papillon", { x: 900, y: -200, duration: 1 })

  .call(enableScroll); // scroll est possible

/*train slide_____________________________________________________________________________*/
gsap.to(".train", {
  scrollTrigger: {
    trigger: ".train-container",
    pin: true,
    scrub: true,
    start: "top top",
    end: "top -100%", // à ajuster
  },
  left: "0", // Animer la propriété left pour amener le train au centre
  ease: "none",
});

/*image slide___________________________________________________________________________*/
const spaceHolder = document.querySelector(".space-holder");
const horizontal = document.querySelector(".horizontal");
spaceHolder.style.height = `${calcDynamicHeight(horizontal)}px`;

function calcDynamicHeight(ref) {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const objectWidth = ref.scrollWidth;
  return objectWidth - vw + vh + 100;
}

window.addEventListener("scroll", () => {
  const sticky = document.querySelector(".sticky");
  horizontal.style.transform = `translateX(-${sticky.offsetTop}px)`;
});

window.addEventListener("resize", () => {
  spaceHolder.style.height = `${calcDynamicHeight(horizontal)}px`;
});
