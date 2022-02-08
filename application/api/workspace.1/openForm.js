({
  //access: 'public',

  method: async ({ pathToForm }) => {
    const formData = await lib.workspace.openForm.method(
        { context, pathToForm }
      );
    return { pathToForm, formData };
  },
});
