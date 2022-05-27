let name_1 = "Harry";
let name_2 = "Subham";
let name_3 = "Rohan";
let name_4 = "Ajey", Returned_Value;

let greetings_1 = "Good Morning Bro!!!";

Returned_Value = sum(1,2,3);
console.log(`The value ${Returned_Value} is the Returned value of Fumction sum & d!!!`);

greet(name_1,greetings_1);
greet(name_2,greetings_1);
greet(name_3,greetings_1);
greet(name_4,greetings_1);

function greet(names,greetings) {
    console.log(names+" "+greetings);
}

function sum(a,b,c) {
    d = a+b+c;
    return d;
}