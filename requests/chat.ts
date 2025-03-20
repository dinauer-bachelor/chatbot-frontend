import axios from "axios";
import type { Message } from "~/classes/Message";

export function chat(message: Message, onSuccess: (message: string) => void, onError: () => void)
{
    axios.post<string>(useRuntimeConfig().public.apiBase + '/chat', message)
    .then(response => {
        onSuccess(response.data);
    })
    .catch(() => {
        onError();
    });
}