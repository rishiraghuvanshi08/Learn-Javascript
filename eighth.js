// Object

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

console.log(person.age + " " + person.firstName + " " + person.lastName + " " + person.eyeColor);


//   Objects can also have methods.

//   Methods are actions that can be performed on objects.

//   Methods are stored in properties as function definitions.

const person2 = {
    firstName: "John",
    lastName: "Cena",
    id: 5566,
    fullName: function () {
        console.log(this.id);
        return this.firstName + " " + this.lastName;
    }
};

console.log(person2.fullName());

// In JavaScript, the this keyword refers to an object.

// Which object depends on how this is being invoked(used or called).

// The this keyword refers to different objects depending on how it is used:


// In an object method, this refers to the object.
// Alone, this refers to the global object.
// In a function, this refers to the global object.
// In a function, in strict mode, this is undefined.
// In an event, this refers to the element that received the event.
// Methods like call(), apply(), and bind() can refer this to any object.