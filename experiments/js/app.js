// console.log('hi there!');
// console.log('web workers');
const outputDiv = document.querySelector('.output');

outputDiv.innerHTML = '';

const worker = new Worker('js/worker.js');

// first iteration: Communication with a Web Worker

// worker.postMessage('hello');
// worker.onmessage = event => {
//     console.log(event.data);
// }

// second iteration: Multiple event listeners
// If you want to setup multiple listeners for the message event, instead of using onmessage create an event listener (applies to the error event as well):

// worker.postMessage('hello');
// worker.addEventListener('message', event => {
//     // console.log(event.data);
//     outputDiv.innerHTML += `<p>${event.data}</p>`;
// }, false)


// third iteration: Using the Channel Messaging API

const messageChannel = new MessageChannel();

const data = { name: 'Flavio' };
const channel = new MessageChannel();
worker.postMessage(data, [channel.port2]);
// worker.postMessage('hello world', [messageChannel.port2])

messageChannel.port1.addEventListener('message', event => {
  console.log(event.data)
  outputDiv.innerHTML += `<p>${event.data}</p>`;
})