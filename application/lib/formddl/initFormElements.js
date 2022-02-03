async (formView) => {
  const formElements = {};

  const getChildren = (children, parent = null) => {
    for (const el of children) {
      if (formElements[el.nameElement]) {
        new Error(`element name ${el.nameElement} already taken`);
      }

      formElements[el.nameElement] = {
        ...el,
        parent: parent && parent.nameElement,
        children: [],
      };

      if (parent) parent.children.push(el.nameElement);

      if (el.children && el.children.length > 0) {
        getChildren(el.children, formElements[el.nameElement]);
      };
    };
  };

  getChildren(formView.children);

  console.debug({...formElements});

  return formElements;
};