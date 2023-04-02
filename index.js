// Charger les variables d'environnements
require("dotenv/config");

// Import des dépendances
const express = require("express");
const router = require("./app/router");

// Créer l'app
const app = express();

// Body parsing middlewares
app.use(express.urlencoded({ extended: true }));

// Router
app.use(router);

// Lancer l'app
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
