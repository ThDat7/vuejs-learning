<script setup>
import { ROUTE_PATHS } from '@/router/routeConstants'
</script>

<template>
  <div class="not-found">
    <h1>404</h1>
    <h2>Page Not Found</h2>
    <p>Sorry, the page you are looking for does not exist.</p>
    <router-link :to="ROUTE_PATHS.home">Return to Home</router-link>
  </div>
</template>

<style scoped>
.not-found {
  text-align: center;
  padding: 50px;
}

h1 {
  font-size: 72px;
  margin-bottom: 20px;
  color: #e74c3c;
}

h2 {
  margin-bottom: 20px;
}

p {
  margin-bottom: 30px;
}

a {
  color: #3498db;
  text-decoration: none;
  padding: 10px 20px;
  border: 1px solid #3498db;
  border-radius: 4px;
}

a:hover {
  background-color: #3498db;
  color: white;
}
</style>
