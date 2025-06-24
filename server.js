require("dotenv").config();
const express = require("express");
const { Client } = require("@notionhq/client");
const cors = require("cors");

// Initialisation du client Notion
const notion = new Client({ auth: process.env.NOTION_API_KEY });
const databaseId = process.env.NOTION_DATABASE_ID;

const app = express();

// Middleware pour parser le JSON et gérer les CORS
app.use(express.json());
app.use(cors());

// Route pour récupérer la liste des inscriptions
app.get("/list", async (req, res) => {
  try {
    const response = await notion.databases.query({ 
      database_id: databaseId,
      sorts: [
        {
          property: "Name",
          direction: "ascending"
        }
      ]
    });
    
    const entries = [];
    for (const page of response.results) {
      entries.push({
        id: page.id,
        name: page.properties.Name?.title[0]?.plain_text || '',
        lastName: page.properties.LastName?.rich_text[0]?.plain_text || '',
        number: page.properties.Number?.number || '',
        phoneNumber: page.properties["Phone Number"]?.phone_number || '',
        adress: page.properties.Adress?.rich_text[0]?.plain_text || ''
      });
    }

    res.json(entries);
  } catch (error) {
    console.error('Erreur lors de la récupération des données:', error);
    res.status(500).json({ error: 'Erreur lors de la récupération des données' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
}); 