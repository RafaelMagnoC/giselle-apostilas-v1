export class Video {
  ocultarControles(id) {
    const video = document.getElementById(id);

    video.addEventListener("ended", () => {
      video.removeAttribute("controls");
    });
  }
}
