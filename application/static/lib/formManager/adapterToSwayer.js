import { getTitle } from '../formManager/utils.js';

const workspaceMethods = {};

// elements specification
const FORM_ELEMENT = {
  params: [
    { nameData: 'title', webComponent: 'formHead', nameParam: 'text', fn: getTitle },
  ],
  attrs: [
    { name: 'hidden', webComponent: 'form' },
  ],
}

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
        Object.defineProperty(el, attr.name, {
          get() {
            return el.webComponents[attr.webComponent].attrs[attr.name];
          },
          set(value) {
            // TODO: проверить типизацию
            el.webComponents[attr.webComponent].attrs[attr.name] = value;
          },
        });
      };

    };
  };
}

// form manager
export const showForm = async (formDefinition) => {
  await workspaceMethods.showForm(formDefinition);
  console.dir(formDefinition.formElements);
  await bindComponentsToData(formDefinition);

  // formDefinition.formElements.$form.title = 'заголовок привязанный к formddl';
  formDefinition.formElements.$form.hidden = false;
};

// swayer
export const setAdapterMethods = async (methods) => {
  workspaceMethods.showForm = methods.showForm;
};
