/* Udemy - Nodejs developer
Using node with arguments to run code APP*/

// argv = argument vector
// console.log(process.argv);
console.log(process.argv[2]);
/* If you run node [this file] something, you will see that the line above will log
the arguments. It will be seen as an array and the first 2 will always appear.
First line is where node.js is, second line is where the file is, third and more, the arguments. */

// Lets use this to interact with our program.

const runSquare = process.argv[2];

let counter = 1;
const square = num => {
  while (counter < 10) {
    num *= 2;
    console.log(num);
    counter = counter + 1;
  }
}

if (runSquare === '2') {
  square(2);
}
