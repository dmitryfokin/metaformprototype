({
  method: async ({ context, hook, idForm }) => {
    const form = context.formsManager.forms.get(idForm);

    //console.debug(hook);
    console.debug(form);
    // if (!context.formsManager) context.formsManager = {
    //   forms: new Map(),
    // };

    // if (!context.counterIDForms) context.counterIDForms = 0;
    // context.counterIDForms++;

    // const formData = domain.systemForms.applicationConfiguratorForm;

    // const formModuleFront = "";

    // // for (const key of Object.keys(formData.formModule)) {
    // //   console.debug(key);
    // // };

    // context.formsManager.forms.set(context.counterIDForms, {
    //   id: context.counterIDForms,
    //   pathToForm,
    //   formDDL: {
    //     form: formData.form,
    //     formData: formData.formData,
    //     formModule: formData.formModule,
    //     formView: formData.formView,
    //   },
    //   formData: await lib.formddl.initFormData(formData.formData),
    //   formElements: await lib.formddl.initFormElements(formData.formView),
    //   formView: formData.formView,
    //   formViewClient: {},
    // });

    //return { };
    const deltaChange = { formElements: {$form: {title: 'title from back' } } };

    context.client.emit('workspace/formDataUpload', {idForm, ...deltaChange});  


    return deltaChange;
  },
});
