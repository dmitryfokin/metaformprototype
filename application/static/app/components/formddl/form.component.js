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
    async init() {
      console.log('form init');
      this.state.formElement.webComponents.form = this;

      const formHead = {
        path: './formHead.component.js',
        base: import.meta.url,
        args: {
          formDefinition: formDefinition,
        },
      };
      await this.children.push(formHead);

    },
  },
  children: [],
});
