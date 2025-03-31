//import { v4 as uuidv4 } from 'uuid';

export default class Post {
    constructor(title, content) {
        this.title = title;
        this.content = content;
        this.postId = this.uuidv4();    
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
    setId(postId) {
        this.postId = postId
    }

    uuidv4() {
        return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c =>
          (+c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> +c / 4).toString(16)
        );
    }
 
}


