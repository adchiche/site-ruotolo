<template>
  <nav class="bg-white shadow-lg">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex items-center">
          <router-link to="/" class="text-2xl font-bold text-gray-800">Ruotolo Brothers</router-link>
        </div>
        <div class="flex items-center space-x-4">
          <router-link to="/" class="text-gray-600 hover:text-gray-900">Accueil</router-link>
          <router-link to="/contact" class="text-gray-600 hover:text-gray-900">Contact</router-link>
          <router-link to="/inscription" class="text-gray-600 hover:text-gray-900">Inscription</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script> 