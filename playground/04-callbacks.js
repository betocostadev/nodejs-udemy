setTimeout(() => {
  console.log(`1 second passed.`)
}, 1000);

const names = ['Andrew', 'Jen', 'Jess', 'Beto'];
const shortNames = names.filter((name) => {
  return name.length <= 4;
});
console.log(shortNames);

// Just an example
const geocode = (address, callback) => {
  // Simulate a server delay response
  setTimeout(() => {
    const data = {
      latitude: 0,
      longitude: 0
    }
    callback(data)
  }, 750);
}

geocode('Philadelphia', (data) => {
  console.log(data);
})

const add = (num1, num2, callback) => {
  setTimeout(() => {
    const operation = num1 + num2;
    callback(operation);
  },1500)
}

add(1, 4, (sum) => {
  console.log(sum);
});

// Encoding URI:
const endereco = 'São Paulo';
const URI = encodeURIComponent(endereco);
console.log(URI);