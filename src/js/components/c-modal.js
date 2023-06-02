const modalForm = document.querySelector('.modal--form');
const modalSuccess = document.querySelector('.modal--success');
const modalCloseBtns = document.querySelectorAll('.modal__close');
const modalTogglers = document.querySelectorAll('.js-cta-button');
const modalBgs = document.querySelectorAll('.modal .modal__bg');
const wrapper = document.querySelector('.wrapper');

modalTogglers.forEach((el) => {
  el.addEventListener('click', () => showModal(modalForm));
});


function closeModal(modal) {
  modal.classList.remove('modal--active');
  body.classList.remove('_fixed');
  wrapper.classList.remove('_fixed');
}

function showModal(modal) {
  modal.classList.add('modal--active');
  body.classList.add('_fixed');
  wrapper.classList.add('_fixed');

  modalCloseBtns.forEach((btn) => btn.addEventListener('click', () => closeModal(modal)));
  modalBgs.forEach((bg) => bg.addEventListener('click', () => closeModal(modal)));
}


