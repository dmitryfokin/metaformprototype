({
  form: {
    formType: 'free',
    mainSchema: 'entities.Account',
    store: 'memory',
    allow: 'read',
    schema: 'Account',
  },
  
  formData: {
    list: 'entities.Account.list',
  },
  async formModule() {
    b.init = async() => {
      console.log('back init');
    };
    f.init = async() => {
      console.log('front init');
      console.log('get value on front from back', b.getValue());
    };
    b.getValue = async () => {
      return 42;
    };
  },

  formView: {
    title: {
      text: {en: 'Accounts list'},
      titleShow: true,
    },
    children: [
      {
        typeElement: 'groupElements',
        title: {
          show: false,
        },
        children: [
          {
            typeElement: 'gridElement',
            title: {
              titleShow: false,
            },
            dataSource: 'list',
            columns: [
              {
                typeElement: 'fieldElement',
                title: {
                  text: {en: 'login'},
                },
                dataSource: 'list.login',
              },
              {
                typeElement: 'fieldElement',
                title: {
                  text: {en: 'email'},
                },
                dataSource: 'list.email',
              },
              {
                typeElement: 'fieldElement',
                title: {
                  text: {en: 'phone'},
                },
                dataSource: 'list.phone',
              },
              {
                typeElement: 'fieldElement',
                title: {
                  text: {en: 'active'},
                },
                dataSource: 'list.active',
              },
            ],
          },
        ],
      },
    ],
  },
});
