console.time('Bootstrap');

export default () => ({
  tag: 'html',
  styles: {
    fontFamily: 'Helvetica',
  },
  attrs: {
    lang: 'en',
  },
  hooks: {
    init() {
      console.timeEnd('Bootstrap');
    },
  },
  children: [
    { path: './head', base: import.meta.url },
    {
      tag: 'body',
      styles: {
        margin: 0,
        'background-color': '#000 !important',
      },
      hooks: {
        async init() {
          console.log('Body init');

          // const registerFormData = await patientService.getRegisterFormData();
          // const registerForm = createForm(registerFormData);
          // this.children.push(registerForm, addFormButton, removeFormButton);
        },
        async effect() {
          console.log('Body effect');
          //import 'console.js'; 
        },
      },
      children: [
        {
          tag: 'div',
          attrs: {
            id: 'screenConsole',
            styles: {
                'background-color': '#000 !important',
              },
            },
          children: [
            {
              tag: 'div',
              attrs: {
                id: 'panelColors',
              },
              children: [
                {
                  tag: 'div',
                  attrs: {
                    class: 'colorA spacer',
                  },
                },
                {
                  tag: 'div',
                  attrs: {
                    class: 'colorA',
                  },
                },
                {
                  tag: 'div',
                  attrs: {
                    class: 'colorB',
                  },
                },
                {
                  tag: 'div',
                  attrs: {
                    class: 'colorC',
                  },
                },
                {
                  tag: 'div',
                  attrs: {
                    class: 'colorD',
                  },
                },
                {
                  tag: 'div',
                  attrs: {
                    class: 'colorE',
                  },
                },
                {
                  tag: 'div',
                  attrs: {
                    class: 'colorF',
                  },
                },
                {
                  tag: 'div',
                  attrs: {
                    class: 'colorG',
                  },
                },
                {
                  tag: 'div',
                  attrs: {
                    class: 'colorH',
                  },
                },
                {
                  tag: 'div',
                  attrs: {
                    class: 'colorI',
                  },
                },
                {
                  tag: 'div',
                  attrs: {
                    class: 'colorJ',
                  },
                },
                {
                  tag: 'div',
                  attrs: {
                    class: 'colorK',
                  },
                },
                {
                  tag: 'div',
                  attrs: {
                    class: 'colorL',
                  },
                },
                {
                  tag: 'div',
                  attrs: {
                    class: 'colorL spacer',
                  },
                },
              ],
            },
            {
              tag: 'div',
              attrs: {
                class: 'container-fluid',
              },
              children: [
                { path: '../components/navbar', base: import.meta.url },
              ],
            },
          ],
        },
        {
          tag: 'script',
          attrs: {
            src: 'lib/bootstrap.bundle.js',
          },
        },
      ],
    },
  ],
});
