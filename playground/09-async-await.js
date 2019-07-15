const promiseName = async () => {
  // throw new Error(`Something went wrong`)
  return 'Andrew'
}

promiseName().then((result) => {
  console.log(`Result: `, result)
}).catch((err) => {
  console.log(`Error: `, err)
})

const add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (a < 0 || b <0) {
        return reject(`Numbers must be positive`)
      }
      resolve(a + b)
    }, 1000);
  })
}

const doSum = async () => {
  const sum = await add(10, 15)
  const sum2 = await add(sum, 75)
  const sum3 = await add(sum2, 900)
  return sum3
}

doSum().then((result) => {
  console.log(result)
}).catch((err) => {
  console.log(err)
})