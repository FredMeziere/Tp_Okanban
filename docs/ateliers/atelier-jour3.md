# O'Kanban - E03 - Atelier API

## Architecture

Objectif : si ce n'est pas déjà fait, mettre en place l'architecture "classique" d'un projet `Express` :

- installer les `dépendances` nécessaires avec npm.
- point d'entrée `index.js`.
- dossier `app/controllers`.
- fichier `app/router.js`.

## Le Train-train Express

Mettre en place le fichier `index.js`. Oui c'est vrai, c'est un peu toujours la même chose...

Note: pensez qu'on va faire des routes `POST` (donc avec des `body`...) !

## Premiers controllers, premières routes

En respectant au maximum les principes de l'architecture `REST`, et [le tableau de routes fait ensemble](../resources/api-base-endpoints.md), implémentez tout ce que vous pouvez :

- Commencez plutôt par les routes `/lists` car elles sont [toutes spécifiées](../resources/api-endpoints-specifications.md)

- Si vous préférez, n'hésitez pas à faire d'abord toutes les routes `GET`, puis les `POST`, `PATCH`, `DELETE`, `PUT`.

## Tester les routes

Testez vos routes ! Ils existent diverses solutions : 
- [Insomnia](https://support.insomnia.rest/article/23-installation#ubuntu)
- [Postman](https://www.getpostman.com/)
- [REST Client (VSC Extension)](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)
- [Thunder Client (VSC Extension)](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client)
- N'oubliez pas que les routes `GET` sont facilement testables depuis n'importe quel navigateur en tapant la route dans la barre d'URL 😉
