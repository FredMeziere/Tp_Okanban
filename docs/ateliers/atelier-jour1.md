# O'Kanban - E01 - Atelier Conception

## Description du projet

On refait `Trello` (en plus simple !)

- On souhaite créer une application de type Kanban où il est possible de créer des **cartes** à l'intérieur de **listes**.
- L'utilisateur (unique) peut créer autant de listes qu'il désire et mettre autant de cartes à l'intérieur de ces listes.
- Chaque liste dispose d'un `nom` et d'une `position`.
- Chaque carte dispose d'un `contenu`, d'une `position` au sein de la liste, d'une `couleur` (optionnelle) et d'un ou plusieurs **label(s)** (optionnel(s))
- Un label à un `nom` (ex: Urgent) et peut avoir une `couleur` (optionelle)

On se base sur ce besoin client, et on souhaite faire l'analyse ce besoin en vu de produire le `MCD` de l'application. **N'hésitez pas à créer une issue si vous souhaitez clarifier un point.**

## Étape 1 : User Stories

`En tant que` ..., `je veux` ..., `afin de` ...

Créer/complètez un/le tableau dans le fichier `docs/resources/user-stories.md`.

Rappel : une `user story` est un **scenario de test** qui nous aide à clarifier notre besoin, comprendre les fonctionnalités attendues dans notre application, et nous permet de vérifier si l'implémentation correspond biens aux stories fixées préalablement. 


## Étape 2 : MCD

Dessinez le MCD en utilisant l'outils de votre choix : 
- un papier et un crayon 
- [draw.io](https://draw.io)
- [MoCoDo](http://mocodo.wingi.net/) (cf [fiche recap](https://kourou.oclock.io/ressources/fiche-recap/mocodo/))
- [Whimsical](https://whimsical.com/)
- etc...

N'hésitez pas à refaire un tour sur la [fiche recap' du MCD](https://kourou.oclock.io/ressources/fiche-recap/mcd-modele-conceptuel-de-donnees/).

Rappel : le MCD découle du besoin. Si vous souhaitez clarifier un point, vous pouvez créer une issue. 

## Rappels/astuces Mocodo

<details><summary>
Pour ceux qui emprunteront la voie MoCoDo, voici quelques rappels et conseils
</summary>

**Outils** => [MoCoDo](http://mocodo.wingi.net/)  
**Récap** => [Conception d'un MCD](https://github.com/O-clock-Alumni/fiches-recap/blob/master/bdd/conception-03-mcd.md)

### Entités

- un nom unique
- deux points `:`
- les attributs, séparés par une virgule `,`
- exemples :  
`AUTHOR: pen name, real name, date of birth, language`  
`BOOK: title, number of pages, type, release date`

### Relations

- [rappels](https://github.com/O-clock-Alumni/fiches-recap/blob/master/bdd/conception-03-mcd.md#cardinalit%C3%A9s)
- définir les cardinalités en se posant les bonnes questions :
  - _1 entité `A` est liée à combien d'entité `B` minimum ?_
    - 0 ou 1
  - _1 entité `A` est liée à combien d'entité `B` maximum ?_
    - 1 ou n
  - _1 entité `B` est liée à combien d'entité `A` minimum ?_
    - 0 ou 1
  - _1 entité `B` est liée à combien d'entité `A` maximum ?_
    - 1 ou n
  - au final, on a 1  cardinalité pour chaque "sens" de la relation
    - exemple : `A` => `B` = `0,n`
    - exemple : `B` => `A` = `0,1`
    - => on parle alors de relation de type `1:n` (on prend le max de chaque cardinalité)
- pour représenter cela sur _Mocodo_
  - écrire sur une seule ligne (comme pour une entité)
    - un nom unique pour la relation
    - une virgule `,`
    - minimum et maximum d'une des deux cardinalités, collés l'un à l'autre, ex : `11`, `0N` (:warning: c'est zéro-N, pas `on` en majuscules) etc.
    - le nom de l'entité visée par la cardinalité
    - une virgule `,`
    - min et max de l'autre cardinalité
    - le nom de l'autre entité
  - exemple : `WRITES, 11 AUTHOR, 0N BOOK` (:warning: zéro-N)

#### Positionnement

Mocodo utilise un système de grille _(Pensez aux tableaux HTML, le fonctionnement est assez identique !)_

- Écrivez chaque élément (entité ou relation) sur une ligne dédiée
  - Mocodo va les positionner côte à côte horizontalement (comme des `<td>`)
- Sautez une ligne dans le script pour passer à la ligne

</details>



## Étape 3 : Wireframes (bonus)

Faire un bref `wireframe` pour notre application à l'aide de votre outils préféré !

Rappel : un `wireframe` est une maquette fonctionnelle dont l'objectif est de comprendre les fonctionnalités de notre application.
