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
        <ChatSessionComponent :loading="loading" :messages="messages" :user="user"></ChatSessionComponent>
        <InputComponent @submit="(payload: string) => sendMessage(payload)"></InputComponent>
    </div>
</template>

<script setup lang="ts">
import { Author, Message } from '~/classes/Message';
import { MessageContext } from '~/classes/MessageContext';
import { chat } from '~/requests/chat';

const user = 'Andreas';

const messages: Ref<Message[]> = ref([]);

const loading = ref(false);

function sendMessage(payload: string)
{
    messages.value.push(new Message(payload, Author.USER, new Date()))
    loading.value = true;
    const message = new Message(payload, Author.USER, new Date());
    const messageContext = new MessageContext();
    messageContext.user = user;
    message.context = messageContext;
    chat(message, (message: string) => {
        setTimeout(() => {
            loading.value = false;
            messages.value.push(new Message(message, Author.CLARA, new Date()));
        }, 1500);
    }, () => {
        loading.value = false;
        messages.value.push(new Message('I encountered an unknown error. Sorry.', Author.CLARA, new Date(), true));
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
</style>