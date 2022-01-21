({
  method: async ({ context, pathToForm }) => {
    if (!context.formsManager) context.formsManager = {
      forms: new Map(),
    };

    if (!context.counterIDForms) context.counterIDForms = 0;
    context.counterIDForms++;


    //const formData = lib.workspace.formsCache.get(pathToForm);
    const formData = domain.systemForms.applicationConfiguratorForm;

    context.formsManager.forms.set(context.counterIDForms, {
      id: context.counterIDForms,
      pathToForm,
      form: formData.form,
      formData: formData.formData,
      formModule: formData.formModule,
      formView: formData.formView,
    });

    return { formData: context.formsManager.forms.get(context.counterIDForms) };
  },
});
