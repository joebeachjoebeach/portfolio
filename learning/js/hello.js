var day, time

function today(date) {
	return ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][date.getDay()];
};

function minutes(date) {
	var mins = date.getMinutes();
	if (mins < 10)
		return "0" + mins;
	else 
		return mins;
};

function updateTime() {
	var date = new Date();
	day.innerHTML = today(date) + "!";
	time.innerHTML = date.getHours() + ":" + minutes(date);
};

window.onload = function() {
	day = document.getElementById("day");
	time = document.getElementById("time");
	updateTime();
	setInterval(updateTime, 1000);
};