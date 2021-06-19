// var company = new Object();
// company.name = "Facbook";
// company.ceo = new Object();
// company.ceo.firstName = "Mark";
// company.ceo.favColor = "blue";

// console.log(company);
// console.log("Company CEO name is: " + company.ceo.firstName);

// console.log(company["name"]);
// //We can set new name/value pairs using this notation as well:
// company["stock price of company"] = 110;


/*
Object literals:
*/

var facebook = {
    name: "Facebook",
    ceo: {
        firstName: "Mark",
        favColor: "blue"
    },
    "stock of company": 110
};
console.log(facebook);
console.log(facebook.ceo.firstName);


function multiply(x, y){
    return x * y;
}
multiply.version = "v.1.0.0";
console.log(multiply);

function makeMultiplier(multiplier){
    var  myFunc = function(x){
        return multiplier * x;
    };
    return myFunc;
}
//returns a function i.e. myFunc.
var multiplyBy3 = makeMultiplier(3);
// passes 10 to multiplyBy3, which gives result 3 * 10
console.log(multiplyBy3(10));

/* Pass by value vs pass by reference
1) Pass by Value: Given b=a, passing/copying by value means changing the copied value in b does  not affect the value stored in a and vice versa
2) Pass be reference: Given b=a, passing/copying by reference measn changign copied value in b does affect the value stored in a and vice versa 
PRIMITVES  ARE COPIED BY VALUE, OBJECTS ARE PASSED BY REFERENCE*/