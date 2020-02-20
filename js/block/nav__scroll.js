jQuery(document).ready(function(){
  "use script";
  var navBtn = $(".nav__link");
  navBtn.on("click", function(event){
    event.preventDefault();
    var id = $(this).attr("href");
    var offsetTop = $(id).offset().top;
    $("html, body").animate({
      scrollTop: offsetTop - 140
    }, 1000)
  });
});