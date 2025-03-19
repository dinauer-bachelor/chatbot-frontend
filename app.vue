<template>
  <div id="app">
    <ConversationComponent></ConversationComponent>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Your conversation with Clara!',
  link: [{ rel: 'icon', type: 'image/x-icon', href: '/clara_profile.jpeg' }]
})
</script>

<style scoped>
#app {
  height: 100%;
  width: 100%;
  padding: 3.5rem 0;
  background: rgb(149, 205, 255);
  background: linear-gradient(45deg, rgb(149, 205, 255) 0%, rgba(198,236,255,1) 51%, rgba(149, 205, 255) 100%);
  display: flex;
  justify-content: center;
}
</style>