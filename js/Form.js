export default class Form {
  constructor(id) {
    this.formElement = document.getElementById(id);
  }

  getValues() {
    const formData = new FormData(this.formElement);
    return Object.fromEntries(formData.entries());
  }

  isValid() {
    return this.formElement.checkVisibility
  }

  reset() {
    this.formElement.reset();
  }
}