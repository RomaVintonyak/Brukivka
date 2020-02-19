jQuery(document).ready(function(){
  "use script";
  var btnP = $("#PortfolioBtn");
  var blockItem = $(".portfolio__colum");
  blockItem.hide();
  var sliceCount = 3;
  blockItem.slice(0, sliceCount).show();
  btnP.on("click", function(event){
    event.preventDefault();
    $(".portfolio__colum:hidden").slice(0, sliceCount).slideDown();
  });
});