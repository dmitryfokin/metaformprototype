({
  //access: 'public',

  method: async ({ pathToForm }) => {
    const formData = await lib.workspace.openForm(
        { context, pathToForm }
      );
    return { pathToForm, formData };
  },
});
