jQuery(document).ready(function(){
  "use script";
  var introH = $("#intro").innerHeight();
  var scrollOfset = $(window).scrollTop();
  var header = $("header");
  checkScroll(scrollOfset);
  $(window).on("scroll", function () {
      scrollOfset = $(this).scrollTop();
      checkScroll(scrollOfset);
  });
  function checkScroll(scrollOfset) {
      scrollOfset = $(this).scrollTop();
      if (scrollOfset >= introH) {
          header.addClass("fixed__header");
      } else {
          header.removeClass("fixed__header");
      }
  }
});