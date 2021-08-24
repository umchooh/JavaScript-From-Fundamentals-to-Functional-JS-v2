"use strict";


var person = {
    firstname: 'John',
    lastname: 'Doe',
    getFullName: function() {
        
        var fullname = this.firstname + ' ' + this.lastname; 
        // this will point the whole object in this case since function is method part of the object
        return fullname;
    }
}

console.log('Tester 1 : ' + person.getFullName());

var logName = function(lang1, lang2) {
    console.log('Logged: ' + this.getFullName());// this is pointing to global/window; there is no getFullName() on global and return undefined
    console.log('Arguments: ' + lang1 + ' ' + lang2);
    console.log('--------------');
}//.bind(person);///////////Method 1//

//logName();//this will work if add.bind(Object) 

var logPersonName = logName.bind(person); //////////////Method 2//
//use .bind and pass an object to this param, this will return a NEW function Object

logPersonName('en');

logName.call(person, 'en', 'es'); //call ----> executed it 
logName.apply(person, ['enn', 'ess']);//apply ---->executed with [] ; array can be useful with mathematical 


//Other style can be

(function(lang1, lang2) {
    console.log('Logged: ' + this.getFullName());
    console.log('Arguments: ' + lang1 + ' ' + lang2);
    console.log('--------------');
}).apply(person, ['I am', 'Here!' ]); //invoked and return !!!! 

/**
 * .bind() ----> creates a copy of whatever function you're calling it on, and whatever method and object pass through this method
 * 
 * .call(Object 'this' point to, parameters )---> let mem decide which variable will be.  call ----> executed it with parameters as well. 
 * 
 * .apply----similar to .call but need Array !!!!!
 */



//function borrowing 
var person2 = {
    firstname: 'Jane',
    lastname: 'Doe'
}

console.log(person.getFullName.call(person2)); 
//can use apply; grab method to use them as long as have same property name


// function currying- create copy function with some preset parameters.

function multiply(a, b) {
    return a*b;
}

var multiplyByTwo = multiply.bind(this, 2);// give me copy with this mutiply function and set a value for first parameter.
/*
using (this, 2) define as follow:

function multiplyByTwo(b) {
    var a = 2;//permanent copy ,unmutated
    return a*b;
}
 */
console.log(multiplyByTwo(4));// 8