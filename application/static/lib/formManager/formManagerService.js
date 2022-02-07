import {showForm} from './adapterToSwayer.js';

export default class FormsManager  {
  constructor() {
    this.forms = new Map();
  }

  async openForm(pathToForm) {
    const form = await api.workspace.openForm({pathToForm});
    this.forms.set(form.formData.id, {...form.formData});
    const formDefinition = this.forms.get(form.formData.id);
    formDefinition.webComponents = {};
    await showForm(formDefinition);

    console.dir(this.forms.get(1));
  }
}
