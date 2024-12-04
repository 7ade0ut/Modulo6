<template>
  <div class="profile-container">
    <div class="profile-side-bar">
      <a-icon type="user" />
      <p>Bienvenido</p>
      <p>{{ nombreCompleto }}</p>
    </div>
    <div class="profile-content">
      <h3>Resumen de tu cuenta</h3>
      <p>Le diste me gusta al juego {{ game.name }}</p>
      <div class="profile-content-coin-card">
        <p style="text-align: left;">¿Deseas comprar este juego?</p>
        <a-button class="add-coin-button" style="background-color: rgb(255 193 7);" @click="addCoin()"><a-icon type="shopping-cart" /> Agregar coins</a-button>
        <div class="divider"></div>
        <div class="profile-content-bar">
          <p>Cantidad de coins comprados</p>
          <a-progress :percent="progressBar" :strokeColor="progressBarColor" :format="formatProgress" />
        </div>
      </div>
      <div class="profile-content-footer-cards">
        <div class="profile-content-footer-card-1">
          <div class="title-card">% de finalización del juego</div>
          <div>17% <a-icon type="line-chart" /></div>
        </div>
        <div class="profile-content-footer-card-2">
          <div class="title-card">Logros en el juego</div>
          <div>{{ game.achievements_count }} <a-icon type="trophy" /></div>
        </div>
        <div class="profile-content-footer-card-3">
          <div class="title-card">Recompensas</div>
          <div>200 <a-icon type="star" /></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      game: {},
      nombreCompleto: '',
      progressBar: 0,
      maxCoins: 50
    }
  },
  computed: {
    progressBarColor() {
      // Cambiar el color de la barra de progreso según los coins
      if (this.progressBar <= 20) {
        return 'green'; // Verde
      } else if (this.progressBar > 20 && this.progressBar <= 30) {
        return 'yellow'; // Amarillo
      } else {
        return 'red'; // Rojo
      }
    }
  },
  methods: {
    addCoin(){
      if (this.progressBar < this.maxCoins) {
        // Incrementar los coins, asegurando no superar el máximo
        // this.progressBar = Math.min(this.progressBar + 5, this.maxCoins);
        this.progressBar+=5
      } else {
        alert('Maximo numero de coins alcanzados')
      }
    },
    formatProgress(percent) {
      const dollarAmount = (this.progressBar).toFixed(2);
      return `$${dollarAmount}`; // Mostrar el valor de los coins con el símbolo de dólar
    }
  },  
  async mounted() {
    const gameId = this.$route.params.slug

    if(!gameId)
      this.$router.push({ path: '/home'})

    try {
      const apiKey = 'b071e895a3b54d17acc818788baff989'; // Reemplaza con tu API key
      const response = await this.$http.get(`https://api.rawg.io/api/games/${gameId}`, {
        params: {
          key: apiKey, // Agrega tu clave API en los parámetros
        },
      });
      // this.game = response.data.results; // Almacena los juegos en el estado local
      this.game = response.data; // Almacena los juegos en el estado local
    } catch (error) {
      console.error('Error al obtener los datos: ', error)
    }


    // Logros del juego
    try {
      const apiKey = 'b071e895a3b54d17acc818788baff989'; // Reemplaza con tu API key
      const response = await this.$http.get(`https://api.rawg.io/api/games/${gameId}/achievements`, {
        params: {
          key: apiKey, // Agrega tu clave API en los parámetros
        },
      });
      // this.game = response.data.results; // Almacena los juegos en el estado local
      console.log('Segunda consulta: ', response)
    } catch (error) {
      console.error('Error al obtener los datos: ', error)
    }

    const nombre = this.$route.params.nombre
    const apellido = this.$route.params.apellido

    this.nombreCompleto = `${nombre} ${apellido}`

    console.log(this.game)
    console.log(nombre)
    console.log(apellido)
  },
}
</script>
<style scoped>
.profile-container {
  display: flex;
  height: 98.7vh;
  margin-top: -48px;
  padding-top: 3rem;
}
.profile-side-bar {
  width: 15%;
  height: 100%;
  background-color: black;
  color: #fff;
}
.profile-content {
  width: 85%;
  display: flex;
  flex-direction: column;
  padding: 3rem 0 0 10rem;
  align-items: flex-start;
}
.profile-content-coin-card {
  width: 40%;
  border-radius: 5px;
  border: 1px solid #ddd;
  padding: 1rem;
}
.divider {
  width: 100%;
  margin: auto;
  height: 1px;
  border: 1px solid #ddd;
}
.add-coin-button {
  margin: 1.5rem auto 1rem;
}
.profile-content-bar {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 1rem auto;
}
.profile-content-footer-cards {
  margin-top: 3rem;
  width: 80%;
  height: 5rem;
  display: flex;
}
.profile-content-footer-card-1, .profile-content-footer-card-2, .profile-content-footer-card-3 {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: .5rem;
}
.profile-content-footer-card-1 {
  background-color: rgb(255 193 7);
  border-radius: 5px 0 0 5px;
}
.profile-content-footer-card-2 {
  background-color: rgb(25 135 84);
  color: #fff;
}
.profile-content-footer-card-3 {
  background-color: rgb(13 202 240);
  border-radius: 0 5px 5px 0;
}
.title-card {
  border-bottom: 1px solid #555;
  
}
</style>