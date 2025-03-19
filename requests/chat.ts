import axios from "axios";

export function chat(message: string, onSuccess: (message: string) => void)
{
    axios.post<string>(useRuntimeConfig().public.apiBase + '/chat', message, {
        headers: {
            "Content-Type": "text/plain"
        }
    })
    .then(response => {
        onSuccess(response.data);
    })
    .catch();
}