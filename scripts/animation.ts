import * as animations from "./animations/index";

const modal = document.querySelector(".modal") as HTMLElement;
const modalFrame = document.querySelector(".frame");
const main = document.querySelector(".main");
const repeatBtn = document.querySelector(".redo");

main.addEventListener("click", e => {
  const target = e.target as HTMLElement;
  if (target.classList.contains("anime")) {
    modal.style.transform = "scale(1)";
    modalFrame.innerHTML = target.children[0].innerHTML;
    animations[target.dataset.animation](repeatBtn);
  }
});

modal.addEventListener("click", e => {
  if ((e.target as HTMLElement).classList.contains("modal")) {
    modal.style.transform = "scale(0)";
  }
});
