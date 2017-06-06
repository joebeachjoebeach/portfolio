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
};

var app = new Vue({
	el: "#app",
	data: {
		shrink: false,
		blurb: {
			intro: "I'm a musician and front-end developer based in New York City.",
			main: "After teaching ESL for over five years, I decided it was time for a career change, so in September 2016, I began to learn to code in my spare time. This portfolio is a collection of coding and music projects that I've completed to-date.",
			skills: "HTML5 | CSS3 | JavaScript | jQuery | Vue.js | WoofJS | Bootstrap"
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
				title: "Contributing to WoofJS",
				url: "https://github.com/stevekrouse/woofjs/commits?author=joebeachjoebeach",
				target: "_blank",
				date: "January 2017 - present",
				description: "<a href='http://woofjs.com'>WoofJS</a> is a JavaScript framework for creating games with the HTML5 canvas. It's meant to be a stepping-stone from MIT's Scratch to \"real\" coding.",
				tools: "Vue.js | Babel | HTML5 | CSS3",
				id: "woofjs"
			},
			{
				title: "coding.space Curriculum Development",
				url: "./codingspace/index.html",
				target: "_self",
				date: "January 2016 - present",
				description: "A collection of contributions I've made to The Coding Space's curriculum, aimed at helping children learn to code",
				tools: "JavaScript | Vue.js | WoofJS | HTML5 | CSS | Bootstrap",
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
				title: "Learning to Code",
				url: "./learning/index.html",
				target: "_self",
				date: "September 2016 - present",
				description: "A collection of projects I've made while learning web development",
				tools: "JavaScript | Vue.js | WoofJS | HTML5 | CSS",
				id: "learning"
			},
			{
				title: "Primed Minds Parity Interactive",
				url: "http://primedminds.com/pp_flow.html?s=PPI8",
				gitHubUrl: "https://github.com/joebeachjoebeach/sox-monster-primed-minds",
				target: "_blank",
				date: "February 2017",
				description: "<a href='http://primedminds.com'>Primed Minds</a> is a tool designed to inspire interest in mathematics in children. This interactive allows the user to discover on their own the probability of blindly picking a pair of matching socks.",
				tools: "HTML5 | CSS3 | jQuery | Bootstrap",
				id: "primed-minds"
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
		resume: [
			{
				position: "Curriculum Developer / Coding Teacher",
				business: "The Coding Space",
				url: "http://thecodingspace.com",
				location: "New York, NY",
				date: "Aug 2016 - Present",
				description: [
					"Teaching children to code with Scratch, WoofJS, JavaScript, HTML, CSS, and Lego Mindstorms",
					"Developing curriculum for learning HTML, CSS, and JavaScript",
					"Assisting with scheduling, teacher management, and training",
					"Leading professional development sessions"
				],
				id: "resume-codingspace"
			},
			{
				position: "ESL Teacher",
				business: "OHC New York",
				url: "http://www.ohcenglish.com/school/NEW_YORK",
				location: "New York, NY",
				date: "July 2012 - December 2016",
				description: [
					"Teaching ESL courses to teenagers and adults from around the world",
					"Developing curriculum and original lesson plans",
					"Leading professional development sessions"
				],
				id: "ohc"
			},
			{
				position: "ESL Teacher",
				business: "Berlin School of English",
				url: "http://berlin.school-of-english.de/",
				location: "Berlin, Germany",
				date: "February 2011 - March 2012",
				description: [
					"Teaching ESL courses to adults in-company and at a private school",
					"Developing original lesson plans and course curricula"
				],
				id: "bse"
			}
		],
		languages: "JavaScript | HTML5 | CSS3",
		frameworks: "Vue.js | jQuery | WoofJS | Bootstrap",
		software: "Git | npm | Adobe Photoshop",
	},
	methods: {
		fadeBg: function(id) {
			var thisItem = document.getElementById(id);
			var a = 1;
			var interval = setInterval(function() {
				thisItem.style.backgroundColor = "rgba(67, 70, 80, " + a + ")";
				a -= 0.1;
				if (a <= 0)
					clearInterval(interval)
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

// can't listen to body scroll in vue instance, so here's a workaround
document.body.onscroll = function() {
	var distanceY = window.pageYOffset;
	var header = document.querySelector("header");
	if (distanceY > 80) 
		app.shrink = true;
	else
		app.shrink = false;
};















