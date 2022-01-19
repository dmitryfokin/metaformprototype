({
  panel: {
    Menu: {
      name: {
        en: 'Main',
        ru: 'Основное', 
      },
    },
    items: [
      {
        typeMenuItem: 'SubMenu',
        title: {
          en: 'References',
          ru: 'Справочники', 
        },
        items: [
          {
            typeMenuItem: 'Item',
            title: {
              en: 'Accounts',
              ru: 'Пользователи', 
            },
            link: 'entities.Account.list',
          },
          {
            typeMenuItem: 'Item',
            title: {
              en: 'Person',
              ru: 'Физические лица', 
            },
            link: 'entities.Person.list',
          },
        ],
      },
      {
        typeMenuItem: 'SubMenu',
        title: {
          en: 'System',
          ru: 'Система', 
        },
        items: [
          {
            typeMenuItem: 'Item',
            title: {
              en: 'Application',
              ru: 'Приложение', 
            },
            link: 'entities.Account.list',
          },
        ],
      },
    ],
  },
});
