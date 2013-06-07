parseWords = function( _words ) {
	words = _words.split(" ");
}

play = function() {
	var input = $("#input").val();
	$("#playback").text( input );
	$("#input").hide();
	$("#playback").show().css({
		lineHeight: "25px"
	});
}

$(window).load(function(){
	$("#nav").animate({
		opacity: 1
	}, function(){
		$("#createandplay").css({
			left: $(document).width()/2 - $("#createandplay").width()/2
		}).animate({
			opacity: 1
		});
	});
});

var words = new Array();
$(document).ready(function() {

	$("#button").click(function(){
		play();
	});
});