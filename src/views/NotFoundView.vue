<template>
  <div class="not-found-container">
    <NotFound class="not-found-item"/>
  </div>
</template>
<script>
import NotFound from '@/components/NotFound.vue'
export default {
  components: {
    NotFound,
  }
}
</script>
<style scoped>
/* * {
  box-sizing: border-box;
} */
.not-found-container {
  width:100%;
  height: 100vh;
  margin-top: -78px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.not-found-item {
  width: 45%;
}
</style>