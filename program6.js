first()
.then(function(thing){
    return second(thing)
})
.then(function(thing){
    console.log(thing)
})