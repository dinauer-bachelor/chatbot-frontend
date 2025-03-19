<template>
    <div class="input-container">
        <textarea rows="4" class="input" name="" id="" v-model="input"></textarea>
        <button class="button" @click="() => sendMessage()">Ask Clara!</button>
    </div>
</template>

<script setup lang="ts">
const input = ref('');

const emits = defineEmits<{
    (e: 'submit', payload: string): void
}>();

function sendMessage() 
{
    emits('submit', input.value);
    input.value = '';
}
</script>

<style scoped>
.input-container {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 1rem;
}
.input-container > * {
    border-radius: 1rem;
}
.input {
    width: 100%;
    border: none;
    outline: none;
    resize: vertical;
    padding: 0.5rem;
}
.button {
    background-color: rgb(0, 108, 202);
    color: white;
    padding: 0.5rem;
    outline: none;
    border: none;
    cursor: pointer;
}
.button:hover {
    background-color: #4340fd;
}
</style>