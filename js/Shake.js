var timerCount = 1;
var timer = setInterval('sliderController()', 1000);
var time1r = setInterval('sliderController1()', 3000);
var time2r = setInterval('sliderController2()', 500);
var a = ["tada", "bounce", "pulse", 'shake', 'flash', 'jiggle']
function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}
function sliderController() {

	$('#Q5').transition(a[getRandomInt(6)]);
	$('#Q2').transition(a[getRandomInt(6)]);
}
function sliderController1() {

	$('#Q1').transition(a[getRandomInt(6)]);
	$('#Q4').transition(a[getRandomInt(6)]);
	$('#Q3').transition('tada');
}
function sliderController2() {

	$('#Q3').transition(a[getRandomInt(6)]);
	$('#Q2').transition(a[getRandomInt(6)]);
}