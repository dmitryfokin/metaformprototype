
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
    async showMessage(message) {
      console.dir(`form ${formDefinition.id} - ${message}`);
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
