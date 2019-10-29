console.log('hi there!');
console.log('web workers');

const worker = new Worker('worker.js');

worker.postMessage('hello');
worker.onmessage = event => {
    console.log(event.data);
}
