<template>
  <div class="h-screen">
    <div class="h-full lg:h-11/12 rounded-2xl bg-gradient-to-r flex justify-center items-center text-center">
    <div class="bg-white p-8 rounded-xl shadow-lg w-11/12 max-w-lg sm:w-10/12 md:w-8/12 lg:w-6/12">
      <h1 class="text-6xl sm:text-5xl md:text-6xl font-extrabold text-red-600 mb-4">404</h1>
      <p class="text-lg sm:text-base md:text-xl text-gray-800 mb-6">Oops! The page you're looking for doesn't exist.</p>
      <p class="text-md sm:text-sm md:text-lg text-gray-600 mb-8">It seems that you've followed a broken link or entered a URL that doesn't exist on our site.</p>
      <router-link to="/" class="inline-block bg-blue-600 text-white px-6 py-2 rounded-full text-lg hover:bg-blue-700 transition-all">
        Go back to Home
      </router-link>
    </div>
  </div>
</div>
</template>
<script setup lang="ts">
// import Navbar from './Navbar.vue';
// import Container from './Container.vue';
</script>

<style scoped>
h1 {
  font-size: 4rem;
  font-weight: 800;
  color: #ff5b5b;
}

p {
  font-size: 1rem;
  color: #333;
}

a {
  text-decoration: none;
}

a:hover {
  background-color: #1e3a8a;
}
</style>