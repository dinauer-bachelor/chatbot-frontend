import type { MessageContext } from "./MessageContext"

export class Message {
    text?: string
    author?: Author
    writtenAt?: Date
    error?: boolean
    context?: MessageContext

    constructor(text: string, author: Author, writtenAt: Date, error?: boolean) {
        this.text = text;
        this.author = author;
        this.writtenAt = writtenAt;
        this.error = error;
    }
}

export enum Author {
    CLARA, USER
}