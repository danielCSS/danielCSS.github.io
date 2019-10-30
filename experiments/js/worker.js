

// first iteration: Communication with a Web Worker

// onmessage = event => {
//     console.log(event.data);
//     postMessage('hey');
// }

// onerror = event => {
//     console.error(event.message);
// }


// second iteration: Multiple event listeners

addEventListener('message', event => {
    console.log(event.data);
    // postMessage('hey');
    postMessage(event.data);
}, false)

addEventListener('message', event => {
    console.log(`I'm curious and I'm listening too`);
    postMessage(`I'm curious and I'm listening too`);
}, false)

addEventListener('error', event => {
    console.log(event.message);
}, false)