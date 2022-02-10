import { getTitle } from '../formManager/utils.js';

const workspaceMethods = {};

// elements specification
const FORM_ELEMENT = {
  params: [
    { nameData: 'title', webComponent: 'formTitle', nameParam: 'text', fn: getTitle },
  ],
  attrs: [
    { nameData: 'hidden', webComponent: 'form', nameParam: 'hidden', },
  ],
  methods: [
    { nameMethod: 'closeForm', action: 'closeForm' },
  ],
};

const FORM_ELEMENTS_SPECIFICATION = new Map();
FORM_ELEMENTS_SPECIFICATION.set('form', FORM_ELEMENT);

const bindComponentsToData = async (formDefinition) => {
  for (const key of Object.keys(formDefinition.formElements)) {
    const el = formDefinition.formElements[key];

    if (FORM_ELEMENTS_SPECIFICATION.has(el.definition.typeElement)) {
      const elementSpecification = FORM_ELEMENTS_SPECIFICATION.get(el.definition.typeElement);

      for (const i in elementSpecification.params) {
        const param = elementSpecification.params[i];

        Object.defineProperty(el, param.nameData, {
          get() {
            return el.webComponents[param.webComponent][param.nameParam];
          },
          set(value) {
            // TODO: проверить типизацию
            el.webComponents[param.webComponent][param.nameParam] = value;
          },
        });

        if (el.definition[param.nameData]) {
          el[param.nameData] = param.fn
            ? param.fn(el.definition[param.nameData])
            : el.definition[param.nameData];
        };
      };

      for (const i in elementSpecification.attrs) {
        const attr = elementSpecification.attrs[i];
        Object.defineProperty(el, attr.nameData, {
          get() {
            return el.webComponents[attr.webComponent].attrs[attr.nameParam];
          },
          set(value) {
            // TODO: проверить типизацию
            el.webComponents[attr.webComponent].attrs[attr.nameParam] = value;
          },
        });
      };

      for (const i in elementSpecification.methods) {
        const method = elementSpecification.methods[i];
        el[method.nameMethod] = async () => api.workspace.runFormHook(formDefinition.id, method.fn);
      };

    };
  };
};

// form manager
export const showForm = async (formDefinition) => {
  await workspaceMethods.showForm(formDefinition);
  await bindComponentsToData(formDefinition);
};

export const closeForm = async (formDefinition) => {
  await workspaceMethods.closeForm();
};

// swayer
export const setAdapterMethods = async (methods) => {
  workspaceMethods.showForm = methods.showForm;
  workspaceMethods.closeForm = methods.closeForm;
};
