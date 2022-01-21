export default class FormsManager  {
  constructor() {
    this.forms = [];

  }

  addForm(pathToForm) {
    this.forms.push({pathToForm});
    console.log(pathToForm);
  }

  async openForm(pathToForm) {
    const formData = await api.workspace.openForm({pathToForm});
    console.log({formData: formData});


    this.forms.push({pathToForm});
    // console.log(`openForm: ${pathToForm}`);
  }
}
