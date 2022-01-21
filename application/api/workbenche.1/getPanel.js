({
  access: 'public',
  method: async () => {
    console.debug({a: await lib.workbenche.getPanel.method()});
    return { menu: await lib.workbenche.getPanel.method() };
  },
});
