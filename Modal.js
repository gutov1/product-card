export default class Modal {
  constructor(id) {
    this.modalElement = document.getElementById(id);
    this.closeBtn = document.querySelector('.modal__close');
    this.bindCloseButton();
  }

  open() {
    this.modalElement.classList.add('modal-showed');
  }
  
  close() {
    this.modalElement.classList.remove('modal-showed');
  }

  isOpen() {
    return this.modalElement.classList.contains('modal-showed');
  }

  bindCloseButton() {
    this.closeBtn.addEventListener("click", () => {
      this.close();
    });
  }
}