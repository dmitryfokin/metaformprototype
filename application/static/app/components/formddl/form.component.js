/** @returns {Schema} */
export default ({ formDefinition }) => ({
  tag: 'section',
  state: {
    formDefinition,
    formElement: formDefinition.formElements.$form,
  },
  attrs: {
    hidden: true,
  },
  styles: {
    border: '2px solid #0033DD',
    height: '100%',
  },
  hooks: {
    init() {
      this.state.formElement.webComponents.form = this;
    },
  },
  children: [
    {
      path: './formHead.component.js',
      base: import.meta.url,
      args: {
        formDefinition: formDefinition,
      },
    },
  ],
});
