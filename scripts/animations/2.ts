import gsap, { Power4, Power3, Sine, Bounce } from "gsap";

export const second = (repeatBtn?: Element) => {
  const tl = gsap.timeline();
  tl.to(".modal #plus", {
    scale: 0.7,
    transformOrigin: "center center",
    duration: 0.5,
  })
    .from(".modal #ball", {
      x: -400,
      duration: 0.7,
    })
    .from(".modal #person", {
      y: -300,
      opacity: 0,
      ease: Power3.easeOut,
      duration: 0.7,
    })
    .from(".modal #post", {
      scale: 0,
      ease: Power4.easeOut,
      duration: 0.6,
    })
    .to(".modal #post", {
      x: 100,
      y: -160,
      scale: 1.3,
      rotation: 8,
      ease: Sine.easeOut,
      duration: 0.7,
    })
    .to(".modal #post", {
      scaleY: 1.45,
      scaleX: 1.5,
      x: 305,
      y: -62,
      rotation: 8.7,
      ease: Bounce.easeOut,
      duration: 0.7,
    });

  if (repeatBtn) {
    repeatBtn.addEventListener("click", () => {
      tl.restart();
    });
  }
};
