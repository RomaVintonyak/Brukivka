jQuery(document).ready(function(){
  "use script";
  var topBtn = $(".back__top");
  topBtn.hide();
  $(window).on("scroll", function(){
      if($(this).scrollTop() >= 300){
        topBtn.fadeIn();
      }else{
        topBtn.fadeOut();
      }
  });
  topBtn.on("click", function(){
    $("html, body").animate({
      scrollTop: 0
    }, 1000);
  });
});