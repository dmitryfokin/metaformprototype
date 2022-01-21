({
  form: {
    name: 'systemForms.applicationConfiguratorForm',
    formType: 'free',
    mainSchema: 'system',
    store: 'memory',
    allow: 'read',
    schema: 'system',
  },

  formData: {
    name: { type: 'string' },
    showProp: { type: 'bolean' },
    prop: { type: 'string' },
  },
  async formModule() {
    b.init = async () => {
      console.log('back init');
    };
    f.init = async () => {
      console.log('front init');
      console.log('get value on front from back', b.getValue());
    };
    b.getValue = async () => {
      return 42;
    };
  },

  formView: {
    title: {
      text: { en: 'Application configurator' },
      titleShow: true,
    },
    children: [
      {
        typeElement: 'group',
        title: {
          titleShow: false,
        },
        children: [
          {
            typeElement: 'field',
            title: {
              text: { en: 'name' },
            },
            dataSource: 'name',
          },
          {
            typeElement: 'checkbox',
            title: {
              text: { en: 'Show prop' },
            },
            dataSource: 'showProp',
          },
          {
            typeElement: 'field',
            title: {
              text: { en: 'Prop' },
            },
            dataSource: 'prop',
          },
        ],
      },
    ],
  },
});
