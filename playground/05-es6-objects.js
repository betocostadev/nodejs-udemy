// Object property shorthand
const name = 'Beto'
const userAge = 33
// Old way
// const user = {
//   name: name,
//   age: userAge,
//   location: 'Sao Paulo'
// }
// New way
const user = {
  name,
  age: userAge,
  location: 'Sao Paulo'
}
console.log(user);

// Object destructuring - Extract each object property into individual variables

const product = {
  label: 'VivoBook X510-UR',
  price: 2500,
  stock: 23,
  salePrice: undefined,
  order() {
    this.stock--
  },
  prodReturn(){
    this.stock++
  }
}

console.log(product);

// const label = product.label
// If there was already a 'rating' property with some value, the value would NOT change.

// const {label: asus, price: asusPrice, rating = 7.5} = product;
// console.log(asus);
// console.log(asusPrice);
// console.log(rating);

// Using a function:
// We are also using a default function param {} = {} to pass an object if none is provided.
const transaction = (type, {label, stock} = {}) => {
  if (type === 'order') {
    product.order()
    console.log(type, label)
    console.log(stock);
  } else if (type === 'return') {
    product.prodReturn();
    console.log(type, label)
    console.log(stock);
  } else {
    return
  }
}
transaction('grelo', product);
transaction('order', product);
transaction('order', product);
transaction('return', product);
transaction('grelo');
console.log(`After returning the last: ${product.stock}`);