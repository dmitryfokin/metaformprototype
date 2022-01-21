({
  access: 'public',

  method: async ({ pathToForm }) => {

    const formData = await lib.workspace.openForm.method({ context, pathToForm });
    console.debug(formData);

    return { pathToForm, formData };
  },
});
