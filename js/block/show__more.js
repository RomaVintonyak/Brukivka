jQuery(document).ready(function() {
  "use script";
  var text1 = $(".services__text--1");
  var text2 = $(".services__text--2");
  var text3 = $(".services__text--3");
  var text4 = $(".services__text--4");
  var text5 = $(".services__text--5");
  var text6 = $(".services__text--6");
  var btn1 = $("#text1");
  var btn2 = $("#text2");
  var btn3 = $("#text3");
  var btn4 = $("#text4");
  var btn5 = $("#text5");
  var btn6 = $("#text6");
  var sliceCount = 1;
  text1.hide();
  text1.slice(0, sliceCount).show();
  text2.hide();
  text2.slice(0, sliceCount).show();
  text3.hide();
  text3.slice(0, sliceCount).show();
  text4.hide();
  text4.slice(0, sliceCount).show();
  text5.hide();
  text5.slice(0, sliceCount).show();
  text6.hide();
  text6.slice(0, sliceCount).show();
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
  btn4.on("click", function(event) {
    event.preventDefault();
    $(".services__text--4:hidden").slice(0, sliceCount).slideDown();
  });
  btn5.on("click", function(event) {
    event.preventDefault();
    $(".services__text--5:hidden").slice(0, sliceCount).slideDown();
  });
  btn6.on("click", function(event) {
    event.preventDefault();
    $(".services__text--6:hidden").slice(0, sliceCount).slideDown();
  });
});
