let myDate=new Date()
// console.log(myDate);
// console.log(myDate.toJSON());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toString());
// let myNewDate=new Date(2025-0-14)
// console.log(myNewDate);

let myTimeStamp=Date.now();
console.log(Math.floor(myTimeStamp/1000));
if (myDate==myTimeStamp) {
    console.log("pass");
    
}
else{
    console.log("dil mange more");
    
}


