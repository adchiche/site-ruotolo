<script setup>
import { ref, onMounted } from 'vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

const users = ref([])

onMounted(async () => {
  const res = await fetch('http://localhost:3000/api/users')
  users.value = await res.json()
})
</script>

<template>
  <div class="min-h-screen bg-gray-100 flex flex-col">
    <Navbar />

    <main class="flex-grow p-4">
      <h1 class="text-2xl font-bold mb-6 text-center">Liste des utilisateurs Notion</h1>

      <table class="table-auto w-full border-collapse border border-gray-300 bg-white">
        <thead class="bg-gray-100">
          <tr>
            <th class="border px-4 py-2">Nom</th>
            <th class="border px-4 py-2">Prénom</th>
            <th class="border px-4 py-2">Âge</th>
            <th class="border px-4 py-2">Téléphone</th>
            <th class="border px-4 py-2">Adresse</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td class="border px-4 py-2">{{ user.name }}</td>
            <td class="border px-4 py-2">{{ user.lastName }}</td>
            <td class="border px-4 py-2">{{ user.age }}</td>
            <td class="border px-4 py-2">{{ user.phoneNumber }}</td>
            <td class="border px-4 py-2">{{ user.address }}</td>
          </tr>
        </tbody>
      </table>
    </main>

    <Footer />
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
