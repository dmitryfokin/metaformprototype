export default class FormsManager  {
  constructor() {
    this.forms = new Map();

  }

  addForm(pathToForm) {
    this.forms.push({pathToForm});
    console.log(pathToForm);
  }

  async openForm(pathToForm) {
    const form = await api.workspace.openForm({pathToForm});
    // console.log({...form});

    this.forms.set(form.formData.id, {...form.formData});
    //this.forms.push({pathToForm});
   console.dir(this.forms.get(form.formData.id));
  }
}
