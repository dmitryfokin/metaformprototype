({
  method: async ({ context, pathToForm }) => {
    if (!context.formsManager) context.formsManager = {
      forms: new Map(),
    };

    if (!context.counterIDForms) context.counterIDForms = 0;
    context.counterIDForms++;


    //const formData = lib.workspace.formsCache.get(pathToForm);
    const formData = domain.systemForms.applicationConfiguratorForm;

    const formModuleFront = "";

    console.debug(formData.formModule.Constructor);

    for (const key of Object.keys(formData.formModule)) {
      console.debug(key);
    };

    context.formsManager.forms.set(context.counterIDForms, {
      id: context.counterIDForms,
      pathToForm,
      formDDL: {
        form: formData.form,
        formData: formData.formData,
        formModule: formData.formModule,
        formView: formData.formView,
      },
      formData: await lib.formddl.initFormData(formData.formData),
      formView: formData.formView,
      formViewClient: {},
    });

    return { ...context.formsManager.forms.get(context.counterIDForms) };
  },
});
