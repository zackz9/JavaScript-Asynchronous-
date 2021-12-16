// Getting data from a database 

/*
One statement at a time from top to bottom in order :

Stat1 => Stat2 => Stat3 ....
To skip the downfall of synchronous code => Asynch

*/ 

console.log(1);
console.log(2);

setTimeout(() => {
    console.log('callback function fired');   
}, 20);

console.log(3);
console.log(4);
