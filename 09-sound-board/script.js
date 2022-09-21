const sounds = ["fortnite", "gura", "pewpew", "play", "scratch", "tacobong", "boom", "yeet"];

sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerText = sound[0].toUpperCase() + sound.slice(1);

  btn.addEventListener("click", () => {
    stopSounds();
    document.getElementById(sound).play();
  });

  document.getElementById("buttons").appendChild(btn);
});

function stopSounds() {
  sounds.forEach((sound) => {
    const sfx = document.getElementById(sound);

    sfx.pause();
    sfx.currentTime = 0;
  });
}
