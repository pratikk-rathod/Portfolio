let header = document.querySelector("header");
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

// Clear the typing element before initialization
document.querySelector(".typing").textContent = "";

var typed = new Typed(".typing", {
    strings: [ "System Engineer @ TCS", "Full-Stack Developer", "AI/ML Developer","Open-source contributor", "Problem solver"],
    typeSpeed: 100,
    backSpeed: 90,
    loop: true,
    startDelay: 500,
    backDelay: 2000,
    showCursor: true,
    cursorChar: "|",
    autoInsertCss: true
});

window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});

menu.onclick = () => {
  navbar.classList.toggle("active");
};
window.onscroll = () => {
  navbar.classList.remove("active");
};

// Dark Mode / light mode
let darkmode = document.querySelector("#darkmode");

darkmode.onclick = () => {
  if (darkmode.classList.contains("bx-moon")) {
    darkmode.classList.replace("bx-moon", "bx-sun");
    document.body.classList.add("active");
  } else {
    darkmode.classList.replace("bx-sun", "bx-moon");
    document.body.classList.remove("active");
  }
};