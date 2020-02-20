jQuery(document).ready(function(){
  "use script";
  var btnScr = $(".footer__link");
  btnScr.on("click", function(event){
    event.preventDefault();
    /*$(".burger__icon").removeClass("open");
    $(".mobile__menu").removeClass("mobile__menu--open");*/
    var id = $(this).attr("href"),
    offsetTop = $(id).offset().top;
    $("html, body").animate(
      {
        scrollTop: offsetTop - 85
      }, 1000
    )
  });
});