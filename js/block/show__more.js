jQuery(document).ready(function() {
  "use script";
  var text1 = $(".services__text--1");
  var text2 = $(".services__text--2");
  var text3 = $(".services__text--3");
  var btn1 = $("#text1");
  var btn2 = $("#text2");
  var btn3 = $("#text3");
  var sliceCount = 1;
  text1.hide();
  text1.slice(0, sliceCount).show();
  text2.hide();
  text2.slice(0, sliceCount).show();
  text3.hide();
  text3.slice(0, sliceCount).show();
  btn1.on("click", function(event) {
    event.preventDefault();
    $(".services__text--1:hidden").slice(0, sliceCount).slideDown();
  });
  btn2.on("click", function(event) {
    event.preventDefault();
    $(".services__text--2:hidden").slice(0, sliceCount).slideDown();
  });
  btn3.on("click", function(event) {
    event.preventDefault();
    $(".services__text--3:hidden").slice(0, sliceCount).slideDown();
  });
});
