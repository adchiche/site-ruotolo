<script setup>
import { ref, onMounted } from 'vue'

const inscriptions = ref([])

onMounted(async () => {
  const res = await fetch('http://localhost:3000/notion-data')
  const json = await res.json()
  const tableau = []
  for (let i = 0; i < json.results.length; i++) {
    const item = json.results[i]
    tableau.push({
      prenom: item.properties.Name.title[0]?.plain_text || '',
      nom: item.properties.LastName.rich_text[0]?.plain_text || '',
      age: item.properties.Age.number || '',
      telephone: item.properties.PhoneNumber.phone_number || '',
      adresse: item.properties.Adress.rich_text[0]?.plain_text || ''
    })
  }
  inscriptions.value = tableau
})
</script>

<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>Prénom</th>
          <th>Nom</th>
          <th>Âge</th>
          <th>Téléphone</th>
          <th>Adresse</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in inscriptions" :key="item.prenom + item.nom">
          <td>{{ item.prenom }}</td>
          <td>{{ item.nom }}</td>
          <td>{{ item.age }}</td>
          <td>{{ item.telephone }}</td>
          <td>{{ item.adresse }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>