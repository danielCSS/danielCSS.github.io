// console.log('hi there!');
// console.log('web workers');
const outputDiv = document.querySelector('.outputDiv');

outputDiv.innerHTML = '';

const worker = new Worker('js/worker.js');

worker.postMessage('hello');

// first iteration: Communication with a Web Worker

// worker.onmessage = event => {
//     console.log(event.data);
// }

// second iteration: Multiple event listeners
// If you want to setup multiple listeners for the message event, instead of using onmessage create an event listener (applies to the error event as well):

worker.addEventListener('message', event => {
    // console.log(event.data);
    outputDiv.innerHTML += `<p>${event.data}</p>`;
}, false)