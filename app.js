export default function (app) {
  app.get("/", async (req, res) => {
    try {
      const notion = app.locals.notion;
      const databaseId = app.locals.databaseId;

      const { results } = await notion.databases.query({ database_id: databaseId });

      const users = results.map(entry => {
        const props = entry.properties;

        return {
          id: entry.id,
          name: props["Name"]?.title?.[0]?.plain_text || "—",
          lastName: props["LastName"]?.rich_text?.[0]?.plain_text || "—",
          age: props["Age"]?.number ?? "—",
          phoneNumber: props["PhoneNumber"]?.number ?? "—",
          address: props["Adress"]?.rich_text?.[0]?.plain_text || "—",
        };
      });

      res.json(users);
    } catch (err) {
      console.error("❌ Erreur dans / :", err);
      res.status(500).json({ error: "Erreur lors de la récupération des données Notion" });
    }
  });
}
