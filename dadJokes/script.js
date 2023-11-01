const j = document.getElementById("joke");
const currentJoke = "click button to get a joke";

j.innerHTML = currentJoke;

const btn = document.querySelector("button");

btn.addEventListener("click", async () => {
  fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      j.innerHTML = data.joke;
    });
});
