/** @returns {Schema} */
export default ({ formDefinition }) => ({
  tag: 'header',
  state: {
    formDefinition,
    formElement: formDefinition.formElements.$form,
  },
  attrs: { class: 'modal-header' },
  styles: {
    display: 'flex',
    flexShrink: 0,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottom: '1px solid #0033DD',
    height: '36px',
    color: '#88ffff',
    padding: '3px 10px',
  },
  hooks: {
    init() {
      console.log('formHead init');
      this.state.formElement.webComponents.formHead = this;
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
      hooks: {
        init() {
          this.state.formElement.webComponents.formTitle = this;
        },
      },
    },
    {
      tag: 'button',
      //text: 'X',
      state: {
        formDefinition,
        formElement: formDefinition.formElements.$form,
      },
      attrs: {
        type: 'button',
        class: 'btn-close btn-close-white',
        'aria-label': 'Close',

      },
      events: {
        click(event) {
          event.stopPropagation();
          console.log('btn close onclick');
          console.dir(this);
          console.dir(event);
          console.dir(this.state.formElement);
          //this.state.formDefinition.methods.closeForm();
        },
      },
      hooks: {
        init() {
          console.log('formHead btn close init');
        },
      },
    }
  ],
});
