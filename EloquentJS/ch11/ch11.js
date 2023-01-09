let fifteen = Promise.resolve(15);
fifteen.then(value => console.log(value));

function storage(nest, name) {
    return new Promise(resolve => {
        nest.readStorage(name, result => resolve(result));
    });
}

new Promise((_,reject) => reject(new Error("Fail")))
    .then(value => console.log("Handler 1"))
    .catch(reason => {
        console.log("Caught Failure "+ reason);
        return "nothing";
    })
    .then(value => console.log("Handler 2 ", value));