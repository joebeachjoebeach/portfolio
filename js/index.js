window.onload = function() {
	
}


// window.onload = function() {

// 	// groups the nav link and corresponding div into an object,
// 	// makes a method to display the div and hide the open one if needed,
// 	// assigns this method to onclick() of the link
// 	// id is the div's id, display is what the display property should be set to
// 	function Group(id, display) {
// 		this.div = document.getElementById(id);
// 		this.link = document.getElementById(id.concat("link"));
// 		this.open = function() {
// 			if (this.div.style.display != display) {
// 				if (openedDiv)
// 					openedDiv.style.display = "none";
// 				this.div.style.display = display;
// 				openedDiv = this.div;
// 			}
// 		}
// 		this.link.onclick = this.open.bind(this);
// 	}

// 	var openedDiv = false; //keeps track of which div is currently open

// 	// creating the objects
// 	new Group("web", "flex");
// 	new Group("woof", "flex");
// 	new Group("resume", "block");
// 	new Group("about", "block");

// 	// woof info link behavior
// 	var woofInfo = document.getElementById("woofinfo");
// 	var woofInfoLink = document.getElementById("woofinfolink");
// 	woofInfoLink.onclick = function() {
// 		if (woofInfo.style.display != "block")
// 			woofInfo.style.display = "block";
// 		else
// 			woofInfo.style.display = "none";
// 	}
// }