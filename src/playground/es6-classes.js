class Person {
    constructor(name = 'Anonymous'){
        this.name = name;
    }

    getGreeting(){
        return `hi ${this.name}`;
    }
}

class Student extends Person{
    constructor(name = 'Anonymous', major = 'Sleep'){
        super(name);
        this.major = major;
    }
    hasMajor(){
        return !!this.major;
    }
    getOrientation(){
        return `Hello ${this.name}. Be the best ${this.major} student out there`;
    }
    getGreeting(){
        let description = super.getGreeting();
        return description;
    }
}

class Traveler extends Person{
    constructor(name,homeLocation = 'Area'){
        super(name);
        this.homeLocation = homeLocation;
    }
    getGreeting(){
        let description = super.getGreeting();
        if(this.homeLocation){
            description = description + ` from, ${this.homeLocation}`;
        }
        return description;

    }

}

const me = new Traveler('Baby Yoda 420');
console.log(me.getGreeting());