!function(){const t=document.querySelector(".color"),e=[...document.querySelectorAll("path")].filter((t=>"#6C63FF"==t.getAttribute("fill")));t.addEventListener("input",(t=>{document.documentElement.style.setProperty("--primary-color",t.target.value);for(const r of e)r.setAttribute("fill",t.target.value)}))}();
//# sourceMappingURL=index.3f9b1fdf.js.map
