import {toSwayer} from './adapterToSwayer.js';
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

    form.formData.formViewClient = await toSwayer(form.formData.formView);

    this.forms.set(form.formData.id, {...form.formData});
    console.dir(this.forms.get(form.formData.id));
  }
}
