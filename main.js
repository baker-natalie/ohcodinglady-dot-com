// ***TODO*** canvas stuff ***TODO*** //

var pageLinks = {
	list: [
		{
			title: "Portfolio",
			link: "portfolio.html",
			img: "url('images/background-a.png')",
			comment: "see<br />my<br />work"
		},
		{
			title: "Blog",
			link: "blog.html",
			img: "url('images/background-c.png')",
			comment: "read<br />the<br />blog"
		},
		{
			title: "Contact",
			link: "contact.html",
			img: "url('images/background-b.png')",
			comment: "get<br />in<br />touch"
		}
	]
};

// ***TODO*** declare html variables ***TODO*** //

var HTMLpageLink = '<li class="page-link"><a href="%link%">%title%</a></li>';
var HTMLmainNav = '<a href="%link%" class="main-link"><div>%comment%</div></a>';

var HTMLproject = '<div class="project"><h3>%title%</h3></div>'
var HTMLprojectInfo = '<img src="%img%" class="portfolio-img"/><div class="info">%info%</div>';
var HTMLprojectLinks = '<p class="demo"><a href="%demo%">demo</a></p><p class="code"><a href="%code%">code</a></p>';
var HTMLcontacts = '<li class="contact"><a href="%link%" class="%class%"></a></li>';

// ***TODO*** display function for links on all pages ***TODO*** //

pageLinks.display = function() {
	for (var i = 0; i < pageLinks.list.length; i++) {
		var formattedpageLink = HTMLpageLink.replace("%link%", pageLinks.list[i].link);
		$(".menu").append(formattedpageLink.replace("%title%", pageLinks.list[i].title));
	}
};

pageLinks.display();

// ***TODO*** homepage display, add css bg images to main-nav links ***TODO*** //

var homepage = {
	display: function() {
		for (var i = 0; i < pageLinks.list.length; i++) {
			var formattedMainNav = HTMLmainNav.replace("%link%", pageLinks.list[i].link);
			$(".main-nav").append(formattedMainNav.replace("%comment%", pageLinks.list[i].comment));
			$(".main-link:last").css('background-image', pageLinks.list[i].img);
		};
	}
};

homepage.display();

// ***TODO*** portfolio object and display function --include github/codepen links***TODO*** //

var portfolio = {
	projects: [
		{
			title: "HouMuse- Neighborhood Map",
			img: "images/houmuse.jpg",
			info: "An app built with the Google Map API that draws data from another third party API (I used Foursquare!) and displays it for hardcoded locations on a map. The map should use Knockout JS and have a search function.",
			demo: "https://baker-natalie.github.io/houmuse",
			code: "https://github.com/baker-natalie/neighborhood-map"
		},
		{
			title: "Hello Sweetie",
			img: "images/hellosweetie.jpg",
			info: "Optimize and customize an existing portfolio. The original page was converted to a River Song fanpage and currently scores 91 for mobile and 96 for desktop on pagespeed insights.",
			demo: "http://mobile-portfolio.firebaseapp.com",
			code: "https://github.com/baker-natalie/optimization-project"
		},
		{
			title: "Dillard Farms",
			img: "images/dillardfarms.jpg",
			info: "Basic branding package for a small farm. Includes logo, mood board, and single page website.",
			demo: "https://dillard-farms.firebaseapp.com",
			code: "https://github.com/baker-natalie/dillard-farms"
		},
		{
			title: "Stranger Thingser",
			img: "images/strangerthings.jpg",
			info: "Personal project for CSS animation practice",
			demo: "http://codepen.io/nataliebaker/full/rrAXVO/",
			code: "http://codepen.io/nataliebaker/pen/rrAXVO/"
		}
	]
};

portfolio.display = function() {
	for (var i = 0; i < portfolio.projects.length; i++) {
		$(".portfolio").append(HTMLproject.replace("%title%", portfolio.projects[i].title));
		var formattedProjectInfo = HTMLprojectInfo.replace("%img%", portfolio.projects[i].img);
		$(".project:last").append(formattedProjectInfo.replace("%info%", portfolio.projects[i].info));
		var formattedProjectLinks = HTMLprojectLinks.replace("%demo%", portfolio.projects[i].demo);
		$(".info:last").append(formattedProjectLinks.replace("%code%", portfolio.projects[i].code));
	}
};

portfolio.display();

// ***TODO*** medium.com api call for blog posts and display function ***TODO*** //



// ***TODO*** contacts object and display function ***TODO*** //

var contacts = {
	buttons: [
		{
			class: "socicon-facebook",
			link: "https://www.facebook.com/ohcodinglady/"
		},
		{
			class: "socicon-twitter",
			link: "https://twitter.com/ohcodinglady"
		},
		{
			class: "socicon-mail",
			link: "mailto:hello@ohcodinglady.com"
		},
		{
			class: "socicon-linkedin",
			link: "https://linkedin.com/in/natalie-baker"
		},
		{
			class: "socicon-github",
			link: "https://github.com/baker-natalie"
		}
	]
};
contacts.display = function() {
	for (var i = 0; i < contacts.buttons.length; i++) {
		var formattedContact = HTMLcontacts.replace("%class%", contacts.buttons[i].class);
		$(".contacts-list").append(formattedContact.replace("%link%", contacts.buttons[i].link));
	}
};
contacts.display();