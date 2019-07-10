/* Promises
Understand the differences of the promise and the callback pattern to work with mongodb
Refer to 04-callbacks.js to understand the callback syntax */

const simplePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // If it resolves:
    // resolve('Resolved');
    // If things went wrong, like a failed connection:
    reject('Reject: Things went wrong, maybe a connection problem?')
  },1000)
})

simplePromise.then((result) => {
  console.log('Success!', result)
}).catch((error) => {
  console.log('Error!', error)
})

