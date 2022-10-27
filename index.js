const ham = document.querySelector(".ham");
const ul = document.querySelector(".nav-bar nav ul");

// console.log(ham.getAttribute("data-visible"))
// console.log()

ham.addEventListener("click", () => {
  const visible = ul.getAttribute("data-visible");

  if (visible == "false") {
    ul.setAttribute("data-visible", true);
    ham.setAttribute("data-visible", true);
  } else if (visible == "true") {
    ul.setAttribute("data-visible", false);
    ham.setAttribute("data-visible", false);

  }

  // console.log(visible)
});
