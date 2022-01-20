// // import todoController from '../domain/todo-controller.js';
// // import todoStore from '../domain/todo-store.js';
// // import {
// //   mainSectionStyle,
// //   todoListStyle,
// //   toggleAllTodoStyle,
// // } from './main.style.js';

// // /** @returns {SchemaConfig} */
// // const createListItem = (todo) => ({
// //   path: './todo-item/todo-item.component',
// //   base: import.meta.url,
// //   args: { todo },
// // });

// /** @returns {Schema} */
// export default ({ todos }) => ({
//   tag: 'section',
//   styles: mainSectionStyle(),
//   children: [
//     {
//       tag: 'input',
//       styles: toggleAllTodoStyle(),
//       attrs: {
//         type: 'checkbox',
//       },
//     },
//     {
//       tag: 'ul',
//       meta: import.meta,
//       styles: todoListStyle(),
//       channels: {
//         addTodoChannel(todo) {
//           const li = createListItem(todo);
//           this.children.push(li);
//         },
//         clearCompletedChannel() {
//           for (let i = 0; i < todoStore.todos.length; ++i) {
//             const todo = todoStore.todos[i];
//             if (todo.completed) {
//               this.children.splice(i--, 1);
//               todoController.remove(todo);
//             }
//           }
//           this.emitCustomEvent('todoChangeEvent');
//         },
//       },
//       children: todos.map(createListItem),
//     },
//   ],
// });

/** @returns {SchemaConfig} */
const createMenuItem = (menuItem) => ({
  // path: './todo-item/todo-item.component',
  // base: import.meta.url,
  // args: { todo },
  tag: 'li',
  text: menuItem.title.en,
});

const getMenu = async () => {
  const menu = await api.workbenche.getPanel();

  //console.log({...menu.menu});

  const view = {
    tag: 'div',
    meta: import.meta,
    children: [
      {
        tag: 'ul',
        meta: import.meta,
        children: menu.menu.items.map(createMenuItem),
      },
    ],
  };

{/* <ul class="nav nav-pills">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Active</a>
  </li>
  <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Dropdown</a>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
  </li>
</ul> */}
  const view2 = {
    tag: 'div',
    meta: import.meta,
    children: [
      {
        tag: 'ul',
        //meta: import.meta,
        attrs: {
          class: 'nav nav-pills'
        },
        children: [
          { tag: 'li', attrs: { class: 'nav-item' }, children:[{ tag: 'a', attrs: { class: 'nav-link', href: '#' }, text: 'Link1'}] },
          { tag: 'li', attrs: { class: 'nav-item' }, children:[{ tag: 'a', attrs: { class: 'nav-link', href: '#' }, text: 'Link2'}] },
          { tag: 'li', attrs: { class: 'nav-item' }, children:[{ tag: 'a', attrs: { class: 'nav-link', href: '#' }, text: 'Link3'}] },
        ],
      },
    ],
  };
  return view2;
};

export default async () => await getMenu();
