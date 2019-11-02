var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var selectPlanButtons = document.querySelectorAll('.plan button');
var modalClose = document.querySelector('.modal__action--negative');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');

for (var i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener('click', showModal);
}

if (modalClose) {
    modalClose.addEventListener('click', hideModal);
}

backdrop.addEventListener('click', hideModal);

function showModal() {
    modal.classList.add('open');
    backdrop.classList.add('open');
    // modal.style.display = 'block';
    // backdrop.style.display = 'block';
};

function hideModal() {
    if (modal) {
        modal.classList.remove('open');
    }
    backdrop.classList.remove('open');
    mobileNav.classList.remove('open');
    // modal.style.display = 'none';
    // mobileNav.style.display = 'none';
    // backdrop.style.display = 'none';
};

toggleButton.addEventListener('click', function () {
    mobileNav.classList.add('open');
    backdrop.classList.add('open');
    // mobileNav.style.display = 'block';
    // backdrop.style.display = 'block';
});