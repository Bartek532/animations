import gsap, { Power4, Expo, Sine } from "gsap";

export const fifth = (repeatBtn?: Element) => {
  const tl = gsap.timeline();

  tl.addLabel("clock")
    .set(".modal #hand", {
      transformOrigin: "100% 0%",
      x: -5,
      rotation: -43,
    })
    .from(
      ".modal #clock",
      {
        y: -500,
        opacity: 0,
        duration: 0.7,
      },
      "clock"
    )
    .from(
      ".modal #floor",
      {
        scale: 0,
        transformOrigin: "center center",
        duration: 0.7,
      },
      "clock"
    )
    .from(
      ".modal #person",
      {
        x: -700,
        ease: Expo.easeOut,
        duration: 2,
      },
      "clock"
    )
    .to(".modal #hand", {
      rotation: 15,
      duration: 0.5,
    })
    .addLabel("arrow")
    .to(
      ".modal #hand",
      {
        rotation: 0,
        duration: 0.3,
      },
      "arrow"
    )
    .to(
      ".modal #arrow",
      {
        rotation: 95,
        transformOrigin: "0% 0%",
        x: 50,
        ease: Power4.easeOut,
        duration: 0.6,
      },
      "arrow"
    )
    .to(".modal #spring", {
      x: 200,
      opacity: 0,
      ease: Sine.easeIn,
      duration: 0.7,
    })
    .from(".modal #winter", {
      x: -200,
      opacity: 0,
      ease: Sine.easeOut,
      duration: 0.7,
    });

  if (repeatBtn) {
    repeatBtn.addEventListener("click", () => {
      tl.restart();
    });
  }
};
