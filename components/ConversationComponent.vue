<template>
    <div class="conversation">
        <div class="head">
            <img class="img" src="/image.png" alt="">
            <div class="about-clara">
                <h1>Clara the Coordinator.</h1>
                <p>Hey, my name is Clara. I am your go-to personal assitant. I can help you gain insights about our projects and production together with its problems their solutions.
                </p>
                <p>Go ahead and ask me anything!</p>
            </div>
        </div>
        <div class="message-container">
            <div class="message" :class="{ own: message.author === Author.USER }" v-for="message in messages">
                <img v-if="message.author === Author.CLARA" class="img-small" src="/image_small.png" alt="">
                <p>{{ message.text }}</p>
            </div>
            <p v-if="loading" class="message thinking">Wait a second. I am thinking...</p>
        </div>
        <InputComponent @submit="(payload: string) => sendMessage(payload)"></InputComponent>
    </div>
</template>

<script setup lang="ts">
import { Author, Message } from '~/classes/Message';
import { chat } from '~/requests/chat';

const messages: Ref<Message[]> = ref([]);

const loading = ref(false);

function sendMessage(payload: string)
{
    messages.value.push(new Message(payload, Author.USER))
    loading.value = true;
    chat(payload, (message: string) => {
        setTimeout(() => {
            loading.value = false;
            messages.value.push(new Message(message, Author.CLARA));
        }, 1500);
    });
    
}
</script>

<style scoped>
.conversation {
    display: grid;
    grid-template-rows: auto 1fr auto;
    gap: 2rem;
    width: 940px;
}
.head {
    width: 940px;
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 10rem auto;
    gap: 1rem;
}
.head > * {
    border-radius: 1rem;
    border: 3px solid rgb(98, 182, 255);
}
.img {
    width: 10rem;
    height: 10rem;
}
.about-clara {
    background-color: white;
    padding: 1rem;
    display: grid;
    align-content: flex-start;
    gap: 0.5rem;
}
.about-clara p {
    font-size: 1.1rem;
}
.message-container {
    display: grid;
    gap: 1rem;
    align-content: flex-start;
}
.message {
    background-color: white;
    margin-left: 0;
    margin-right: 6rem;
    padding: 0.5rem;
    border-radius: 0.5rem;
    border: 1px solid rgb(189, 200, 216);
    max-width: 100%;
    display: grid;
    grid-template-columns: 3rem auto;
    gap: 0.5rem;
}
.message.own {
    background-color: rgb(233, 244, 255);
    margin-left: 6rem;
    margin-right: 0;
    display: block;
}
.message.thinking {
    justify-self: flex-start;
    display: block;
}
.img-small {
    width: 3rem;
    height: 3rem;
    border-radius: 0.25rem;
}
</style>