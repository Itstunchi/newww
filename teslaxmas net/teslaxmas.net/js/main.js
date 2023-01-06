const iconMenu = document.querySelector('.menu__icon'),
    iconBlock = document.getElementById("icon"),
    menuBody = document.querySelector('.menu__body'),
	 iconClose = document.querySelector('.menu__close');
 
document.addEventListener("DOMContentLoaded", e => e.preventDefault());
 
iconBlock.addEventListener("click", function(e) {
   document.body.classList.toggle('lock');
   iconMenu.classList.toggle('_active');
   menuBody.classList.toggle('_active');
});
 
document.addEventListener("click", function(e) {
	const target = e.target;
	let icon = e.target.parentElement;
	if (target.closest('.menu__close')) {
	} else {
		if (icon.classList.contains("menu__icon")) return;
		document.body.classList.remove('lock');
		iconMenu.classList.toggle('_active', false);
		menuBody.classList.toggle('_active', false);
	}
});

function scrollHeader() {
	const header = document.getElementById('header');
	const mbody = document.getElementById('mbody');
	if (this.scrollY >= 30) {
		header.classList.add('scroll-header');
		mbody.classList.add('scroll-body');
	} else {
		header.classList.remove('scroll-header');
		mbody.classList.remove('scroll-body');
	}
}
window.addEventListener('scroll', scrollHeader)

const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener("click", onMenuLinkClick);
	});

	function onMenuLinkClick(e) {
		const menuLink = e.target;
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - 50;
			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth"
			});
			e.preventDefault();
		}
	}
}