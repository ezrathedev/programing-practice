// this is just some practices of object oriented programming using classes and arrays


//classes
class Person{
    constructor(fname,lname,age,eyeColor,zipCode){

        this.fname = fname;
        this.lname = lname
        this.age = age;
        this.eyeColor = eyeColor;
        this.zipCode = zipCode;
    }
}

// creating an instant using the person class

const ezra = new Person('Ezra','Hampton',29,'brown',292922);
console.log(ezra);

// using the same constructors as the person class and adding one to it 
class Sex extends Person{
    constructor(gender,fname,lname,age,eyeColor,zipCode) {
        super(fname,lname,age,eyeColor,zipCode)
        this.gender = gender;
    }
}
// this has the person class constructors but it's missing some of the keys and properties 
const p1 = new Sex('male','James',['lamer','coper']);
console.log(p1);

class Everything extends Sex{
    constructor(gender,fname,lname,age,eyeColor,zipCode){
        super(gender,fname,lname,age,eyeColor,zipCode)

    }
}

const p2 = new Everything('male', 'Ezra', 'Hampton', 29, 'brown',292929);
console.log(p2);


// down here im going to create something that finds mutual matches in an array, in order for this to work i need to have some of the same things in the arrays.

const friend1 = ['james','mac','jess','arron','mike'];

const friend2 = ['kate','tom','jeff','jake','arron','karen'];

// if there are any mutual friends i will push them into here.
const mutualFriends = []

// to check ill use a for loop to to check in the index of the arrays match. im going to need to nest them in order for this to work.5r

for(let i = 0; i < friend1.length; i++){
    for(let j = 0; j < friend2.length; j++){
        if(friend1[i] === friend2[j]){
            mutualFriends.push(friend1[i]);
        }
    }
}


// if it didn't work this should be empty..
console.log(mutualFriends);