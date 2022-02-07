import {setAdapterMethods} from '../../lib/formManager/adapterToSwayer.js';

/** @returns {Schema} */
export default () => ({
  tag: 'section',
  attrs: {
    id: 'workspace',
  },
  styles: {
    border: '1px solid #009933',
    height: 'calc(100vh - 140px)',
    margin: '0 12px',
    padding: '5px',
  },
  children: [],
  methods: {
    async showForm(formDefinition) {
      console.dir(formDefinition);
      const formComponent = { 
        path: './formddl/form.component.js',
        base: import.meta.url, 
        args: {
          formDefinition: formDefinition,
        },
      };
      await this.children.splice(0, 1, formComponent);
      formDefinition.webComponents.form = this.children[0];
      
      formDefinition.webComponents.form.methods.showMessage('show message from parent');

    },
  },
  hooks: {
    init() {
      setAdapterMethods({showForm: this.methods.showForm});
    },
  },
});
