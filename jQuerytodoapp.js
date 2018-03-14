//Check Off Specific Todos by clicking.
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});
//Click X to delete Todo.
$("ul").on("click", "span", function(event){
	event.stopPropagation();//This prevents execution of clickEvents on parent nodes.
	$(this).parent().fadeOut( 500, function(){
		$(this).remove();
	});
});
//Adding Todos to the List.
$("input[type = 'text']").keypress(function(event){
	if(event.which === 13){
		//Grabbing text from input field.
		let todoText = $(this).val();
		//Deletes input after pressing enter.
		$(this).val("");
		//create a new LI and add to ul.
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
	}
});
//Toggles the input field.
$(".fa-calendar-plus-o").on("click", function(){
	$("input[type = 'text']").fadeToggle(500);
})