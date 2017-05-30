//Pixel Drawing

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

window.onload = function() {
	
	var colors = ["#EAC435", "#345995", "#03CEA4", "#FB4D3D", "#CA1551"];
	var randomColor = function(array) {
		return array[getRandomInt(0, array.length - 1)];	
	};
	
	
	var divs = [];
	
	for (var i = 0; i < 1600; i++) {
		var div = document.createElement("div");
		div.style.background = "#333";
		div.style.width = "2.5%";
		div.style.height = "2.5%";
		divs.push(div);
	}

	var clear = divs[0];
	clear.innerHTML = "Clear";
	clear.id = "clear";
	
	for (var j = 0; j < divs.length; j++) {
		document.body.appendChild(divs[j]);
	}
	
	var mouse = false;
	window.onmousedown = function() {
		mouse = true;
	};	
	window.onmouseup = function() {
		mouse = false;
	};
	
	divs.forEach(function(box) {
		box.onmouseover = function() {
			if (mouse)
				this.style.background = randomColor(colors);
		};
	});
	
	clear.onclick = function() {
		divs.forEach(function(div) {
			div.style.background = "#333";
		});
	};
	
};