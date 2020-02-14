//hoisting
// addition(5, 23);

// test = "this is a test";
// let test;

// console.log(test);

// a scope
// {
//     console.log("1 2 3");
// }


// function addition(a, b) {
//     return a + b;
// }

//console.log(addition(2, 6));

// function introduce() {
//     console.log("Nice to meet you");
// }

// const askForName = function() {
//     console.log("What is your name?")
// }

// function findPerson(anyFunction) {
//     console.log("Spotted a person!");
//     anyFunction();
// }


// findPerson(introduce);

// findPerson(askForName);

// const me = {name: "me", hobby: "node.js"};
// const aboutMe = (me) => {
//     console.log("My hobby is", me.hobby);
// }

// aboutMe(me);

// const anotherExample = {
//     myFavouriteFunction: () => {
//         console.log("This function is my favourite in the world");
//     }
// };

//anotherExample.myFavouriteFunction();

const calling = (name) => {
    return "calling " + name;
};


const callingLater = (anyFunction, name) => {
    console.log(anyFunction(name), "later");
};



callingLater(calling, "Scatman John");
callingLater("Scatman John", calling);