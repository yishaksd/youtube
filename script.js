const params = new URLSearchParams(window.location.search);
const vid = params.get("vid");

if (vid) {
  document.getElementById("player").src =
    "https://www.youtube.com/embed/" + vid;
}
