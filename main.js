//Q3


// This will be the ouput 
// The output is this way because we are having an object and within the object we have the function that is why
// when we are calling the object you call it with the object name thus (Lisalab.func()) runs the whole code.We can also
//see that the function access what is in object that i mean the properties.In my third line of code we can see it is
//undefined and this has been brought by the fact that the inner can access what is in the outer scope 
//not the global scope.
//outer func:  this.name = bar
// outer func:  self.name = bar
// inner func:  this.name = undefined
// inner func:  self.name = bar






//Q4)


// var lisaLab = {
//     name: "bar",
//     func: function() {
//         var self = this;
//         console.log("outer func:  this.name = " + this.name);
//         console.log("outer func:  self.name = " + self.name);
//         (function() {
//             console.log("inner func:  this.name = " + this.name);
//             console.log("inner func:  self.name = " + self.name);
//         }());
//     }
// };

// lisaLab.func();

//this identifier helps us in dealing with scopes meaning to access property in global scope we use 'this'
//identifier that is for example in the code line1 we got the "bar" by actually refering it to the name property
//outside the function.In my output line2 this identifier has been assigned a variable so that we can access it in
//our outer func thus why we use self.name instead of this.name.In my line3 this has been used in the wrong way
//thats why we have "undefined" as an output because the inner function has an access to its outer func and not 
//the global scope.And again the inner function had no assignment it only accessed the outer func
//instead if we could do the way we wrote the third console that is accessing the outer func.
//The last ouput was this was used to reffer to the outer func and it ran





//Q2


//A callback is of two types asynchronous and synchronous functions.asynchronous happened to execute each function one after the other
//while synchronous function executes each function while the one that takes a longer time runs alongside the other functions
//and happens to be the last to be executed.

//one at a time while synchronous runs alongside the other functions as they execute.
//a call back function allows a function as an argument and makes an event to happen one after the other after
//setting timeout after every one second so that each function can be excetued one at a time.


// setTimeout(function(){
//         console.log("Hello Hamdi")
//     },1000)
//     setTimeout(function(){
//         console.log("Welcome home")
    
//     },1000)
//     setTimeout(function(){
//         console.log("Feel free")
//     },1000)


        console.log("I LOVE JS")

    setTimeout(function(){
        console.log("IT IS SUPER COOL")
    
    },1000)
    setTimeout(function(){
        console.log("SURE?")
    })

