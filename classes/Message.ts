export class Message {
    text?: string
    author?: Author

    constructor(text: string, author: Author) {
        this.text = text;
        this.author = author;
    }
}

export enum Author {
    CLARA, USER
}