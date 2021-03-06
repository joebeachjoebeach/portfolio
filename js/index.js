// pre-load icon images
if (document.images) {
	var gitHubLight = new Image();
	var gitHubDark = new Image();
	var linkedInLight = new Image();
	var linkedInDark = new Image();
	var emailLight = new Image();
	var emailDark = new Image();

	gitHubLight.src = "media/github-light.png";
	gitHubDark.src = "media/github-dark.png";
	linkedInLight.src = "media/linkedin-light.png";
	linkedInDark.src = "media/linkedin-dark.png";
	emailLight.src = "media/email-light.png";
	emailDark.src = "media/email-dark.png";		
}

var app = new Vue({
	el: "#app",
	data: {
		shrink: false,
		blurb: {
			intro: "I'm a web developer and musician based in New York City.",
			main: "This portfolio is a collection of programming and music projects that I've completed to-date.",
		},
		icons: [
			{
				url: "https://github.com/joebeachjoebeach/",
				light: gitHubLight.src,
				dark: gitHubDark.src,
				alt: "joebeachjoebeach on GitHub",
				hover: false
			},
			{
				url: "https://www.linkedin.com/in/joebeachjoebeach/",
				light: linkedInLight.src,
				dark: linkedInDark.src,
				alt: "Joe Beach on LinkedIn",
				hover: false
			},
			{
				url: "mailto: joebeach+coding@gmail.com",
				light: emailLight.src,
				dark: emailDark.src,
				alt: "email Joe Beach",
				hover: false
			}
		],
		section: "code",
		coding: [
			{
				title: "Beat Bucket",
				url: "https://joebeachjoebeach.github.io/beat-bucket",
				gitHubUrl: "https://github.com/joebeachjoebeach/beat-bucket",
				target: "_blank",
				date: "February 2018",
				description: "A browser-based music-making app with a unique interface. I've always loved using drum machines, but I wish they were better suited for making melodies. Beat Bucket combines a drum-machine-like interface with a sequencer to make something fun and useful.",
				tools: "React | Redux | Tone.js | Python | Flask | PostgreSQL | Docker",
				id: "beat-bucket"
			},
			{
				title: "Contributing to WoofJS",
				url: "https://github.com/stevekrouse/woofjs/commits?author=joebeachjoebeach",
				target: "_blank",
				date: "January - August 2017",
				description: "<a href='http://woofjs.com'>WoofJS</a> is a JavaScript framework for creating games with the HTML5 canvas. It's meant to be a stepping-stone from MIT's Scratch to \"real\" coding, making text-based coding more accessible to children and teenagers.",
				tools: "Vue.js | ES6 | HTML5 | CSS3",
				id: "woofjs"
			},
			{
				title: "Plan Your Week",
				url: "https://joebeachjoebeach.github.io/plan-your-week",
				gitHubUrl: "https://github.com/joebeachjoebeach/plan-your-week",
				target: "_blank",
				date: "August 2017",
				description: "A time-management desktop web-app that helps you effectively budget your time and get things done - modeled after my personal time management method.",
				tools: "React | Redux | react-router | react-dnd | HTML5 | CSS3",
				id: "plan-your-week"
			},
			{
				title: "Facebork API",
				url: "https://github.com/joebeachjoebeach/facebork-api",
				target: "_blank",
				date: "November 2017",
				description: "A REST-ful API for a dog social network. I created this as a fun way to explore building REST-ful API's and deploying products to AWS.",
				tools: "Python | Flask | pytest | MongoDB | AWS",
				id: "facebork-api"
			},
			{
				title: "Microbe Log Microblog",
				url: "https://microbe-log-microblog.herokuapp.com/",
				gitHubUrl: "https://github.com/joebeachjoebeach/microbe-log-microblog",
				target: "_blank",
				date: "October 2017",
				description: "A whimsical Twitter-like microblog service that takes advantage of the fact that 'microblog' sounds like 'microbe log.'",
				tools: "Python | Flask | PostgreSQL | JavaScript | HTML5 | SCSS | PostCSS",
				id: "microbe-log-microblog"
			},
			{
				title: "Dog API Wrapper for Python",
				url: "https://github.com/joebeachjoebeach/dog-api",
				target: "_blank",
				date: "October 2017",
				description: "A Python wrapper for Dog CEO's <a href='https://dog.ceo/dog-api/' target='_blank'>Dog API</a>.",
				tools: "Python | pytest",
				id: "dog-api"
			},
			{
				title: "Game of Thrones Card Game",
				url: "https://joebeachjoebeach.github.io/got-cards",
				gitHubUrl: "https://github.com/joebeachjoebeach/got-cards",
				target: "_blank",
				date: "September 2017",
				description: "A card game with characters and houses from the Game of Thrones universe utilizing <a href='https://anapioficeandfire.com' target='_blank'>An API of Ice and Fire</a>.",
				tools: "React | HTML5 | CSS3 | AJAX",
				id: "got-cards"
			},
			{
				title: "JSON Path Finder",
				url: "http://jsonpathfinder.com",
				gitHubUrl: "https://github.com/joebeachjoebeach/json-path-finder",
				target: "_blank",
				date: "June 2017",
				description: "A web-app for quickly finding the dot notation (path) of an item within a JSON object. I built this to help students of mine who were new to programming become more comfortable working with JSON.",
				tools: "Vue.js | HTML5 | CSS3",
				id: "json-path-finder"
			},
			{
				title: "Vue.js Hangman",
				url: "https://joebeachjoebeach.github.io/hangman",
				gitHubUrl: "https://github.com/joebeachjoebeach/hangman",
				target: "_blank",
				date: "February 2017",
				description: "A mobile-first material-design hangman game built with Vue.js.",
				tools: "Vue.js | HTML5 | CSS3",
				id: "hangman"
			},
			{
				title: "Puzzle Bobble",
				url: "https://joebeachjoebeach.github.io/puzzle-bobble",
				gitHubUrl: "https://github.com/joebeachjoebeach/puzzle-bobble",
				target: "_blank",
				date: "April 2017",
				description: "A remake of the classic arcade game Puzzle Bobble with a modern design.",
				tools: "WoofJS | ES6 | HTML5 | CSS3",
				id: "puzzle-bobble"
			},
			{
				title: "coding.space Curriculum Development",
				url: "./codingspace/index.html",
				target: "_blank",
				date: "January 2016 - June 2017",
				description: "A collection of contributions I've made to The Coding Space's curriculum, aimed at helping children learn to code",
				tools: "JavaScript | Vue.js | HTML5 | CSS | Bootstrap",
				id: "curriculum"
			},
			{
				title: "coding.space Homepage",
				url: "http://coding.space",
				gitHubUrl: "https://github.com/stevekrouse/coding.space/commit/def2497415c09c89d3fd18a7216003869388f3c3",
				target: "_blank",
				date: "April 2017",
				description: "Responsive homepage for The Coding Space's curriculum that helps students understand and navigate the projects",
				tools: "HTML5 | CSS3 | Bootstrap | jQuery",
				id: "code-codingspace"
			},
			{
				title: "This Portfolio",
				url: "https://github.com/joebeachjoebeach/portfolio",
				target: "_blank",
				date: "May 2017",
				description: "Simple, minimalist responsive design with no media queries",
				tools: "Vue.js | HTML5 | CSS3",
				id: "portfolio"
			},
		],
		music: [
			{
				title: "Arc Waves",
				url: "http://soundcloud.com/arcwaves",
				description: "I play bass, guitar, and keys in this 4-piece.",
				id: "arc-waves"
			},
			{
				title: "Cop Doctor",
				url: "http://soundcloud.com/copdoctormusic",
				description: "This is my solo project. Everything written, performed, recorded, and produced by me.",
				id: "cop-doctor"
			}
		],
		languages: "JavaScript | Python | SQL | HTML5 | CSS3",
		tools: "React | Redux | Vue.js | Flask | PostgreSQL | git"
	},
	methods: {
		fadeBg: function(id) {
			var thisItem = document.getElementById(id);
			var a = 1;
			var interval = setInterval(function() {
				thisItem.style.backgroundColor = "rgba(67, 70, 80, " + a + ")";
				a -= 0.1;
				if (a <= 0)
					clearInterval(interval);
			}, 15);
		},
		unfadeBg: function(id) {
			var thisItem = document.getElementById(id);
			var a = 0;
			var interval = setInterval(function() {
				thisItem.style.backgroundColor = "rgba(67, 70, 80, " + a + ")";
				a += 0.1;
				if (a >= 1)
					clearInterval(interval);
			}, 15);
		}
	}
});
