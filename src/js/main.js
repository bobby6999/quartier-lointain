// installation gsap
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
/*^^^^^^^^^^^^^^^^ ^^^^^^^^ ^^^^^^^^installation gsap ^^^^^^^^ ^^^^^^^^^ ^^^^^^^^ ^^^^^^^^^^^^^^^^*/

/* first logo  */
function disableScroll() {
  document.body.style.overflow = "hidden";
}
function enableScroll() {
  document.body.style.overflow = "";
}

gsap
  .timeline()
  .call(disableScroll)
  .to(".first-logo", { opacity: 0, duration: 4 });
