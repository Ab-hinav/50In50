const disp = document.getElementById("disp");
const ekey = document.getElementById("ekey");
const ecode = document.getElementById("ecode");
const container = document.querySelector(".container");

container.classList.add("hidden");

window.addEventListener("keydown", (e) => {
  disp.classList.add("hidden");
  container.classList.remove("hidden");
  ekey.innerText = e.key;
  ecode.innerText = e.code;
});
