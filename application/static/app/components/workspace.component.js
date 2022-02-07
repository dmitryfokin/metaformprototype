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
      const formComponent = { path: './formddl/form.component.js',base: import.meta.url, };
      await this.children.splice(0, 1, formComponent);
      formDefinition.webComponent = this.children[0];
      formDefinition.webComponent.methods.showMessage('show message from parent');
    },
  },
  hooks: {
    init() {
      console.log('init workspace');
      setAdapterMethods({showForm: this.methods.showForm});
    },
  },
});
