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
  min-height: 100%;
  width: 100%;
  padding: 3.5rem 0;
  background: rgb(149, 205, 255);
  background: linear-gradient(45deg, rgb(145, 204, 255) 0%, rgb(215, 242, 255) 51%, rgb(145, 204, 255) 100%);
  display: flex;
  justify-content: center;
}
</style>