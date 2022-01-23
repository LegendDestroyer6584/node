const EventEmmiter = require('events');
const CustomEmmiter = new EventEmmiter();
CustomEmmiter.on('response', () => {
  console.log(`data recieved `)
})
CustomEmmiter.emit('response')
