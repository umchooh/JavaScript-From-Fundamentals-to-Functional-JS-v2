/*try building a simple quiz game, using objects, destructing, array methods and all that you learnt so far. don't repeat the code, try to build it in a reusable way  */

/*const ifElse3 = (condition, isTrue, isFalse) => {
    //console.log(arguments);
    const args = [].slice.call(3); //slice the first 3 then you want the rest.
    console.log(args);
    return condition? isTrue.apply(this, args) : isFalse.apply(this, args);
    
};

const nowTrue = (args) => {console.log(args + ' True'); };
const nowFalse = (args) => {console.log(args + ' False'); };

ifElse3(true, nowTrue, nowFalse, 'HI', 'Bye', 'Hola');*/

var reduce = function(list, cb, initial) {
    //[1,2,3] //cb = sum
    //loop through list
    let memo = initial;// start with 0, update to 1, update to 3
    for (let i = 0; i < list.length; i++){
        if (i === 0 && memo === undefined) { 
            memo = list[0]

        } else {
            memo = cb(list[i], memo);//(1,0), (2,1), (3,3)
        }
        
    }
        //call the cb with arr[i], prev/initial
        // save the return value
    //return result ---take a list and reduce to one value !

    return memo;//1, update to 3,update to 6
};

//console.log(reduce([1,2,3], (v, sum) => v + sum,0));//set initial to 0

//console.log(reduce([2,3,5], (v, sum) => v + sum));//no initial been set
    // initial is 2, then 2 + 3 , uptdate to 5
    // now initial is 5 , 5+ 5 , update 10





//Updated list : https://jsbin.com/pazixim/edit?html,js,console,output
const newDevelopment = [
    {
        name: 'Miss Scarlet',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: true},
            {'dining room': true},
            {'billiard room': false},
            {library: true}
        ]
    },
    {
        name: 'Reverend Green',
        present: true,
        rooms: [
            {kitchen: true},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': true},
            {library: false}
        ]
    },
    {
        name: 'Colonel Mustard',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: true},
            {'dining room': false},
            {'billiard room': true},
            {library: false}
        ]
    },
    {
        name: 'Professor Plum',
        present: true,
        rooms: [
            {kitchen: true},
            {ballroom: false},
            {conservatory: false},
            {'dining room': true},
            {'billiard room': false},
            {library: false}
        ]
    }
];

//Figure out which room that suspect(s) not in the room
///refer to screenshot in ppt

//Currying 
//_.curry(function, [arity=function.length]);

/*const curry = (fn) => {
    return (arg) => {
        return (arg2) => {
            fn(arg, arg2)
        }
    }
}
var abc = function (a, b) {
    return[a, b];
};

var curried = _.curry(abc);

console.log(curried(1)(2));// [1,2,3]
curried (1,2);// [1,2,3]

*/


//COmposing-combine two function
//Order does matter!

const compose = (fan, fn2) =>{
    return(arg) => {
        const result = fn2(arg);
        return fn(result);
    }
}
const consider = (name) => {
    return `I think it could be ... ${name}`;
};

const exclaim = (statement) => {
    return `${statement.toUpperCase()}!`;
};

const blame = _.compose(consider, exclaim);

console.log(blame('you')); //I think it could be ...YOU!
