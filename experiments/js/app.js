// console.log('hi there!');
// console.log('web workers');
const outputDiv = document.querySelector('.output');

outputDiv.innerHTML = '';

const worker = new Worker('js/worker.js');

worker.postMessage('hello');

// first iteration: Communication with a Web Worker

// worker.onmessage = event => {
//     console.log(event.data);
// }

// second iteration: Multiple event listeners
// If you want to setup multiple listeners for the message event, instead of using onmessage create an event listener (applies to the error event as well):

// worker.addEventListener('message', event => {
//     // console.log(event.data);
//     outputDiv.innerHTML += `<p>${event.data}</p>`;
// }, false)


// third iteration: Using the Channel Messaging API

const messageChannel = new MessageChannel();

messageChannel.port1.addEventListener('message', event => {
  console.log(event.data)
  outputDiv.innerHTML += `<p>${event.data}</p>`;
})

worker.postMessage(data, [messageChannel.port2])