import gsap, { Elastic } from "gsap";

export const seventh = (repeatBtn?: Element) => {
  const tl = gsap.timeline();

  tl.staggerFrom(
    ".modal #stemps path",
    0.5,
    {
      scaleY: 0,
      transformOrigin: "50% 100%",
    },
    0.5
  )
    .staggerFrom(
      ".modal #leafs path",
      0.7,
      {
        scale: 0,
        transformOrigin: "center center",
      },
      0.7
    )
    .from(".modal #chat3", {
      scale: 0,
      transformOrigin: "0% 100%",
      ease: Elastic.easeOut.config(1, 0.5),
      duration: 0.7,
    })
    .from(".modal #chat1", {
      scale: 0,
      transformOrigin: "100% 100%",
      ease: Elastic.easeOut.config(1, 0.5),
      duration: 0.7,
    })
    .from(".modal #chat2", {
      scale: 0,
      transformOrigin: "100% 100%",
      ease: Elastic.easeOut.config(1, 0.5),
      duration: 0.7,
    });

  if (repeatBtn) {
    repeatBtn.addEventListener("click", () => {
      tl.restart();
    });
  }
};
