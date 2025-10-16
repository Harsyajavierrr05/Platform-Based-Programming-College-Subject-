var num1 = 1;
var num2 = 40;
var total = num1 + num2;
console.log(total);

if (total>= 90){
    console.log("A")
} 

if(total>= 56){
    console.log("B")
}

else {
    console.log("B-")
}

var day = "Monday";
switch(day){
    case "Monday": console.log("Start of the Week"); break;
    case "Friday": console.log("Your Rest Day fella"); break;
    default: console.log("Cry harder");
}

for (let i= 0; i < 8; i++){(console.log); }


function greetings(name){
    return "Buongiorno," + name + "!";
}

console.log(greetings("Sonetto"))