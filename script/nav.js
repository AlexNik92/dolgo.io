window.onload = init;
function init() {
	var images = document.getElementsByClassName("navbar");
	for (var i = 0; i < images.length; i++) {
		images[i].onmouseover = showAnswer;
		images[i].onmouseout = big;
	}
};
function showAnswer(eventObj) {
	var image = eventObj.target;
	var name = image.class;
	name = name + ".jpg";
	image.src = name;
	//setTimeout(reblur, 5000, image);
};
function big(eventObj) {
	var image = eventObj.target;
	var name = image.id;
	name = name + "full.jpg";
	image.src = name;
}