import gsap, { Power2 } from "gsap";

export const sixth = (repeatBtn?: Element) => {
  const tl = gsap.timeline();

  tl.staggerFrom(
    ".modal #town path",
    0.5,
    {
      scale: 0,
    },
    0.2
  )
    .from(".modal #circle", {
      scale: 0,
      transformOrigin: "center center",
      duration: 0.6,
    })
    .from(".modal #pin", {
      y: -150,
      scaleY: 0,
      transformOrigin: "50% 0%",
      duration: 0.7,
    })
    .addLabel("move")
    .to(
      ".modal #circle",
      {
        x: 120,
        ease: Power2.easeOut,
        duration: 1,
      },
      "move"
    )
    .to(
      ".modal #pin",
      {
        x: 120,
        ease: Power2.easeOut,
        duration: 1,
      },
      "move"
    )
    .addLabel("two")
    .to(
      ".modal #circle",
      {
        y: -120,
        ease: Power2.easeOut,
        duration: 1,
      },
      "two"
    )
    .to(
      ".modal #pin",
      {
        y: -120,
        ease: Power2.easeOut,
        duration: 1,
      },
      "two"
    )
    .addLabel("three")
    .to(
      ".modal #circle",
      {
        y: 0,
        ease: Power2.easeOut,
        duration: 1,
      },
      "three"
    )
    .to(
      ".modal #pin",
      {
        y: 0,
        ease: Power2.easeOut,
        duration: 1,
      },
      "three"
    )
    .addLabel("four")
    .to(
      ".modal #circle",
      {
        x: 0,
        ease: Power2.easeOut,
        duration: 1,
      },
      "four"
    )
    .to(
      ".modal #pin",
      {
        x: 0,
        ease: Power2.easeOut,
        duration: 1,
      },
      "four"
    );

  if (repeatBtn) {
    repeatBtn.addEventListener("click", () => {
      tl.restart();
    });
  }
};
