({
  FORM_TYPES: [
    'free',
    'list',
    'ref',
  ],
  ITEMS_TYPES: [
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
  TITLE_PROPERTIES: {
    titlePosition: {type: this.TITLE_POSITION, defaultValue: 'auto'},
    text: {type: {key: 'string', value: 'string'}},
    show: {type: 'boolean', defaultValue: true},
  },

// style
// const STYLE_TEXT = {
//   color: 'string',
// };

// const STYLE_BACKGROUND = {
//   color: 'string',
// };

// form items
  GROUP_PROPERTIES: {
    title: this.TITLE_PROPERTIES,
    orientation: this.GROUP_ITEMS_ORIENTATION,
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
  FORM_PROPERTIES: {
    formType: this.FORM_TYPES,
    title: this.TITLE_PROPERTIES,
    hooks: { 
      onClick: 'string',
    },
  },
});
