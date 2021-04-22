import gsap from "gsap";

export const first = (repeatBtn?: Element) => {
  const tl = gsap.timeline();

  tl.addLabel("start")
    .from(
      ".modal #floor",
      {
        scaleX: 0,
        duration: 0.7,
      },
      "start"
    )
    .from(
      ".modal #person",
      {
        opacity: 0,
        x: 200,
        duration: 0.7,
      },
      "start"
    )
    .from(".modal #chat", {
      scale: 0,
      transformOrigin: "100% 100%",
      duration: 0.7,
    })
    .staggerFrom(
      ".modal #words path",
      0.4,
      {
        scaleX: 0,
      },
      0.3
    )
    .add(() => {}, "+=1")
    .staggerTo(
      ".modal #words path",
      0.4,
      {
        scaleX: 0,
        transformOrigin: "100% 50%",
      },
      0.3
    )
    .to(".modal #chat", 0.7, {
      scale: 0,
      transformOrigin: "100% 100%",
    })
    .addLabel("close")
    .to(
      ".modal #person",
      0.7,
      {
        opacity: 0,
        x: 200,
      },
      "close"
    )
    .to(
      ".modal #floor",
      0.7,
      {
        scaleX: 0,
      },
      "close"
    );

  if (repeatBtn) {
    repeatBtn.addEventListener("click", () => {
      tl.restart();
    });
  }
};
