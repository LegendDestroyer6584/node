const EventEmmiter = require('events');
const CustomEmmiter = new EventEmmiter();
CustomEmmiter.on('response', () => {
  console.log('data recieved ')
})

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('What is the code?', ans => {
  CustomEmmiter.emit(`${ans}`)
  readline.close();
});
