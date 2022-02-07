const workspaceMethods = {};

// form manager

export const showForm = async (formDefinition) => {
  await workspaceMethods.showForm(formDefinition);
};

// swayer

export const setAdapterMethods = async (methods) => {
  workspaceMethods.showForm = methods.showForm;
};
