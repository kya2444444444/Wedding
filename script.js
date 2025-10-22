document.getElementById("openBtn").addEventListener("click", function() {
  document.querySelector(".hero").style.display = "none";
  document.getElementById("invitation").classList.remove("hidden");
});

const music = document.getElementById("music");
const playBtn = document.getElementById("play");
const pauseBtn = document.getElementById("pause");

playBtn.addEventListener("click", () => {
  music.play();
});

pauseBtn.addEventListener("click", () => {
  music.pause();
});
