function double(arr) {
  return arr.map(function(val) {
    return val * 2;
  });
}


// Refactor the above code to use two arrow functions. Turn it into a one-liner.

function double(arr){
  return arr.map((val) => {
    return val * 2})
}

//refactored with arrow function and implicit return

function double(arr){
  return arr.map(val => val * 2)
}

// function expression 
const double =  (arr) => arr.map(val => val * 2)



// Refactor the following function to use arrow functions:
// // Replace ALL functions with arrow functions:

function squareAndFindEvens(numbers){
  var squares = numbers.map(function(num){
    return num ** 2;
  });
  var evens = squares.filter(function(square){
    return square % 2 === 0;
  });
  return evens;
}

//refactored with arrow function
function squareAndFindEvens(numbers){
  var sqaures = numbers.map((num) => {
    return num ** 2
  })
  var evens = sqaures.filter((square) => {
    return square % 2 === 0
  })
  return evens
}

//refactored with arrow function and implicit return statements
function squareAndFindEvens(numbers){
  var sqaures = numbers.map(num => num ** 2);
  var evens = sqaures.filter(square => square % 2 === 0);
  return evens
}

// function expression

const squareAndFindEvens = (numbers) => numbers.map((num) => num ** 2).filter((square) => square % 2 === 0);