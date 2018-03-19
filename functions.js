
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}



function buttonFun(){
	
	var wide =  screen.width;
	
	var link = document.getElementById("buttAction");
	
	if (wide <= 768)
	{
		
		
		 document.getElementById("orange-flat-button").value = "Call Us Today!";
		 link.removeAttribute("href", "mailto:quotes@shorepaperbox.com");
		 link.setAttribute("href", "tel:+14107497125");
		
	}

	
	
	
	
}
buttonFun();



$(document).ready(function(){
$(window).scroll(function() {
		
		if($(this).scrollTop() > 500) {
	$(".topnav").fadeOut();
	
}
else{
$(".topnav").fadeIn();
}
		
});
	});
	



