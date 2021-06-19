var x = "Hello World";

var message = "in global";
console.log("global: message = " + message);

var a = function(){
    var message = "_inside a_";
    console.log("a: message = " + message);
    function c(){
        console.log("c: message = " + message);
    }
    c();
}
//Outer reference is global
function b(){
    console.log("b: message = " + message);
}

var x = "4";
var y = 4
if(x == y){
    console.log("x is equal to y");
}
if(x === y){
    console.log("x is strictly equal to y");

}else{
    console.log("x is not strictly equal to y");
}

if(false || null || undefined || "" || 0 || NaN){
    console.log("this line won't execute");
}else{
    console.log("All false");

if(true && "hello" && 1 && -1 && "false"){
    console.log("All true");
}

}
function orderChickenWith(sideDish){
    // Handling default values, if sideDish is false i.e. undefined then "whatever!" is the value
    sideDish = sideDish || "whatever!";
    console.log("Chicken with " + sideDish);
}
orderChickenWith();
orderChickenWith("noodles");
/* In JS and object is a collection of name/value pairs 
   Primitve type represents a single, immutable value:
   Symbol,
   Undefined, 
   Null, 
   Number, 
   String,
   Boolean
   _________
   Object
   */


a();
b();