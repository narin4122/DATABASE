
/* 전역변수 */
var windowW = "";

window.addEventListener('resize', function() {
	setTimeout(function(){
		if(windowW == $(window).width())
			return;

		windowW = $(window).width();
	}, 100);
});


$(document).ready(function () {

});