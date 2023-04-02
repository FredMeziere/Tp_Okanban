# O'Kanban - E04 - Atelier API (suite)

### Listes

[Voir specifications](../resources/api-endpoints-specifications.md)

### Cartes

En vous inspirant des spécifications sur les listes, mettre en place les routes suivantes :

| VERB | PATH | DESCRIPTION |
|--|--|--|
| `GET` | `/cards` | renvoie toutes les cartes existantes. |
| `GET` | `/cards/:id` | renvoie les détails de la carte demandée, avec les tags qui lui sont associés. |
| `POST` | `/cards` | crée une nouvelle carte (sans tags) et la retourne. |
| `PATCH` | `/cards/:id` | modifie une carte (ne modifie pas les tags). |
| `DELETE` | `cards/:id` | supprime une carte. |
| |
| `GET` | `/lists/:id/cards` | renvoie toutes les cartes d'une liste. Chaque carte doit porter les tags qui lui sont associés. |

### Label //

En vous inspirant des spécifications sur les listes, mettre en place les routes suivantes :

| VERB | PATH | DESCRIPTION |
|--|--|--|
| `GET` | `/labels` | renvoie tous les labels.
| `POST` | `/labels` | crée un nouveau tag.
| `PATCH` | `/labels/:id` | modifie un tag.
| `DELETE` | `/labels/:id` | supprime un tag.
| |
| `PUT` | `/cards/:card_id/labels/:tag_id` | associe un tag à la carte ciblée. Note : si on appelle plusieurs fois cette route, l'association ne doit être présent qu'une fois en base.
| `DELETE` | `/cards/:card_id/labels/:tag_id` | supprime l'association entre le tag et la carte.