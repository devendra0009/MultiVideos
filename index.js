var myvid = document.getElementById("my-video");
var myvids = [
  "http://www.w3schools.com/html/mov_bbb.mp4",
  "http://www.w3schools.com/html/movie.mp4",
];
var activeVideo = 0;

myvid.addEventListener("ended", function (e) {
  // update the active video index
  activeVideo = ++activeVideo % myvids.length;

  // update the video source and play
  myvid.src = myvids[activeVideo];
  myvid.autoplay = true;
  myvid.load();

  //to stop after showing both videos
  if (activeVideo === 0) {
    myvid.pause();
    myvid.autoplay = false;
  }
});
