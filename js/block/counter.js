jQuery(document).ready(function(){
  "use script";
  var counterItem = $(".count__item");
  var setTime = 60000;
  counterItem.each(function(){
    $(this).prop('Counter', 0).animate({
      Counter: $(this).text()
    }, {
      duration: setTime,
      easing: 'swing',
      step: function(now){
        $(this).text(Math.ceil(now));
      }
    });
  });
});