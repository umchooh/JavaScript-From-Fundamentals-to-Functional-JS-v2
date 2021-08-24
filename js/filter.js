const _ = {};

_.each = function(list, callback) {
    //object and array use different loops
    //loop thru the list
    if(Array.isArray(list)) {
        //loop through array
        for (var n = 0; n <list.length; n++) {
            //call the callback with a list item
            callback(list[n], n, list);
        }
    } else {
        //loop through object
        //call the callback with a list item
        for (var key in list) {
            console.log(callback(list[key], key, list)); 
            //[key] is a variable, nonnumeric ['key']
        }
    }   
};
_.map = function(list,callback) {
    //create and empry array to store
    var storage = [];
    
    //check isArray
    //if(Array.isArray(list)) {
        //looping'
        /*for (var t = 0; t < list.length; t++){
            //callback(element)
            //push to our array
            storage.push(callback(list[t], t, list));
        } */
        
        _.each(list, function(v, i, list){
            storage.push(callback(v, i, list))
        })

    return storage;
    
}

const videoData = [
    {
        name: 'Miss Scarlet',
        present: true, //Flag property if they are present in the mansion
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Mrs. White',
        present: false,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Reverend Green',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Rusty',
        present: false,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Professor Plum',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Colonel Mustard',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    }
];

_.filter = function(arr, cb) {
    //create a new array
    const storage = [];
    //loop through arr

    _.each(arr, function(item, i, list) {
        if (cb(item, i, list))  //return object ( type of item)
            storage.push(item);
    });


    /*for (let i = 1; i < arr.length; i++){
        //check if CB is true
        if (cb(arr[i], i, arr) === true) {
            // if ture, push to array
            storage.push(arr[i]);
        }
    } */
    //return arr
    return storage;
}



const suspects = _.filter(videoData, function(suspectObject) {
    return suspectObject.present;
})

//console.log(storage);


////ES6 : Arrow Functions


//Projecting Exercise
//https://jsbin.com/duvafoc/edit?html,js,output

const suspectsName = _.map(suspects, suspect => {
    return suspect.name
})

console.log(suspectsName);



//Argumanets and spread operator

const createTuple = function (a, b, c, ...d) {
    console.log(arguments);
    return [[a, c], [b,d]];
} // ["It", "be", "could", "anyone", "no one"]

/*const createTuple = (a, b, c, d) => {
    console.log(arguments);
    return [[a, c], [b,d]];
} // return arguments is not defined!! cause arrow function no argument!!*/

createTuple('It', 'be', 'could', 'anyone', 'no one');

const add = function(a, b = 2) { //default parameter (ES6 feature)
    console.log(arguments); // 3
    return a + b;
};

add(3);


const addOld = function(a, b) {
    b = b || 2; 
    console.log(arguments);
    return a + b;
};
console.log(addOld(3));

//Array-like Object

const constructArr = function() {
    const arr = Array.from(arguments); 
    //Array.prototype.slice.call(arguments); or utility method _.from() before using array.from from ES6
    arr.push('the billiards room?');
    return arr.join(' ');
};

console.log(constructArr('was', 'it', 'in'));


//implement _.form()
const from = arr => {
    return Array.prototype.slice.call(arr)
}

/* Translate into ES6 Exercise*/

var increment = function(n){ return n+1; };

var square = function(n) { return n*n; };

var doMathSoIdontHaveTo = function(n, func) { return func(n); };

doMathSoIdontHaveTo(5, square);//25
doMathSoIdontHaveTo(4, increment);//5
/////
//const increment = n =>  { return + 1; };
//const square = n => { return n*n; };
//const doMathSoIdontHaveTo = (n, func) => { return func(n); };

//Passing arguments
//p is parameters! take argument an dinvoked thru param. 
/*const ifElse = (condition, isTrue, isFalse, p) => {
    return condition? isTrue(p) : isFalse(p);
};


const logTrue = (p) => {console.log(p + ' :True');};
const logFalse = (p) => {console.log(p + ' :False'); };

ifElse(true, logTrue, logFalse, 'HI');

*/


//Multiple params ?! use spread operator

/*const ifElse2 = (condition, isTrue, isFalse, ...args) => {
    return condition? isTrue(...args) : isFalse(...args);
};


const logTrue = (...args) => {console.log(...args + ' :True');};
const logFalse = (...args) => {console.log(...args + ' :False'); };

ifElse2(true, logTrue, logFalse, 'HI', 'Bye', 'Hola');

*/

//Before Es-6, do something like this:
const ifElse3 = (condition, isTrue, isFalse, ...args) => {
    //console.log(arguments);
    const args = [].slice.call(arguments, 3) //slice the first 3 then you want the rest.
    console.log(args);
    return condition? isTrue.apply(this, args) : isFalse.apply(this, args);
    
};


const nowTrue = (args) => {console.log(args); };
const nowFalse = (args) => {console.log(args); };

ifElse3(true, nowTrue, nowFalse, 'HI', 'Bye', 'Hola');