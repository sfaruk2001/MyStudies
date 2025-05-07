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

submitPost.addEventListener('click', () => {
    let nameInput = document.querySelector('#name').value;
    let ageInput = document.querySelector('#age').value;
    let genderInput = document.querySelector('#gender').value;
    let institutionInput = document.querySelector('#institution').value;
    let aboutInput = document.querySelector('#about').value;

    if (nameInput === '' || ageInput === '' || genderInput === '' || institutionInput === '' || aboutInput === '' ) {

    } else {
        let name = document.querySelector('.user-name');
        name.innerText = nameInput;
        let age = document.querySelector('.user-age');
        age.innerText = ageInput;
        let gender = document.querySelector('.user-gender');
        gender.innerText = genderInput;
        let institution = document.querySelector('.user-Institute');
        institution.innerText = institutionInput;
        let about = document.querySelector('.user-about');
        about.innerText = aboutInput;
        clearModule();
    }
    
});



function clearModule() {
    form.reset();
    modal.close();
}