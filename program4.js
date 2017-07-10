var promise = new Promise(function (resolve, reject) {
    resolve('PROMISE VALUE')
    
},)


// function onRejected(error) {

//     console.log(error.message)
// }
promise.then(console.log)    
console.log('MAIN PROGRAM')