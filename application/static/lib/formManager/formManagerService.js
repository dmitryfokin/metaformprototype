import { showForm } from './adapterToSwayer.js';

export default class FormsManager {
  constructor() {
    this.forms = new Map();
  }

  async openForm(pathToForm) {
    const form = await api.workspace.openForm({ pathToForm });
    const formElements = { ...form.formData.formElements };
    this.forms.set(
      form.formData.id,
      { ...form.formData, formElements: this.getFormElements(formElements) }
    );
    const formDefinition = this.forms.get(form.formData.id);
    formDefinition.webWorkspaceComponent = {};
    formDefinition.webComponents = {};
    
    await showForm(formDefinition);
  }

  getFormElements(formElementsDefinition) {
    const formElements = {}
    for (const key of Object.keys(formElementsDefinition)) {
      formElements[key] = {
        definition: formElementsDefinition[key],
        webComponents: {},
        // TODO: нужно определить свойства элемента по спецификации типов элементов
        // можно переопределять только измененные по отношению к определению элемента
      };
    };
    return formElements;
  }
}
