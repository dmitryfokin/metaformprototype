async ({ context }) => {
  if (!context.formsManager) {
    context.formsManager = {
      forms: new Map(),
      counterIDForms: 0,
      activeForm: 0,

      async openForm({ context, pathToForm }) {
        this.counterIDForms++;

        // TODO: поиск по pathToForm
        const formData = domain.systemForms.applicationConfiguratorForm;

        // тут хрень пока написана
        this.forms.set(this.counterIDForms, {
          id: this.counterIDForms,
          pathToForm,
          formDDL: {
            form: formData.form,
            formData: formData.formData,
            formModule: formData.formModule,
            formView: formData.formView,
          },
          formData: await lib.formddl.initFormData(formData.formData),
          formElements: await lib.formddl.initFormElements(formData.formView),
          formView: formData.formView,
        });

        // const resFormData = { ...this.forms.get(this.counterIDForms) };
        const resFormData = this.forms.get(this.counterIDForms);
        return {
          id: resFormData.id,
          pathToForm: resFormData.pathToForm,
          formElements: resFormData.formElements,
        };
      },
      async runFormHook({ context, hook, idForm }) {
        const form = this.forms.get(idForm);

        //console.debug(hook);
        //console.debug(form);
        const deltaChange = { formElements: { $form: { title: 'title from back' } } };
        context.client.emit('workspace/formDataUpload', { idForm, ...deltaChange });
        return deltaChange;
      },
    };
  };
  return true;
};
