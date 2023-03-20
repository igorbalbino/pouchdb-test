# Teste PouchDB

Web App para testar funcionalidades do PouchDB.

## O que é PouchDB ?
PouchDB is an open-source JavaScript database inspired by Apache CouchDB that is designed to run well within the browser.
It enables applications to store data locally while offline, then synchronize it with CouchDB and compatible servers when the application is back online, keeping the user's data in sync no matter where they next login.
Site: https://pouchdb.com/

# Dependências

 - `body-parser`: This dependency will be used to convert the base of incoming applications into JavaScript objects.
 - `cors`: Cross-Origin Resource Sharing(CORS) is a dependency that is used to configure Express to combine headers specifying that your Rest API accepts requests from any source. 
 - `express`: This dependency denotes the Express library.
 - `helmet`: This module establishes different HTTP headers to safeguard Express APIs.
 - `morgan`: This package extends your Express Rest API’s logging capabilities.

# Changelog

Projeto iniciado e foram criadas as primeiras rodas com uma página web simples, mostrando apenas "Hello World!!".
Os arquivos `index.js`, `server.js` e `router.js` foram separados para melhor vizualização do que aconetce em cada parte.
Foi adicionado um console de tempo para as requisições realizadas.