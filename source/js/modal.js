const INTERECTIVE_SELECTORS = ['a', 'button', 'input', 'textarea', '[tabindex]'];

// const body = document.querySelector('body');
const openButton = document.querySelector('.header__button');
const input = document.querySelector('.form__input--name');
const modalWindow = document.querySelector('.modal');

class ModalWindow {
  constructor(doc, modal) {
    this.doc = doc;
    this.modal = modal;
    this.interactiveElementsList = [];
    this.blockElementsList = [];
  }

  create() {
    let elements = this.doc.querySelectorAll(INTERECTIVE_SELECTORS.toString());
    let element;
    for (let i = 0; i < elements.length; i++) {
      element = elements[i];
      if (!this.modal.contains(element)) {
        if (element.getAttribute('tabindex') !== '-1') {
          element.setAttribute('tabindex', '-1');
          this.interactiveElementsList.push(element);
        }
      }
    }

    let children = this.doc.body.children;
    for (let i = 0; i < children.length; i++) {
      element = children[i];
      if (!this.modal.contains(element)) {
        if (element.getAttribute('aria-hidden') !== 'true') {
          element.setAttribute('aria-hidden', 'true');
          this.blockElementsList.push(element);
        }
      }
    }
  }

  remove() {
    let element;
    while (this.interactiveElementsList.length !== 0) {
      element = this.interactiveElementsList.pop();
      element.setAttribute('tabindex', '0');
    }

    while (this.interactiveElementsList.length !== 0) {
      element = this.interactiveElementsList.pop();
      element.setAttribute('aria-gidden', 'false');
    }
  }
}

const modal = new ModalWindow(document, modalWindow);

const modalControl = () => {
  const closeModal = (event) => {
    const target = event.target;

    if (target === modalWindow || event.code === 'Escape' || target.closest('.modal__button')) {
      modalWindow.classList.toggle('modal-close');
      modalWindow.classList.remove('modal-open');
      // body.style.overflow = 'auto';
      modal.remove();
    }
    document.removeEventListener('keydown', closeModal);
  };

  const openModal = () => {
    modalWindow.classList.remove('modal-close');
    modalWindow.classList.toggle('modal-open');
    modal.create();
    input.focus();
    // body.style.overflow = 'hidden';
    document.addEventListener('keydown', closeModal);
  };

  openButton.addEventListener('click', openModal);
  modalWindow.addEventListener('click', closeModal);
};

modalControl();
