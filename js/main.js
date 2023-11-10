const ulList = document.getElementById("ulList");
const nav = document.getElementById("navigation");
let liHamburger = document.querySelectorAll(".liHamburger");
let aHamburger = document.querySelectorAll(".liHamburger a");

var prevScrollpos = window.pageYOffset;

window.onscroll = function () {
	var currentScrollPos = window.pageYOffset;
	if (prevScrollpos > currentScrollPos) {
		document.getElementById("navbar").style.top = "0";
	} else {
		document.getElementById("navbar").style.top = "-520px";
	}
	prevScrollpos = currentScrollPos;
};

nav.addEventListener("click", () => {
	document.body.classList.toggle("overflow-hidden");
	ulList.classList.toggle("hidden");
	ulList.classList.toggle("flex");
	menuIcon.classList.toggle("rotate-90");
});
