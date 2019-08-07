const socket = io()

// Sockect receiving method

socket.on('countUpdated', (count) => {
  console.log('The count has been updated. Count is: ', count)
})

const increment = document.querySelector('#increment')
increment.addEventListener('click', () => {
  socket.emit('increment')
})