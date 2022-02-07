
/** @returns {Schema} */
export default ({ formDefinition }) => ({
  tag: 'section',
  attrs: {
    //id: 'workspace',
  },
  styles: {
    border: '2px solid #0033DD',
    height: '100%',
  },
  methods: {
    showMessage(message) {
      console.dir(`form #${formDefinition.id} - ${message}`);
      formDefinition.webWorkspaceComponent.methods.showMessage(`Hi from form #${formDefinition.id}`);
    },
  },
  children: [
    {
      tag: 'div',
      text: `form #${formDefinition.id}`,
      styles: {
        border: '2px solid #0033DD',
        height: '36px',
        color: '#009933',
      },
    },
  ],
});
