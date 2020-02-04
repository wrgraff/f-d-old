// Site utils

// Site apps
let pageHeader = document.querySelector('.page-header');

if (pageHeader) {
	let menuButton = pageHeader.querySelector('.page-header__menu-button');
	let contactsButton = pageHeader.querySelector('.page-header__contact-button');
	let controls = pageHeader.querySelector('.page-header__controls');
	let nav = pageHeader.querySelector('.page-header__nav');

	pageHeader.classList.add('page-header_fixed');
	menuButton.classList.remove('page-header__menu-button_hidden');
	contactsButton.classList.remove('page-header__contact-button_hidden');
	controls.classList.add('page-header__controls_fixed');
	nav.classList.add('page-header__nav_closed');

	menuButton.addEventListener('click', () => {
		nav.classList.toggle('page-header__nav_closed');
		nav.classList.toggle('page-header__nav_opened');

	});
};

