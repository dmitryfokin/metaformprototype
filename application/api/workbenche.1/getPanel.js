({
  access: 'public',
  method: async () => {
    console.debug({ data: domain.workbenches });
    return { menu: domain.workbenches.main.mainMenu.panel };
  },
});
