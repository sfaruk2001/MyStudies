import Post from '../JS/post.js'

let bulletinBoard = [];

let p1 = new Post("Post 1", "This is a random description");
let p2 = new Post("Post 2", "This another random description");
let p3 = new Post("Post 3", "This is the third random description");
addPost(p1);
addPost(p2);
addPost(p3);
displayBulletin();

let modal = document.querySelector('.modal');
let form = document.querySelector('.form');
let addPostButton = document.querySelector('.add-post');
let submitPost = document.querySelector('.sub-form');

addPostButton.addEventListener('click', () => {
  modal.showModal();
});

submitPost.addEventListener('click', (e) => {
  let bulletin = document.querySelector('.myBulletin-body');
  let title = document.querySelector('#title').value;
  let body = document.querySelector('#body').value;

  

  //Prevents user from submitting books without title and body
  if(title === "" || body === "") {

  } else {
    let p = new Post(title, body);
    console.log(p);
    addPost(p);
    bulletin.innerHTML = "";
    displayBulletin();
    form.reset();
    modal.close();
  }

});

function addPost(post) {
  bulletinBoard.push(post);
}

function editPost(idx, title, content) {
  bulletinBoard[idx].setTitle(title);
  bulletinBoard[idx].setContent(content);
}

function displayBulletin() {
    for (let i  = 0; i < bulletinBoard.length; i++) {
        let bulletin = document.querySelector('.myBulletin-body');

        let post = document.createElement('div');
        post.classList.add('post');
        post.classList.add('data-idx');
        post.setAttribute('data-idx', i);

        let postHead = document.createElement('div');
        postHead.classList.add('post-head');

        let postTitle = document.createElement('div');
        postTitle.classList.add('post-title');
        postTitle.innerText = bulletinBoard[i].getTitle();

        let postButtons = document.createElement('div');
        postButtons.classList.add('post-buttons');

        let postEdit = document.createElement('button');
        postEdit.classList.add('post-edit');
        postEdit.innerText = 'Edit';
        //add event listener for edit
        postEdit.addEventListener('click', (e) => {
          let editModal = document.querySelector('.edit-modal');
          let editForm = document.querySelector('.edit-form');
          let submitEditedPost = document.querySelector('.sub-edit-form');

          let idx = Number(e.target.parentElement.parentElement.parentElement.dataset.idx);
          console.log(idx);
          editModal.showModal();
          /**   
          submitEditedPost.addEventListener('click', (idx) => {
            let bulletin = document.querySelector('.myBulletin-body');
            let title = document.querySelector('#edit-title').value;
            let body = document.querySelector('#edit-body').value;
            console.log(idx);
            console.log(title);
            console.log(body);
          
           //Prevents user from submitting books without title and body
            bulletinBoard[idx].setTitle(title);
            bulletinBoard[idx].setContent(body);
            bulletin.innerHTML = "";
            displayBulletin();
            editForm.reset();
            editModal.close();
            
          })*/    
        })

       

        let postClose = document.createElement('button');
        postClose.classList.add('post-close');
        postClose.innerText = 'X';
        //add event listener for delete
        postClose.addEventListener('click', (e) => {
            let idx = Number(e.target.parentElement.parentElement.parentElement.dataset.idx);
            bulletinBoard.splice(idx, 1);
            bulletin.innerHTML = '';
            displayBulletin();
            
        });
        

        let postBody = document.createElement('div');
        postBody.classList.add('post-body');
        postBody.innerText = bulletinBoard[i].getContent();

        postButtons.appendChild(postEdit);
        postButtons.appendChild(postClose);
        postHead.appendChild(postTitle);
        postHead.appendChild(postButtons);
        post.appendChild(postHead);
        post.appendChild(postBody);

        bulletin.appendChild(post);

    }
}













