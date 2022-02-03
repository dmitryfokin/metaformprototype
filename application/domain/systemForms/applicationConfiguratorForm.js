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
    name: {
      type: 'string',
      title: {
        text: {
          en: 'Name',
        },
      }
    },
    showProp: {
      type: 'boolean',
      title: {
        text: {
          en: 'Show prop',
        },
      },
    },
    prop: {
      type: 'string',
      title: {
        text: {
          en: 'Prop',
        },
      },
    },
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
        nameElement: '$groupMain',
        title: {
          titleShow: false,
        },
        children: [
          {
            typeElement: 'field',
            nameElement: '$name',
            title: {
              text: { en: 'name', },
            },
            dataSource: 'name',
          },
          {
            typeElement: 'checkbox',
            nameElement: '$showProp',
            title: {
              text: { en: 'Show prop', },
            },
            dataSource: 'showProp',
          },
          {
            typeElement: 'field',
            nameElement: '$prop',
            title: {
              text: { en: 'Prop', },
            },
            dataSource: 'prop',
          },
        ],
      },
    ],
  },
});
