// Hangman

window.onload = function() {

  var wordDiv = document.getElementById("word"); // the div that contains the secret word
  var wordDivs = []; //for collecting the blanks

  var playAgain = document.getElementById("playagain");

  var buttons = document.getElementsByClassName("letter");

  var canvas = document.getElementById("canvas");
	
	var width = document.getElementById("board").offsetWidth;
	var height = document.getElementById("board").offsetHeight;
	canvas.width = width;
	canvas.height = height;
  var ctx = canvas.getContext("2d");
	ctx.lineWidth = 2;
	
  var onePlayer = document.getElementById("one");
  var twoPlayers = document.getElementById("two");

  var arrayOfWords = ["BUTTERCUP", 
											"TANSY", 
											"PIGEON", 
											"REPTILE", 
											"HAWK", 
											"CAPYBARA", 
											"DELICATE", 
											"OFFICIAL", 
											"ALIMONY", 
											"GRANOLA",
											"IMPERATIVE", 
										  "DELICIOUS",
										  "ANTICIPATION",
											"APPLE",
										  "BANANA",
										  "BILIOUS",
										  "INTESTINE"];
	
	//word is the secret word, step keeps track of the drawing, numberCorrect figures out when the word is complete
	var word, step, numberCorrect;

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
	
	//starts or resets the game
	function initialize() {
		numberCorrect = 0;
		step = 0;
		
		// clear the canvas and draw the gallows
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.fillStyle = "#000000";
		ctx.beginPath();
		ctx.moveTo(260, 100);
		ctx.lineTo(260, 50);
		ctx.lineTo(400, 50);
		ctx.lineTo(400, 400);
		ctx.moveTo(520, 400);
		ctx.lineTo(280, 400);
		ctx.stroke();
		ctx.closePath();
		
		// clear out the previous word
		wordDivs = [];
		while (wordDiv.firstChild) {
			wordDiv.removeChild(wordDiv.firstChild);
		}
		
		// draw the new blanks
		for (var i = 0; i < word.length; i++) {
			var div = document.createElement("div");
			div.setAttribute("class", "blankletter");
			div.textContent = " ";
			wordDiv.appendChild(div);
			wordDivs.push(div);
		}
		
		// make sure all the buttons are enabled
		for (var l = 0; l < buttons.length; l++) {
			buttons[l].disabled = false;
		}
	}
	
	word = arrayOfWords[getRandomInt(0, arrayOfWords.length - 1)]; //select the word
	initialize();

  for (var j = 0; j < buttons.length; j++) {
    buttons[j].onclick = checkLetter;
	}
  function checkLetter() {
    this.disabled = true;
    var isThereALetter = 0;
		
		// if the letter is in the word, draw it, and keep track of number correct
    for (var k = 0; k < word.length; k++) {
      if (this.id == word[k]) {
        wordDivs[k].textContent = word[k];
        isThereALetter++;
        numberCorrect++;
      }
    }
		
		// if the letter isn't in the word, draw the appropriate body part or end the game
    if (isThereALetter === 0) {
      if (step === 0) { //head
        ctx.beginPath();
        ctx.arc(260, 120, 20, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.closePath();
      } else if (step == 1) { //torso
        ctx.beginPath();
        ctx.moveTo(260, 140);
        ctx.lineTo(260, 250);
        ctx.stroke();
        ctx.closePath();
      } else if (step == 2) { //right leg
        ctx.beginPath();
				ctx.moveTo(260, 250);
        ctx.lineTo(290, 350);
        ctx.stroke();
        ctx.closePath();
      } else if (step == 3) { //left leg
        ctx.beginPath();
        ctx.moveTo(260, 250);
        ctx.lineTo(230, 350);
        ctx.stroke();
        ctx.closePath();
      } else if (step == 4) { //right arm
        ctx.beginPath();
        ctx.moveTo(260, 160);
        ctx.lineTo(295, 240);
        ctx.stroke();
        ctx.closePath();
      } else if (step == 5) { //left arm -- end of game
        ctx.beginPath();
        ctx.moveTo(260, 160);
        ctx.lineTo(225, 240);
        ctx.stroke();
        ctx.closePath();
        ctx.font = "24px Arial";
        ctx.fillText("Game Over", 300, 30);
        for (var l = 0; l < buttons.length; l++) {
          buttons[l].disabled = true;
        }
        wordDivs.forEach(function(ltr, index) { //fill in the word in red
          ltr.style.color = "#F00";
          ltr.textContent = word[index];
        });
        playAgain.style.display = "block"; //display "Play Again" button
      }
			step++;
    }
		else if (numberCorrect == word.length) { //winning
			ctx.font = "16pt Arial";
			ctx.fillText("You Win!", 300, 30);
			for (var m = 0; m < buttons.length; m++) {
				buttons[m].disabled = true;
			}
			playAgain.style.display = "block"; //display "Play Again"
		}
  }
	
	playAgain.onclick = function() {
		one.style.background = "#999";
		two.style.background = "#CCC";
		playAgain.style.display = "none";
		word = arrayOfWords[getRandomInt(0, arrayOfWords.length - 1)]; //selecting the word
		initialize();
	};
	
	one.onclick = playAgain.onclick;
	
	// choosing two-player mode, one player inputs a word
	two.onclick = function() {
		one.style.background = "#CCC";
		two.style.background = "#999";
		word = prompt("Enter a word!").toUpperCase();
		var letters = /^[A-Za-z]+$/;
		while (!letters.test(word))
			word = prompt("Only letters please!");
		initialize();
	};
};

