import 'dotenv/config';

import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const databaseId = process.env.NOTION_DATABASE_ID;

// Exemple de fonction pour récupérer les données de la base
export async function getDatabaseRows() {
  const response = await notion.databases.query({
    database_id: databaseId,
  });
  return response.results;
}
