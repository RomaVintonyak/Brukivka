jQuery(document).ready(function(){
    "use script";
  
    $(".form__send").submit(function() {
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "../php/form.php",
			data: th.serialize()
		}).done(function() {
			alert("Дякуємо за Ваше звернення");
			setTimeout(function() {
        alert("Повідомлення успішно відправлено");
        $("#erorMesag").text("");
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});
});
