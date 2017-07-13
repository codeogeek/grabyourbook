jQuery(document).ready(function($){
	$(".img").mouseover(function(event){
		var status = $(this).attr('id');
		console.log(status);
		var lastChar = status.substr(status.length - 1);
		$("#name"+lastChar).css("display","block");
	});
	$(".img").mouseleave(function(){
		var status = $(this).attr('id');
		console.log(status);
		var lastChar = status.substr(status.length - 1);
		$("#name"+lastChar).css("display","none");
	});
});