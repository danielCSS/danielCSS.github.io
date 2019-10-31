

// first iteration: Communication with a Web Worker

// onmessage = event => {
//     console.log(event.data);
//     postMessage('hey');
// }

// onerror = event => {
//     console.error(event.message);
// }


// second iteration: Multiple event listeners
// <ul class="list"></ul>

function buildJson(json) {
    let list = '<ul class="list">';
    for(var i = 0; i < json.products.length; i++) {
        list += '<li class="item"><strong>' + json.products[i].Name + '</span></strong>';
        list += '<span class="description"> can be found in ' + json.products[i].Location + '.</span>';
        list += '<strong>Cost: £' + json.products[i].Price + '</strong></li>';
    }
    list += '</ul>';
    postMessage(`<p>hey, here's parsed json I just fetched:</p> ${list}`);
}

// async/await version
async function getJSON2(url) {
    const response = await fetch(url);
    const myJson = await response.json();

    postMessage(`hey, here's some json I just fetched: ${JSON.stringify(myJson)}`);
}

function getJSON(url) {
    fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("HTTP error, status = " + response.status);
      }
      return response;
    })
    .then(response => response.json())
    .then(data => buildJson(data))
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