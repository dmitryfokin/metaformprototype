({
  method: async ({ pathToForm }) => {
    const formData = await context.formsManager.openForm(
        { context, pathToForm }
      );
    return { pathToForm, formData };
  },
});
