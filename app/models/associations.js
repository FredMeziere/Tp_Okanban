const Card = require("./Card");
const Label = require("./Label");
const List = require("./List");



List.hasMany(Card, {
  as: "cards", // Depuis une List, je pourrai demander ses "cards"
  foreignKey: "list_id"
});
Card.belongsTo(List, {
  as: "list", // Depuis une Card, je veux la "list"
  foreignKey: "list_id"
});


Card.belongsToMany(Label, {
  as: "labels",
  through: "card_has_label",
  foreignKey: "label_id" // pour une carte, on cherche les labels

});
Label.belongsToMany(Card, {
  as: "cards",
  through: "card_has_label",
  foreignKey: "card_id" // pour un label, on cherche les cartes
});



module.exports = { Label, Card, List };
