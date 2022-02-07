
/** @returns {Schema} */
export default () => ({
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
      console.dir(message);
    },
  },
  children: [
    {
      tag: 'div',
      text: 'form',
      styles: {
        border: '2px solid #0033DD',
        height: '36px',
        color: '#009933',
      },
        },
  ],
});
