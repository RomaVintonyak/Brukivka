jQuery(document).ready(function(){
  "use script";
  var navBtn = $(".nav__link");
  navBtn.on("click", function(event){
    event.preventDefault();
    $(".burger__icon").removeClass("burger__icon--open");
    $(".mobile__content").removeClass("mobile__content--open");
    var id = $(this).attr("href");
    var offsetTop = $(id).offset().top;
    $("html, body").animate({
      scrollTop: offsetTop - 140
    }, 1000)
  });
});767
