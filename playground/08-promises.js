/* Promises
Understand the differences of the promise and the callback pattern to work with mongodb
Refer to 04-callbacks.js to understand the callback syntax */

const simplePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // If it resolves:
    // resolve('Resolved');
    // If things went wrong, like a failed connection:
    reject('Reject: Things went wrong, maybe a connection problem?')
  }, 800)
})

simplePromise.then((result) => {
  console.log('Success!', result)
}).catch((error) => {
  console.log('Error!', error)
})

// PROMISE CHAINING
console.log(`Promise Chaining:`)

const add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b)
    }, 2000);
  })
}

// First try... it works, but will be bad to read and can get very complex
// add(1, 2).then((sum) => {
//   console.log(sum)

//   add(sum, 10).then((sum2) => {
//     console.log(sum2)
//   }).catch((err) => {
//     console.log(err)
//   })

// }).catch((err) => {
//   console.log(err)
// })

// The better way:
add(1, 2).then((sum) => {
  console.log(sum)
  return add(sum, 2) // Here we return the resolved promise
}).then((sum2) => {
  console.log(sum2)
  return add(sum2, 5)
}).then((sum3) => {
  console.log(sum3)
}).catch((err) => {
  console.log(err)
})