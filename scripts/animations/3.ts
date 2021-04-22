import gsap, { Power4, Power3, Elastic } from "gsap";

export const third = (repeatBtn?: Element) => {
  const tl = gsap.timeline();

  tl.addLabel("phone")
    .from(
      ".modal #phone",
      {
        y: -600,
        opacity: 0,
        ease: Power4.easeOut,
        duration: 0.8,
      },
      "phone"
    )
    .from(
      ".modal #floor",
      {
        scale: 0,
        transformOrigin: "center center",
        ease: Power4.easeOut,
        duration: 0.8,
      },
      "phone"
    )
    .from(".modal #chatter1", {
      x: 70,
      opacity: 0,
      duration: 0.4,
    })
    .from(".modal #chat1", {
      scale: 0,
      transformOrigin: "100% 100%",
      ease: Elastic.easeOut,
      duration: 0.8,
    })
    .from(".modal #person", {
      x: -200,
      opacity: 0,
      ease: Power3.easeOut,
      duration: 0.6,
    })
    .from(".modal #personChat", {
      scale: 0,
      transformOrigin: "0% 100%",
      ease: Elastic.easeOut,
      duration: 0.8,
    })
    .from(".modal #chatter2", {
      x: 70,
      opacity: 0,
      duration: 0.4,
    })
    .from(".modal #chat2", {
      scale: 0,
      transformOrigin: "100% 100%",
      ease: Elastic.easeOut,
      duration: 0.8,
    });

  if (repeatBtn) {
    repeatBtn.addEventListener("click", () => {
      tl.restart();
    });
  }
};
