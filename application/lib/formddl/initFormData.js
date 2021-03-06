async (formData) => {
  const formDataValues = {};

  const typeToValue = new Map();
  typeToValue.set('string', '');
  typeToValue.set('number', 0);
  typeToValue.set('boolean', false);

  for (const key of Object.keys(formData)) {
    // console.debug(formData[key]);
    if (typeToValue.has(formData[key].type)) {
      formDataValues[key] = typeToValue.get(formData[key].type);
    } else {
      // TODO: load ref & obj data
    };
  };
  
  return formDataValues;
};