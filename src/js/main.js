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

/* logo puis papillon--------------------------------*/
gsap
  .timeline()
  .call(disableScroll)
  .to(".first-logo", { opacity: 0, duration: 2 }) // Fade out the logo
  .from("#papillon", { opacity: 0, duration: 1 })
  .to(".first-logo", { duration: 2 })
  // Butterfly movement animations
  .to("#papillon", { x: 100, duration: 1 })
  .to("#papillon", { x: 200, y: -20, duration: 1 })
  .to("#papillon", { x: 300, y: -80, duration: 1 })
  .to("#papillon", { x: 400, y: -60, duration: 1 })
  .to("#papillon", { x: 500, y: 0, duration: 1 })

  // Butterfly scaling animations (pulsing effect)
  .to("#papillon", { scale: 1.5, duration: 1 })
  .to("#papillon", { scale: 1, duration: 1 })
  .to("#papillon", { scale: 1.5, duration: 1 })
  .to("#papillon", { scale: 1, duration: 1 })

  // Final butterfly movements
  .to("#papillon", { x: 800, y: -100, duration: 1, delay: 1 })
  .to("#papillon", { x: 900, y: -200, duration: 1 })

  .call(enableScroll); // Enable scrolling at the end
