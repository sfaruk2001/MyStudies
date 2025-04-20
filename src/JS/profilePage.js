import { Profile } from "./profile.js";

 
let profilePage = new Profile('John Dow', 19, 'Male', 'Brooklyn College', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, quia. Corrupti, mollitia est quibusdam molestiae laboriosam fugiat ullam aspernatur reiciendis sunt deserunt vel rerum nihil? Omnis eligendi consequuntur corrupti molestias.');

let modal = document.querySelector('.modal');
let form = document.querySelector('.form');
let editProfile = document.querySelector('.edit-profile');
let submitPost = document.querySelector('.sub-form');

editProfile.addEventListener('click', () => {
    console.log('Hello World');
    modal.showModal();
});


/** 
function displayProfile() {

}*/