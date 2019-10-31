

// first iteration: Communication with a Web Worker

// onmessage = event => {
//     console.log(event.data);
//     postMessage('hey');
// }

// onerror = event => {
//     console.error(event.message);
// }


// second iteration: Multiple event listeners

async function getJSON(url) {
    // fetch(url)
    // .then(function(response) {
    //   if (!response.ok) {
    //     throw new Error("HTTP error, status = " + response.status);
    //   }
    //   console.log(response.json());
    //   return response.json();
    // })
    const response = await fetch(url);
    const myJson = await response.json();

    postMessage(`hey, here's some json I just fetched: ${JSON.stringify(myJson)}`);
}

addEventListener('message', event => {
    console.log(event.data);

    getJSON(event.data);

    
}, false)

addEventListener('message', event => {
    console.log(`I'm curious and I'm listening too`);
    postMessage(`I'm curious and I'm listening too`);
}, false)

addEventListener('error', event => {
    console.log(event.message);
}, false)



// third iteration: Using the Channel Messaging API

// addEventListener('message', event => {
//     console.log('A new message arrived!');
//     console.log(event.data);
//     // postMessage('hey');
//     const data = { someData: 'hey' };

//     event.ports[0].postMessage(data);
// }, false)

// addEventListener('message', event => {
//     console.log(`I'm curious and I'm listening too`);
//     postMessage(`I'm curious and I'm listening too`);
// }, false)

// addEventListener('error', event => {
//     console.log(event.message);
// }, false)