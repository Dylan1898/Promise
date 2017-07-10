var promise = new Promise(function (resolve, reject) {
      setTimeout(function(){
resolve('FULFILLED!')
      },300) 
    });
 var prom = function(){
promise
.then(function(fulfilled){
    console.log(fulfilled)
})

 }
 prom()