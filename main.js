let projects = document.getElementsByClassName("projects");
let button = document.getElementsByClassName("fa-angle-up")[0];
for (let i=0; i<projects.length; i++) {
projects[i].addEventListener("mouseenter",function(event) {
		let name = event.target.children[1].innerHTML;
		event.target.children[1].innerHTML = '<span style="color: black;">< </span>' + name + '<span style="color: black;"> /></span>';
	
		projects[i].addEventListener("mouseleave",function(event) {
			event.target.children[1].innerHTML = name;
	})
	})
}
let bottom = 0;
function updown() {

	if(bottom<15) {
		bottom ++;
		button.style.bottom = bottom + "px";
	}
	else{
		bottom=0;
	}

}
setInterval(updown,80);