jQuery(document).ready(function(){
  "use script";
  var btnP = $("#PortfolioBtn");
  var blockItem = $(".portfolio__colum");
  blockItem.hide();
  var sliceCount = 0;
  var wWidth = $(window).width();
  if(wWidth < 768){
    sliceCount = 1;
  }else if (wWidth < 1024){
    sliceCount = 2;
  }else{
    sliceCount = 3;
  }
  blockItem.slice(0, sliceCount).show();
  btnP.on("click", function(event){
    event.preventDefault();
    $(".portfolio__colum:hidden").slice(0, sliceCount).slideDown();
  });
});