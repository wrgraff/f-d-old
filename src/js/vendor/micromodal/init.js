// Prepare links for micromodal: get href to data-attribute
const microModalLinks = document.querySelectorAll('a[data-modal]');
microModalLinks.forEach((link) => {
    link.addEventListener('click', (evt) => {
		evt.preventDefault();
		MicroModal.show(link.dataset.modal);
	});
});

const microModalCloses = document.querySelectorAll('[data-modal-close]');
microModalCloses.forEach((button) => {
	console.log(button);
    button.addEventListener('click', () => {
		MicroModal.close(button.closest('.modal').getAttribute('id'));
	});
});
