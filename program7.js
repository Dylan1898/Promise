function attachTitle(thing){
return 'DR. ' + thing 
}
var promise = new Promise(function (fulfill, reject) {
      fulfill('MANHATTAN');
    });
promise.then(attachTitle)
.then(console.log)