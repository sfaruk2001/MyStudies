import { v4 as uuidv4 } from 'uuid';

class Post {
    constructor(title, content) {
        this.title = title;
        this.content = content;
        this.postId = uuidv4();
    }

    getTitle() {
        return this.title;
    } 

    setTitle(title) {
        this.title = title;
    }

    getContent() {
        return this.content;
    }

    setContent(content) {
        this.content = content;
    }

    getId() {
        return this.postId;
    }

     
}