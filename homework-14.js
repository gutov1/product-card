export class Modal {
  constructor(modalId, buttonId, shouldCloseOnOverlay) {
    this.modal = document.getElementById(modalId);
    this.overlay = document.getElementById('overlay');
    this.closeButton = this.modal.querySelector('#modal-close-button');
    this.shouldCloseOnOverlay = shouldCloseOnOverlay;
    
    this.closeHandler = () => {
      this.close();
    }

    this.#initOpen(buttonId);
  }

  open() {
    this.modal.classList.add('modal-showed');
    this.overlay.classList.add('overlay-showed');

    this.closeButton.addEventListener('click', this.closeHandler);

    if (this.shouldCloseOnOverlay) {
      this.overlay.addEventListener('click', this.closeHandler);
    }
  }

  close() {
    this.modal.classList.remove('modal-showed');
    this.overlay.classList.remove('overlay-showed');

    this.closeButton.addEventListener('click', this.closeHandler);

    if (this.shouldCloseOnOverlay) {
      this.overlay.removeEventListener('click', this.closeHandler);
    }
  }

  isOpen() {
    return this.modal.classList.contains('modal-showed');
  }

  #initOpen(buttonId) {
    const button = document.getElementById(buttonId);
    button.addEventListener('click', () => {
      this.open();
    })
  }
}