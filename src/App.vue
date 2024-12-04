<template>
  <div id="app">
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav> -->
    <nav class="navbar">
      <!-- <router-link to="/">Games Opinion</router-link> -->
      <a href="https://rawg.io/apidocs" target="_blank"><a-icon type="rocket" theme="filled" /> Games Opinion</a>
      <router-link to="/home"><a-icon type="home" theme="filled" /> Home</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  box-sizing: border-box;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

/* Navbar */
.navbar {
  width: 100%;
  height: 3rem;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.navbar a, .navbar a:link, .navbar:active {
  color: #FFFFFF !important;
}
</style>
