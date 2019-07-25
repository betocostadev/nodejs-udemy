// Added default tip % as 20%.
const calculateTip = (total, tipPercent = 0.2) => total + (total * tipPercent)
/*
const calculateTip = (total, tipPercent) => {
  const tip = total * tipPercent
  return total + tip
} */

const fahrenheitToCelsius = (temp) => {
  return (temp - 32) / 1.8
}

const celsiusToFahrenheit = (temp) => {
  return (temp * 1.8) + 32
}

// Async Add to be tested
const asyncAdd = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (a < 0 || b <0) {
        return reject(`Numbers must be positive`)
      }
      resolve(a + b)
    }, 1200);
  })
}

module.exports = {
  calculateTip,
  fahrenheitToCelsius,
  celsiusToFahrenheit,
  asyncAdd
}