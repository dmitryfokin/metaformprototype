({
  FORM_TYPES: [
    'free',
    'list',
    'ref',
  ],
  FORM_MODE: [
    'usual',
    'blockParent',
    'modal',
  ],
  ITEMS_TYPES: [
    'form',
    'table',
    'field',
    'button',
    'checkbox',
    'decoration',
    'label',
    'radiobutton',
    'html',
    'group',
  ],
  TITLE_POSITION: [
    'left',
    'top',
    'right',
    'bottom',
    'auto',
  ],
  MULTI_LINE: [
    'true',
    'false',
    'auto',
  ],
  GROUP_ITEMS_ORIENTATION: [
    'vertical',
    'horizontal',
    'auto',
  ],
  TEXT_I18N: {
    'string': 'string', // TODO key заменить на перечисление сокращени стран
  },
  // text: { type: { key: 'string', value: 'string' } },
  // show: { type: 'boolean', defaultValue: true },


  // form items
  FORM_ELEMENT: {
    formType: {
      type: this.FORM_TYPES,
      defaultValue: 'free',
      help: {
        ru: `
Тип формы определяет поведение формы по умолчанию.
Типы:
  * free: свободная форма, поведение полность зависит от реализации
  * list: к форме привязан набор данных.
  * ref: форма объекта, поведение по умолчанию отрисовывает кнопки сохранения, привязанные к схеме команды, отчеты
        `,
      },
    },
    title: {
      type: this.TEXT_I18N,
      defaultValue: 'en',
      help: {
        ru: `Заголовок формы.`,
        en: `Title form`,
      },
    },
    enabled: {
      type: 'boolean',
      defaultValue: true,
      help: {
        ru: `true - поведение формы определяется поведение элеметов, false - запрет изменения любых элементов`,
      },
    },
    mode: {
      type: this.FORM_MODE,
      defaultValue: 'usual',
      help: {
        ru: `
Режим открытия окна.
Режимы:
  * usual - обычное поведение формы
  * blockParent - блокировка родительской формы
  * modal - блокировка всего интерфейса
        `,
      },
    },
    width: {
      type: 'number',
      defaultValue: 0,
      help: {
        ru: `Ширина формы. 0 - автоматическая ширина`,
      },
    },
    height: {
      type: 'number',
      defaultValue: 0,
      help: {
        ru: `Высота формы. 0 - автоматическая высота`,
      },
    },
    hooks: {
      beforeCreateForm: {
        type: 'string',
        defaultValue: 'beforeCreateForm',
        atribs: {
          rejection: {
            type: 'boolean',
            defaultValue: false,
            help: {
              ru: `Если переопределить в значение true, то форма открыта не будет`,
            },
          },
        },
        help: {
          ru: `Вызывается перед создание формы. На данном этапе не загружены данные (formData).`,
        },
      },
      beforeOpenForm: {
        type: 'string',
        defaultValue: 'beforeOpenForm',
        atribs: {
          rejection: {
            type: 'boolean',
            defaultValue: false,
            help: {
              ru: `Если переопределить в значение true, то форма открыта не будет`,
            },
          },
        },
        help: {
          ru: `Вызывается перед открытием формы. На данном этапе данные (formData) уже загружены.`,
        },
      },
      beforeReopenForm: {
        type: 'string',
        defaultValue: 'beforReopenForm',
        help: {
          ru: `Вызывается перед повторным открытием формы.`,
        },
      },
      beforeClose: {
        type: 'string',
        defaultValue: 'beforeClose',
        atribs: {
          rejection: {
            type: 'boolean',
            defaultValue: false,
            help: {
              ru: `Если переопределить в значение true, то форма не будет закрыта`,
            },
          },
        },
        help: {
          ru: `Вызывается перед закрытием формы.`,
        },
      },
      onClose: {
        type: 'string',
        defaultValue: 'onClose',
        help: {
          ru: `Вызывается после закрытия формы.`,
        },
      },
      onActivation: {
        type: 'string',
        defaultValue: 'onActivation',
        help: {
          ru: `При активации формы`,
        },
      },
    },
  },
  GROUP_PROPERTIES: {
    title: {
      type: this.TEXT_I18N,
      defaultValue: 'en',
      help: {
        ru: `Заголовок группы.`,
        en: `Title group`,
      },
    },
    hidden: {
      type: 'boolean',
      defaultValue: true,
      help: {
        ru: `Скрывает или показывает группу`,
      },
    },
    enabled: {
      type: 'boolean',
      defaultValue: true,
      help: {
        ru: `true - доступность всех елементов определяется свойством каждого элемента, false - запрет изменения любых элементов группы.`,
      },
    },
    orientation: {
      type: this.GROUP_ITEMS_ORIENTATION,
      defaultValue: 'auto',
      help: {
        ru: `
Ориентация расположения подчиненных элементов.
  * vertical - вертикальное расположение подчиненных элементов,
  * horizontal - горизонтальное расположение  подчиненных элементов,
  * auto - расположение зависит от ширины формы,
`,
      },
    },
    hooks: {
      onClick: 'string',
    },
  },
  BUTTON_PROPERTIES: {
    title: this.TITLE_PROPERTIES,
    hooks: {
      onClick: 'string',
    },
  },
  FIELD_PROPERTIES: {
    title: this.TITLE_PROPERTIES,
    dataSource: 'string',
    showDropDownButton: 'boolean',
    hooks: {
      onClick: 'string',
    },
  },
  CHECKBOX_PROPERTIES: {
    title: this.TITLE_PROPERTIES,
    dataSource: 'string',
    showDropDownButton: 'boolean',
    hooks: {
      onClick: 'string',
    },
  },
  COLUMN_TABLE_PROPERTIES: {
    title: this.TITLE_PROPERTIES,
    dataSource: 'string',
    showDropDownButton: 'boolean',
    hooks: {
      onClick: 'string',
    },
  },
  TABLE_PROPERTIES: {
    title: this.TITLE_PROPERTIES,
    dataSource: 'string',
    columns: [this.COLUMN_TABLE_PROPERTIES],
    hooks: {
      onClick: 'string',
      onActiveRow: 'string',
      onActiveColumn: 'string',
    },
  },
});
