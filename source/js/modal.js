const modal = document.querySelector('.modal');
const button = document.querySelector('.header__button');
const buttonClose = document.querySelector('.modal__button');
const input = document.querySelector('.form__input--name');

button.addEventListener('click', openModal);
buttonClose.addEventListener('click', closeModal);

function openModal() {
  modal.classList.remove('modal-close');
  modal.classList.toggle('modal-open');
  input.focus();
}

function closeModal() {
  modal.classList.toggle('modal-close');
  modal.classList.remove('modal-open');
}
