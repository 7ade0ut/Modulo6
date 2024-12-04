<template>
  <div class="opinion-view-container">
    <h1>Escribe tu opinión para el juego: {{ gameName }}</h1>
    <OpinionForms />
  </div>
</template>
<script>
import OpinionForms from '@/components/OpinionForms.vue';

export default {
  name: 'OpinionView',
  components: {
    OpinionForms
  },
  data() {
    return {
      gameName: this.$route.params.slug,
    }
  }
}
</script>
<style scoped>
.opinion-view-container {
  padding-top: 5rem;
}
</style>