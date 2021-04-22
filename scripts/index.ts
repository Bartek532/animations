const colorInput = document.querySelector(".color");
const animationsVectors = document.querySelectorAll("path");

const colorfullElements = [...animationsVectors].filter(
  item => item.getAttribute("fill") == "#6C63FF"
);

colorInput.addEventListener("input", e => {
  document.documentElement.style.setProperty(
    "--primary-color",
    (e.target as HTMLInputElement).value
  );

  for (const element of colorfullElements) {
    element.setAttribute("fill", (e.target as HTMLInputElement).value);
  }
});
