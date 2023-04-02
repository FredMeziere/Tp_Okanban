# O'Kanban - E02 - Atelier Sequelize

=> Idée générale :
- Créer la base de données et son utilisateur SGBD
- Définir les modèles Sequelize
- Se connecter à la BDD avec Sequelize
- Et tester !


## De "concept" à "logique"

En se basant sur le MCD et en utilisant [les règles de transformation en MLD](https://kourou.oclock.io/ressources/fiche-recap/mld/), lister dans le fichier `docs/resources/mld.md` les tables à créer ainsi que les champs qu'elles vont contenir (un "brouillon" de MLD donc). Possibilité aussi de le faire sous forme de schema. 

Ne pas oublier de typer chaque colonne de chaque table ! [Ici, la liste des types supportés par postgresl](https://www.postgresql.org/docs/9.2/datatype.html#DATATYPE-TABLE).

## Pas de fondations, pas de palais...

Commencer par créer un utilisateur et une base de données pour notre projet. 

(Si possible `okanban` / `okanban` / `okanban` pour éviter les pépins...)

[La fiche récap est ici](https://kourou.oclock.io/ressources/fiche-recap/postgresql/).

## Fichier de définition des données

Une fois les tables listées dans le MLD, il est temps d'écrire un fichier SQL (`data/create_tables.sql`) qui va contenir toutes les instructions pour créer ces tables !

Garder la [fiche récap SQL](https://kourou.oclock.io/ressources/fiche-recap/le-langage-sql/) sous le coude est une bonne idée :wink:

Quelques règles :
- Un seul fichier pour créer toutes les tables !
- Toujours commencer par détruire une table "si elle existe" avant de tenter de la créer. Cela permet d'éxecuter le fichier sans se soucier des runs précédents.
- On peut écrire des commentaires en SQL, via les `/*` (ex : `/* Comme ceci */`) ou le double tiret (ex : `-- commentaire`)

Note : on aurait pu faire cette étape directement via `Sequelize`, mais on veut que vous pratiquiez la création de scripts SQL.

## Seeding

Le seeding est une opération qui consiste à insérer des données fictive dans la base de données afin de pouvoir tester son bon fonctionnement et mettre la logique de notre conception à l'épreuve du feu.

Dans un fichier `data/seed_database.sql`, écrire des instructions SQL pour insérer des données cohérentes dans toutes les tables. Ne pas oublier de remplir AUSSI les tables de liaison !

## Run SQL, run !

Une fois le fichier complet, il est temps de l'éxecuter. On peut se servir du terminal, ou d'un outil graphique type DBeaver, du CLI psql (`\i`), peu importe....

Rappel : pour executer un fichier SQL en ligne de commande : `psql -U user -d database -f chemin/vers/fichier.sql`

## Initialiser le projet npm

- Vous connaissez la chanson 🎶. A vous de jouer !

- Ensuite, àjouter 3 scripts au `package.json`:
  - `npm run db:create` pour créer les tables dans la BDD
  - `npm run db:seed` pour insérer les enregistrements dans les tables
  - `npm run db:reset` pour faire les 2 opérations l'une après l'autre !

## Models

Maintenant que la base de données est prête et qu'elle contient des données de test, on peut créer nos modèles `Sequelize`.

- Installer les packages nécessaires (note: `sequelize` nécessite `pg` !)
- Créer les dossier habituels (`app` et `app/models`)
- Créer les modèles `Sequelize`. Ne pas hésiter à s'inpirer du projet `Oquiz`. 

- Et enfin, ne pas oublier les **associations** dans un fichier dédié.

## Tests

C'est l'heure de tester ! 

Créer un fichier `sandbox/connect-db-tests.js`, y importer les modèles, et faire quelques requêtes pour vérifier que tout fonctionne !

Ex : `List.findAll()` => on vérifie que ça renvoit bien toutes les listes de ma BDD, et c'est gagné ! 
