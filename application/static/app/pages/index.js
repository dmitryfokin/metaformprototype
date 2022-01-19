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
                id: 'panelScroll',
              },
              children: [
                {
                  tag: 'div',
                  attrs: {
                    id: 'controlScroll',
                  },
                },
              ],
            },
            {
              tag: 'div',
              attrs: {
                id: 'panelConsole',
              },
              children: [
                {
                  tag: 'div',
                  attrs: {
                    id: 'controlShadow',
                  },
                  children: [
                    {
                      tag: 'div',
                      children: [
                        {
                          tag: 'img',
                          attrs: {
                            width: '240',
                            src: './metarhia.svg',
                          },
                        },
                      ],
                    },
                    {
                      tag: 'div',
                      text: 'Menu',
                    },
                    // { path: '../components/mainMenu', base: import.meta.url }
                  ],
                },
                {
                  tag: 'div',
                  attrs: {
                    id: 'controlBrowse',
                  },
                  children: [
                    {
                      tag: 'div',
                      attrs: {
                        id: 'colsoleIndent',
                      },
                    },
                    {
                      tag: 'div',
                      attrs: {
                        id: 'controlInput',
                      },
                    },
                  ],
                },
                {
                  tag: 'div',
                  attrs: {
                    id: 'controlKeyboard',
                  },
                },
                {
                  tag: 'div',
                  attrs: {
                    id: 'controlCommand',
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  ],
});
