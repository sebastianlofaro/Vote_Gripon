window.onscroll = function(e) {
  // console.log(window.scrollY);
  var blurValue = window.scrollY / 10;
  var blur = blurValue + "px";
  document.getElementById("video").style.webkitFilter = "blur(" + blur + ")";
  document.getElementById("video").style.filter = "blur(" + blur + ")";

  if (window.scrollY > 500) {
    $("footer").css("display", "block");
  }
  else {
    $("footer").css("display", "none");
  }
}


var videoHeight = $("#video").css("height");

$(document).ready(function() {
  if (parseInt(videoHeight) < 1000) {
    $("#wrapper").css("margin-top", videoHeight);
  }
  else {
    $("#wrapper").css("margin-top", "1000px");
  }
  $("footer").css("display", "none");
});

$(window).on("resize", function() {
  videoHeight = $("#video").css("height");
  if (parseInt(videoHeight) < 1000) {
    $("#wrapper").css("margin-top", videoHeight);
  }
  else {
    $("#wrapper").css("margin-top", "1000px");
  }

})
