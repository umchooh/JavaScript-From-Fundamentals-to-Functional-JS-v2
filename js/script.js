// Create an object using bracket and fot notation that represents the characters and related data you may find in a game of Clue.

"use strict";

//const { each } = require("underscore");

//Declared Variable
var game = {};

game.murderer = "??";

//List of Similar object (Collections) => Array
/*game['weapons'] = [
    'lasers',
    'angry cats',
    'dish soap'
];*/

//Convert array to object add {} and key
game['weapons'] = [
    {type: 'lasers', location: 'lab'}, 
    {type: 'angry cats', location: 'lab'},
    {type: 'dish soap', location: 'lab'}
];

/*game2['weapons'] = [
    'lasers',
    'angry cats',
    'dish soap'
];*/

game.name = [];
game.name[0] = 'Miss Scarlet';
//game.push('Mr.Green'); //Cannot push to OBJECT
game.name.push('Mr.Green');

console.log(game);

//ES6 Destructing 
//Common way prior destructing
var obj = {first: 'Dan', last: 'Chen'};
var firstN = obj.first;
var lastN = obj.last;

//The Target = The Source
/*Array*/
const [first, second] = [true, false]

console.log(first);
console.log(second);

/*Object*/
let {one, two} = {one: 1, two: 2};

console.log(one);
console.log(two);

// decare object with value then assign the variable
var myObj = {one: 1, two: 2};
//console.log(myObj);

myObj = {one, two};
console.log(myObj);

// Exercise
const {cname, weapon} = { cname:'Rusty', weapon: 'candlestick'};
console.log (cname, weapon);

//swap variables
let a = 1, b = 2;
console.log(a, b);

/*var temp = a;
a = b;
b = temp;
console.log(a, b);*/

[a, b] = [b, a]; // save lines doing this ; this is not working.
console.log('working??' + b, a);

const chart = {
    'suspects': [
        {
            name: "Rusty",
            color: "orange"
        },{
            name: "Miss Scarlet",
            color: "red"
        }
    ]
}

function foo () {
    for (let i = 0; i < chart.suspects.length; i++) {
        console.log(chart.suspects[i]);
    }
}

foo();

//Loop for object; [variable but not property of object]
/*for (let key in Obj) {
    obj[key]
}*/

//Nested loop
/*var gameLoop = function() {
    for (let j = 0; j < chart.suspects.length; j++) {
        for (var key in chart.suspects[j]) {
            if (chart.suspects[j][key] === "Rusty") {
                console.log('Found them');
            } else {
                console.log('next time !');
            }
        }
    }
}
gameLoop();*/

//Exercise
/*let {firstColor, secondColor} = {firstColor: chart.suspects[0].color,secondColor: chart.suspects[1].color};

console.log('color1 is ' + firstColor +' and color2 is ' + secondColor);

let [tColor, dColor] = [chart.suspects[0].color, chart.suspects[1].color];
console.log('color is ' + tColor +' and color is ' + dColor);*/


/*Using FUnction*/
var suspects = ['Miss Scarlet', 'Colonel Mustard', 'Mr. White']
var suspectsList = [];

function CreateSuspectObjects(name) {
    return {
        name: name,
        color: name.split(' ')[1],
        speak() {
            console.log(`my name is ${name}`);
        }
    };
};

//console.log(CreateSuspectObjects(suspects[0])); //hydrated Object

//for(var m = 0; m <suspects.length; m++) {
    /*suspect= CreateSuspectObjects(suspects[i])
    suspectsList.push(suspect);*/
    //COmbine both line :Get info then  add to the suspectList
    ///suspectsList.push(CreateSuspectObjects(suspects[m]));
//}
//console.log(suspectsList);

/*Looping with _.each*/

/*_.each(suspects, function(name) {
    suspectsList.push(CreateSuspectObjects(name));
});

console.log(  suspectsList);*/

//Using .foreach  mean its amethod on the array !!!! SLightly harder to 
//_.forEach(suspects, function(name) {
//    suspectsList.push(CreateSuspectObjects(name));
//});

//console.log(suspectsList);

/*var rooms = ['observatory', 'ballroom', 'library'];
var logger = function(val) {
    console.log(val);
};
_.each(rooms,logger);*/

const _ = {};

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
        
        /*_.each(list, function(v, i, list){
            storage.push(callback(v, i, list))
        })*/

    return storage;
    
}

//Do a test case for above

_.map([1,2,3], function(val) {
    return console.log( val + 1);
})





////////////////////////////////////////////


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

_.each(['sally', 'georgia', 'poogie'], function(name, n, list){
    if(list[n+1]){
    console.log(name, 'is younger than', list[n+1])
    } else {
        console.log(name, 'is the oldest')
    }
})

var rooms = ['observatory', 'ballroom', 'library'];
var logger = function(val) {
    console.log(val);
};
_.each(rooms,logger);

_.each(suspects, function(name) {
    suspectsList.push(CreateSuspectObjects(name));
});

console.log(suspectsList);
/*

/* map() function ---return array!*/
//_.map(list,iterator)
_.map([1,2,3], function(v,i,list) {
    console.log(v)
})

const weapons =['candlestick', 'lead pipe', 'revolver']

const makeBroken = function(item) {
    return `broken ${item}`;
}

const brokenWeapons =_.map(weapons, makeBroken);

console.log(brokenWeapons);

//Example for SUSpectCreateObject

suspectsList = _.map(suspects, CreateSuspectObjects);
console.log(suspectsList);

_.each(suspectsList,function(suspect) {
    suspect.speak()
});


//_.filter Exercise -.filter(arr,callback) return new array , that will contain only value that is true ( if CB is true). !!!!

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
    const storageB = [];
    //loop through arr

    _.each(arr, function(item, i, list) {
        if (cb(item, i, list))  //return object ( type of item)
            storageB.push(item);
    });


    /*for (let i = 1; i < arr.length; i++){
        //check if CB is true
        if (cb(arr[i], i, arr) === true) {
            // if ture, push to array
            storage.push(arr[i]);
        }
    } */
    //return arr
    return console.log(storageB);
}



const suspects = _.filter(videoData, function(suspectObject) {
    return suspectObject.present;
})


////ES6 : Arrow Functions


//Projecting Exercise
//https://jsbin.com/duvafoc/edit?html,js,output

const suspectsName = _.map(suspectsN, suspect => {
    return suspectsN.name
})

console.log(suspectsName);

