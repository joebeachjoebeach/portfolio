//Knock Knock Generator

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var names = ["Orange", "The Police", "Boo", "Who"];

var punchLines = ["Orange you glad I didn't say banana?", "You're under arrest...", "Why are you crying?", "Are you an owl?"];

var thisJoke = 0;

$(document).ready(function() {
	$("#getjoke").mousedown(function() {
		thisJoke = getRandomInt(0, names.length - 1);
		$("#joketext").text("Knock Knock");
		$(this).fadeOut(function() {
			$("#whosthere").fadeIn();
		});
	});
	$("#whosthere").mousedown(function() {
		$("#joketext").text(names[thisJoke]);
		$("#name").text(names[thisJoke]);
		$(this).fadeOut(function() {
			$("#namewho").fadeIn();
		});
	});
	$("#namewho").mousedown(function() {
		$("#joketext").text(punchLines[thisJoke]);
		$(this).fadeOut(function() {
			$("#getjoke").fadeIn();
		});
	});
});