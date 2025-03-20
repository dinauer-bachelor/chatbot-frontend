<template>
    <div class="message-wrapper">
        <div class="message-container">
            <div class="message" :class="{ own: message.author === Author.USER, error: message.error === true }" v-for="message in messages">
                <img v-if="message.author === Author.CLARA" class="img-small" src="@/public/clara_profile.jpeg" alt="">
                <div class="message-content">
                    <p class="grayed-out"><span v-if="message.author === Author.CLARA">Clara</span><span v-else>{{ user }} (me)</span><span v-if="message.writtenAt"> • {{ dayjs(message.writtenAt).format("HH:mm") }} Uhr</span> </p>
                    <p class="message-text">{{ message.text }}</p>
                </div>
            </div>
            <p v-if="loading" class="message thinking">Wait a second. I am thinking...<img class="loading-icon" src="/loading.svg" alt=""></p>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Message } from '~/classes/Message';
import { Author } from '~/classes/Message';
import dayjs from 'dayjs';

const props = defineProps<{
    loading: boolean,
    messages: Message[],
    user: string
}>();

watch(props.messages, () => {
    scrollIntoView();  
})

function scrollIntoView()
{
    const chat = Array.from(document.getElementsByClassName('message-container'));
    console.log(chat);
    if(chat.length > 0) {
        setTimeout(() => {
            chat.at(0)!.scrollIntoView({
                block: "end",
                behavior: "smooth"
            });
        }, 100)
    }
}
</script>

<style scoped>
.message-wrapper {
    position: relative;
    overflow-y: scroll;
}
.message-container {
    display: grid;
    gap: 1rem;
    align-content: flex-start;
    position: absolute;
    width: 100%;
    padding-right: 1.25rem;
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
.message-content {
    display: grid;
    grid-template-rows: auto 1fr;
    gap: 0.25rem;
}
.message.own {
    background-color: rgb(233, 244, 255);
    margin-left: 6rem;
    margin-right: 0;
    display: block;
}
.message.thinking {
    justify-self: flex-start;
    display: inline-flex;
    align-items: center;
}
.message-text {
    white-space: preserve;
}
.img-small {
    width: 3rem;
    height: 3rem;
    border-radius: 0.25rem;
}
.grayed-out {
    font-size: 0.8rem;
    color: #2e2e2e;
}
.error {
    background-color: #ffcfcf;
}
.loading-icon {
    height: 1.15rem;
    width: 1.15rem;
    animation: rotate 0.75s linear infinite;
}

@keyframes rotate {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
</style>