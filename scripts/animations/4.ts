import gsap, { Power3, Sine } from "gsap";

export const fourth = (repeatBtn?: Element) => {
  const tl = gsap.timeline();

  tl.from(".modal #person", {
    x: 150,
    opacity: 0,
    duration: 0.6,
  })
    .staggerFrom(
      ".modal #dots path",
      0.5,
      {
        opacity: 0,
      },
      0.5
    )
    .set(".modal #chart2", {
      y: 13.7,
      x: -23,
    })
    .addLabel("chart")
    .from(
      ".modal #chart1",
      {
        scale: 0,
        transformOrigin: "center center",
        ease: Power3.easeOut,
        duration: 0.5,
      },
      "chart"
    )
    .from(
      ".modal #chart2",
      {
        scale: 0,
        transformOrigin: "center center",
        ease: Power3.easeOut,
        duration: 0.5,
      },
      "chart"
    )
    .from(".modal #line1", {
      scaleX: 0,
      transformOrigin: "100% 0%",
      ease: Sine.easeOut,
      duration: 0.6,
    })
    .from(".modal #percent1", {
      opacity: 0,
      duration: 0.3,
    })
    .to(".modal #chart2", {
      x: 0,
      y: 0,
      duration: 0.6,
    })
    .from(".modal #line2", {
      scaleX: 0,
      transformOrigin: "0% 100%",
      ease: Sine.easeOut,
      duration: 0.6,
    })
    .from(".modal #percent2", {
      opacity: 0,
      duration: 0.3,
    });

  if (repeatBtn) {
    repeatBtn.addEventListener("click", () => {
      tl.restart();
    });
  }
};
