
export default class Profile {
    constructor(name, age, gender, institution, aboutMe) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.institution = institution;
        this.aboutMe = aboutMe;
    }

    getName() {
        return this.name;
    }

    setName(newName) {
        this.name = newName;
    }
    
    getAge() {
        return this.age;
    }

    setAge(newAge) {
        this.age = newAge;
    }

    getGender() {
        return this.gender;
    }

    setGender(newGender) {
        this.gender = newGender;
    }

    getInstitution() {
        return this.institution;
    }

    setInstitution(newInstitution) {
        this.institution = newInstitution;
    }

    getAboutMe() {
        return this.aboutMe;
    }

    setAboutMe(newAbout) {
        this.aboutMe = newAbout;
    }
}