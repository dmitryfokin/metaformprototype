({
  access: 'public',
  method: async () => {
    return { menu: await lib.workbenche.getPanel.method() };
  },
});
