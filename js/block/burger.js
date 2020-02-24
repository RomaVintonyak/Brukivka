jQuery(document).ready(function(){
  "use script";
  $(".burger__button").on("click", function(event){
    event.preventDefault();
    $(".burger__icon").toggleClass("burger__icon--open");
  });
});