<template>
  <div class="home-list-container">
    <div v-for="game in games" class="home-list-item">
      <img :src="game.background_image" alt="game-link">
      <div class="home-list-item-data">
        <p>{{ game.name }}</p>
        <p>{{ game.rating }}</p>
        <p>{{ game.released }}</p>
        <p>{{ game.updated }}</p>
        <div class="home-list-item-buttons">
          <a-button type="primary" @click="redirectOpinion(game.name)">
            Opinar
          </a-button>
          <a class="home-list-item-heart" @click="redirectLike(game.id)">
            <a-icon type="heart" theme="filled" style="color: red"/>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      games: [],
    }
  },

  methods: {
    async fetchGames(){
      try {
        const apiKey = 'b071e895a3b54d17acc818788baff989'; // Reemplaza con tu API key
        const response = await this.$http.get('https://api.rawg.io/api/games', {
          params: {
            key: apiKey, // Agrega tu clave API en los parámetros
          },
        });
        this.games = response.data.results; // Almacena los juegos en el estado local
      } catch (error) {
        console.error('Error al obtener los datos: ', error)
      }

      console.log(this.games)
    },
    redirectOpinion(gameName) {
      this.$router.push({ name:'Opinones', params: {slug: gameName}})
    },
    redirectLike(gameId) {
      this.$router.push({ name: 'Admin', params: {slug: gameId }})
    }
  },
  mounted() {
    this.fetchGames()
  }
}
</script>

<style scoped>
.home-list-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem 3rem;
  padding: 1rem 5rem 5rem 5rem;
}
.home-list-item {
  width:200px;
  height: 300px;
}
.home-list-item img {
  width: 100%;
}
.home-list-item-data {
  text-align: left;
}
.home-list-item-buttons {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.home-list-item-heart {
  font-size: 1.5rem;
}
</style>