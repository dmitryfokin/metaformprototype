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
      tag: 'div',
      text: `form #`,
      state: {
        formDefinition,
        formElement: formDefinition.formElements.$form,
      },
      styles: {
        borderBottom: '1px solid #0033DD',
        height: '36px',
        color: '#88ffff',
        padding: '3px',
      },
      hooks: {
        init() {
          console.dir(this.state.formElement);
          this.state.formElement.webComponents.formHead = this;
        },
      },
    },
  ],
});
