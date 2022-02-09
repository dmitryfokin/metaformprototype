import { showForm, closeForm } from './adapterToSwayer.js';

export default class FormsManager {
  constructor() {
    this.forms = new Map();
  }

  async openForm(pathToForm) {
    const form = await api.workspace.openForm({ pathToForm });
    this.forms.set(
      form.formData.id,
      { ...form.formData }
    );

    const formDefinition = this.forms.get(form.formData.id);
    formDefinition.webWorkspaceComponent = {};

    await showForm(formDefinition);
    const res = await api.workspace.runFormHook({
      hook: 'beforOpenForm',
      idForm: formDefinition.id,
    });
    //console.dir(res);
    formDefinition.formElements.$form.hidden = false;

    console.dir(formDefinition);
  }

  async closeForm(id) {
    closeForm(1);
  }

  async updateFormElements(formDefinition, formElementsChange) {
    for (const keyElement of Object.keys(formElementsChange)) {
      const elChange = formElementsChange[keyElement];
      const el = formDefinition.formElements[keyElement];
      
      if (!el) {
        // TODO: создать новый элемент
        return;
      }
      for (const keyParam of Object.keys(elChange)) {
        const paramChange = elChange[keyParam];
        const param = el[keyParam];
        if (!el) {
          // TODO: нет параметра, надо подумать
          return;
        }
        el[keyParam] = elChange[keyParam];
      };
    };
  }

  // actions on backend events
  // join the app.js in listener window.addEventListener   
  async uploadFormData(deltaChange) {
    console.log('data from back');
    console.dir(deltaChange);
    const formDefinition = this.forms.get(deltaChange.idForm);

    if (deltaChange.formElements) this.updateFormElements(formDefinition, deltaChange.formElements);
  }

  async backEvent(data) {
    console.log('back event');
    console.dir(data);
  }
}
