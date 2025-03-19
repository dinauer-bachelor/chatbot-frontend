export class Message {
    text?: string
    author?: Author
    writtenAt?: Date

    constructor(text: string, author: Author, writtenAt: Date) {
        this.text = text;
        this.author = author;
        this.writtenAt = writtenAt;
    }
}

export enum Author {
    CLARA, USER
}