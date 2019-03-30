$(document).ready(function(){
	$("h1").text("jQuery Functions");
	$("#header").html("<h3>Working with jQuery</h3>");
	$("*[type='button']").each(function(){
		$(this).addClass("btn-background");
	});
	$("#buttons").addClass("red-border");
	$("p").each(function(){
		$("p").addClass("blue");
	});
	$("*[id='first']").on("click",function(){
		$("p:first").addClass("green-border");
	});
	$("#last").on("click",function(){
		$("p:last").addClass("orange-border");
	});
	$("#prev").on("click",function(){
		$("#para3").prev().addClass("purple-border");
	});
	$("#next").on("click",function(){
		$("#para2").next().addClass("yellow-border");
	});
	$("#remove").on("click",function(){
		$("#footer").remove();
	});
});
