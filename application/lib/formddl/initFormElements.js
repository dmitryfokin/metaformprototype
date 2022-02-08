async (formView) => {
  const formElements = {
    $form: {
      definition: {
        ...formView.form,
        children: [],
      },
      webComponents: {},
    },
  };

  const getChildren = (children, parent = null) => {
    for (const el of children) {
      if (formElements[el.nameElement]) {
        new Error(`element name ${el.nameElement} already taken`);
      }

      formElements[el.nameElement] = {
        definition: {
          ...el,
          parent: parent && parent.definition.nameElement,
          children: [],
        },
        webComponents: {},
      };

      if (parent) parent.definition.children.push(el.nameElement);

      if (el.children && el.children.length > 0) {
        getChildren(el.children, formElements[el.nameElement]);
      };
    };
  };

  getChildren(formView.children, formElements.$form);

  return formElements;
};