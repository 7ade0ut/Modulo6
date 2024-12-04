<template>
  <div class="admin-container">
    <h2>Para ver la información ingresa tus datos</h2>
    <a-button class="login-button" @click="login()">Ingresar datos</a-button>
  </div>
</template>
<script>
export default {
  name: 'Admin',
  data() {
    return {

    }
  },
  methods: {
    login() {
      const nombre = prompt('Ingrese su nombre: ')
      const apellido = prompt('Ingrese su apellido: ')

      const slug = this.$route.params.slug

      this.$router.push({ name: 'Profile', params: { slug: slug, nombre: nombre, apellido: apellido}})
    },
  }
}

</script>
<style scoped>
.admin-container {
  display: flex;
  flex-direction: column;
  width: 40%;
  margin: 3rem auto auto;
  align-items: flex-start;
  gap: 1rem;
}
.login-button {
  background-color: rgb(25 135 84);
  color: #fff;
  width: auto;
}
.login-button:hover {
  background-color: rgb(25 135 84);
  color: #fff;
  outline: none;
  border: none;
}
</style>