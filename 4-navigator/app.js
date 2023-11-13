let addressLat = 20;  //x
let addressLong = 30;  //y
let positionLat = 10; //x
let positionLong = 15; //y

let a = addressLat - positionLat;
let b = addressLong - positionLong;


let distance = Math.sqrt( a*a + b*b );
console.log(distance);