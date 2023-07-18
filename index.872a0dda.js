const t=document.querySelector(".color"),e=document.querySelectorAll("path"),r=[...e].filter(t=>"#6C63FF"==t.getAttribute("fill"));t.addEventListener("input",t=>{for(let e of(document.documentElement.style.setProperty("--primary-color",t.target.value),r))e.setAttribute("fill",t.target.value)});
//# sourceMappingURL=index.872a0dda.js.map
