//strings operations
var data="heyy everyone Hope you are doing gud";
console.log("data:",data);
//lowercase
console.log("lower case:",data.toLowerCase()); 
//uppercase
console.log("Upper case:",data.toUpperCase());
//slice
console.log("slice:",data.slice(1,4));//(index,index-1)&& index always starts from 0
//length
console.log("Length:",data.length);
//replace
console.log("replace:",data.replace("heyy","hi"));
//includes
console.log(data.includes("you"));
//string->int
var var1="143";
console.log(var1);
console.log(parseInt(var1));

//int->string
var var2=7890;
console.log(var2);
console.log(var2.toString());
console.log(var2.toLocalstring());

//split operator
var demo="good morning";
console.log(demo.split(" "));

//objects
var obj1={
    name:"Harshada",
    age:20
};
console.log(obj1);
