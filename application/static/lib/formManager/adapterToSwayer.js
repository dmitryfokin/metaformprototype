export const toSwayer = async (formView) => {
  const formViewClient = {
    tag: 'div',
    children: [
      {tag: 'p', text: 'form'}
    ]
  };
  console.dir(formViewClient);
  return formViewClient;
};

// export default {toSwayer}
