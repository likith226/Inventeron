// Promise with .then()
function promiseExample() {
    console.log("--- Promise .then() Example ---");
    console.log("1. Start");
    
    let myPromise = new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve("Promise resolved");
        }, 2000);
    });
    
    myPromise.then(function(value) {
        console.log("3. " + value);
    });
    
    console.log("2. End (this runs before promise resolves)");
}

// Async/Await Example
async function asyncAwaitExample() {
    console.log("--- Async/Await Example ---");
    console.log("1. Start");
    
    function delay() {
        return new Promise(function(resolve) {
            setTimeout(function() {
                resolve("Await completed");
            }, 2000);
        });
    }
    
    let result = await delay();
    console.log("2. " + result);
    console.log("3. End (this waits for await)");
}
