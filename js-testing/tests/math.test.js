/* Running tests using Jest
For the first test, we will call math.js to test if the function Calculate tip is working correctly */

const { calculateTip, fahrenheitToCelsius, celsiusToFahrenheit, asyncAdd } = require('../math')

// CALCULATE TIP - TEST
test('Calculate total with % tip', () => {
  const total = calculateTip(10, 0.3)
  // Using the Jest framework function expect()
  expect(total).toBe(13)

  /* if (total !== 13) {
    throw new Error('Total + tip should be 13. Got: ' + total)
  } */
})

test('Calculate total with DEFAULT tip', () => {
  const total = calculateTip(20)
  expect(total).toBe(24)
})

// FAHRENHEIT TO CELSIUS TEST
test('Convert 32 fahrenheit to 0 celsius', () => {
  const temp = fahrenheitToCelsius(32)
  expect(temp).toBe(0)
})

// CELSIUS TO FAHRENHEIT TEST
test('Convert 0 celsius to 32 fahrenheit', () => {
  const temp = celsiusToFahrenheit(0)
  expect(temp).toBe(32)
})

// ASYNC TEST
/* The function below fails because jest does not know it is an async function.
It will run before waiting for the setTimeout.
test('Async test demo', () => {
  setTimeout(() => {
    expect(1).toBe(2)
  }, 1000);
})

The working test below... (done) can be anything, as long as it is called:*/
test('Async test demo', (done) => {
  setTimeout(() => {
    expect(1).toBe(1) // to another number to fail
    done()
  }, 800);
})

// Async Add test - Promise syntax
test('ADD two numbers - Promise call', (done) => {
  asyncAdd(2, 3).then((sum) => {
    expect(sum).toBe(5)
    done()
  })
})

// Async ADD test - Async/await syntax - It will not need an argument to be passed as above
test('ADD two numbers - Async/Await', async () => {
  const sum = await asyncAdd(8,42)
  expect(sum).toBe(50)
})


// Very simple test:
/* test('Hello World!', () => {

})

test('this should fail', () => {
  throw new Error('Failure!')
}) */