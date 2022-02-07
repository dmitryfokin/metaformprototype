// /** @returns {SchemaConfig} */
const createMenuItem = (menuItem, dropdownItem = false) => {
  const isSubMenu = (menuItem.typeMenuItem === 'SubMenu');
  const itemID = 'navbarDropdown' + application.generateID();

  const getNavLink = () => {
    return [
      {
        tag: 'div',
        children: [
          {
            tag: 'div',
            attrs: dropdownItem
              ? {
                class: 'dropdown-item',
                href: '#',
                onclick: `application.formsManager.openForm('${menuItem.link}')`
              }
              : {
                class: 'nav-link',
                'aria-current': 'page',
                href: '#',
                onclick: `application.formsManager.openForm('${menuItem.link}')`
              },
            text: menuItem.title.en,
          },
        ],
      },
    ];
  };

  const getNavLinkDropdown = () => {
    return [
      {
        tag: 'a',
        attrs: {
          class: 'nav-link dropdown-toggle', //text-success
          'data-bs-toggle': 'dropdown',
          href: '#',
          id: itemID,
          role: "button",
          'aria-expanded': 'false',
        },
        text: menuItem.title.en,
      },
      {
        tag: 'ul',
        attrs: {
          class: 'dropdown-menu',
          'aria-labelledby': itemID,
        },
        children: menuItem.items.map(i => createMenuItem(i, true)),
      },
    ];
  };

  const view = {
    tag: 'li',
    attrs: {
      class: `nav-item${isSubMenu ? ' dropdown' : ''}`,
    },
    children: isSubMenu ? getNavLinkDropdown() : getNavLink(),
  };

  return view;
};

const getNavBar = async () => {
  const menuItems = await api.workbenche.getPanel();
  const arr = menuItems.menu.items.map(createMenuItem);

  const view = {
    tag: 'nav',
    attrs: {
      class: 'navbar navbar-expand-lg navbar-dark',
      style: {
        backgroundColor: '#000',
      },
    },
    children: [
      {
        tag: 'div',
        attrs: {
          class: 'container-fluid',
        },
        children: [
          {
            tag: 'a',
            attrs: {
              class: 'navbar-brand',
              href: '#',
            },
            children: [
              {
                tag: 'img',
                attrs: {
                  src: 'metarhia.svg',
                  width: '240',
                },
              },
            ],
          },
          {
            tag: 'button',
            attrs: {
              class: 'navbar-toggler',
              type: 'button',
              'data-bs-toggle': 'collapse',
              'data-bs-target': '#navbarSupportedContent',
              'aria-controls': 'navbarSupportedContent',
              'aria-expanded': 'false',
              'aria-label': 'Toggle navigation',
            },
            children: [
              {
                tag: 'span',
                attrs: {
                  class: 'navbar-toggler-icon',
                },
              },
            ],
          },
          {
            tag: 'div',
            attrs: {
              class: 'collapse navbar-collapse',
              id: 'navbarSupportedContent',
            },
            children: [
              {
                tag: 'ul',
                attrs: {
                  class: 'navbar-nav me-auto mb-2 mb-lg-0',
                },
                children: arr,
              },
            ],
          },
        ],
      },
    ],
  };

  return view;
};
export default async () => await getNavBar();