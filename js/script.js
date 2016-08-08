window.onscroll = function(e) {
  // console.log(window.scrollY);
  var blurValue = window.scrollY / 10;
  var blur = blurValue + "px";
  document.getElementById("video").style.webkitFilter = "blur(" + blur + ")";
}
