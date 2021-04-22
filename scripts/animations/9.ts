import gsap, { Power3 } from "gsap";

export const ninth = (repeatBtn?: Element) => {
  const tl = gsap.timeline();

  tl.addLabel("zero")
    .from(".modal #zero", {
      y: -400,
      opacity: 0,
      ease: Power3.easeOut,
      duration: 1,
    })
    .from(
      ".modal #floor",

      {
        scale: 0,
        transformOrigin: "center center",
        ease: Power3.easeOut,
        duration: 1,
      },
      "zero"
    )
    .addLabel("four")
    .from(".modal #four1", {
      x: 660,
      opacity: 0,
      ease: Power3.easeOut,
      duration: 1.7,
    })
    .from(
      ".modal #four2",
      {
        x: -660,
        opacity: 0,
        ease: Power3.easeOut,
        duration: 1.7,
      },
      "four"
    );

  if (repeatBtn) {
    repeatBtn.addEventListener("click", () => {
      tl.restart();
    });
  }
};
