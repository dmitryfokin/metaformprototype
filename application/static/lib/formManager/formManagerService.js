export default class FormsManager  {
  constructor() {
    this.forms = [];

  }

  addForm(pathToForm) {
    this.forms.push({pathToForm});
    console.log(pathToForm);
  }

  openForm(pathToForm) {
    this.forms.push({pathToForm});
    console.log(pathToForm);
    // console.log(`openForm: ${pathToForm}`);
  }
}
