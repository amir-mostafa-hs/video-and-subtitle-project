function openConversionSite() {
  window.open(
    "https://www.happyscribe.com/subtitle-tools/subtitle-converter",
    "_blank"
  );
}

const btnVideo = document.querySelector(".btnVideo");
let videoAddress;
btnVideo.addEventListener("click", () => {
  const openInput = document.createElement("input");
  openInput.type = "file";
  openInput.setAttribute("accept", ".mp4");
  openInput.click();
  openInput.addEventListener("change", () => {
    videoAddress = ("video\\" + openInput.files[0].name).replaceAll("\\", "/");
  });
});

const btnSubtitles = document.querySelector(".btnSubtitles");
let videoSubtitles;
btnSubtitles.addEventListener("click", () => {
  const openInput = document.createElement("input");
  openInput.type = "file";
  openInput.setAttribute("accept", ".vtt");
  openInput.click();
  openInput.addEventListener("change", () => {
    videoSubtitles = ("subtitles\\" + openInput.files[0].name).replaceAll(
      "\\",
      "/"
    );
    const asideVideo = document.querySelector(".asideVideo");
    asideVideo.innerHTML = `<video
        id="my-video"
        class="video-js"
        controls
        preload="auto"
        data-setup="{}"
      >
        <source src="${videoAddress}" type="video/mp4" />
        <p class="vjs-no-js">
          To view this video please enable JavaScript, and consider upgrading to
          a web browser that
          <a href="https://videojs.com/html5-video-support/" target="_blank"
            >supports HTML5 video</a
          >
        </p>
        <track
          label="caption(subtitles)"
          kind="subtitles"
          srclang="en-fa"
          src="${videoSubtitles}"
          default
        />
      </video>`;
  });
});
