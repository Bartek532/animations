import gsap, { Power2, Sine, Power4, Power3 } from "gsap";

export const eighth = (repeatBtn?: Element) => {
  const tl = gsap.timeline();

  tl.from(".modal #hands [id^=Vector]", {
    x: -200,
    opacity: 0,
    transformOrigin: "0% 50%",
    ease: Power2.easeOut,
    duration: 0.7,
  })
    .from(".modal #ground", {
      y: -400,
      opacity: 0,
      ease: Power3.easeOut,
      duration: 0.7,
    })
    .staggerFrom(
      ".modal #stemps path",
      0.5,
      {
        scaleY: 0,
        transformOrigin: "50% 100%",
        ease: Sine.easeOut,
      },
      0.5
    )
    .staggerFrom(
      ".modal #leafs path",
      0.1,
      {
        transformOrigin: "center center",
        scale: 0,
        ease: Power4.easeIn,
      },
      0.1
    );

  if (repeatBtn) {
    repeatBtn.addEventListener("click", () => {
      tl.restart();
    });
  }
};
