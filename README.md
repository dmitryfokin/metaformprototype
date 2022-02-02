# Metarhia Example Server for Node.js with form DDL and Swayer

## install

  * clone repo
  * npm i
  * node server.js
  * open url on 8000 port

## notes

### Принципы

  * прикладной разработчик работает только с компонентами formView и formData из formModule.  
  * отрисовка измененных объектов, и проброс клиентских событий ложится на адаптер клиента.
  * formData и formViev синхронизируются между back и front
  * formModule делится на formModuleBack и formModuleFront, обе части имеют общий контекст.
  * вызовы функций back из front происходит через скрытый API

### К разработке
  * преобразовать описание формы на DDL в Swayer
  * подумать как связать компонент swayer c компонентом формы (DDL)
  * при изменении formViev на back или фронт, нужно синхронизировать их
  * при изменении formView на фронт, нужно синхронизировать компонент со swayer

## License

Copyright (c) 2020-2022 Metarhia contributors.
This starter kit is [MIT licensed](./LICENSE).
