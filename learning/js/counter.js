//Counter

var theNumber = 0;

function plus() {
	var userInput = document.getElementById("userinput").value;
	if (userInput === "") {
		theNumber++;
	}
	else {
		theNumber += Number(userInput);
	}
	document.getElementById("number").textContent = theNumber;
}

function minus() {
	var userInput = document.getElementById("userinput").value;
	if (userInput === "") {
		theNumber--;
	}
	else {
		theNumber -= Number(userInput);
	}
	document.getElementById("number").textContent = theNumber;
}

function thisPage() {
	document.getElementById("number").textContent = theNumber;
}

window.onload = thisPage();