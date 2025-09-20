//console.log("helloo harshuuu");

//js Operator
//var num1=10;
//var num2=2;
//var sum=num1+num2;
//console.log(sum);

//short hand operators
//a=a+b;
//a+=b;

//var a =2;
//var b=3;
//a=a+b;
//a+=b;
//console.log(a);

//increment and decrement
//var num=10;
//console.log(num);
//post increment
//console.log(num ++);
//console.log(num);


//var num=10;
//console.log(num);
//pre increment
//console.log(++num);
//console.log(num);


var num=10;
console.log(num);
//post decrement
console.log(num--);
console.log(num);


var num=10;
console.log(num);
//pre decrement
console.log(--num);
console.log(num);


//functions=>group of instruction to perform certain tasks
var obj1={
    name:"TVS",
    bikename:function()
    {
        console.log("hello this is bike name");
    }
};
console.log(obj1.name);
obj1.bikename();

//1.named function
function sum(a,b){
   console.log(a+b);
}
//call a function
sum(2,4)

//2.Anonymous function
var sum=function(a,b){
    console.log(a+b);
}
sum(5,5);

//3.Arrow function
var sum