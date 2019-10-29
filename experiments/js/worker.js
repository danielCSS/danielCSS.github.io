
onmessage = event => {
    console.log(event.data);
    postMessage('hey');
}

onerror = event => {
    console.error(event.message);
}