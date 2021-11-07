const mobileBtn = document.getElementById("mobile-cta");
nav = document.querySelector("nav");
mobileBtnExit = document.getElementById("mobile-exit");

mobileBtn.addEventListener("click", () => {
  nav.classList.add("menu-btn");
});

mobileBtnExit.addEventListener("click", () => {
  nav.classList.remove("menu-btn");
});

/* Fade in content on scroll */
$(document).on("scroll", function () {
  var pageTop = $(document).scrollTop();
  var pageBottom = pageTop + $(window).height();
  var fadeins = $(".fadein");

  for (var i = 0; i < fadeins.length; i++) {
    var fadein = fadeins[i];

    if ($(fadein).position().top < pageBottom) {
      $(fadein).addClass("visible");
    } else {
      $(fadein).removeClass("visible");
    }
  }
});
