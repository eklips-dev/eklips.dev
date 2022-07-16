window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("logo").style.maxWidth = "35%";
  } else {
    document.getElementById("logo").style.maxWidth = "50%";
  }
}