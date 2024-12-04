<template>
  <div class="home">
    <h1 class="home-view-title">Lista de Juegos Disponibles</h1>
    <HomeList />
  </div>
</template>

<script>
// @ is an alias to /src
import HomeList from '@/components/HomeList.vue'

export default {
  name: 'HomeView',
  components: {
    HomeList
  }
}
</script>
<style>
.home-view-title {
  text-align: center;
  margin: 2rem auto;
}
</style>