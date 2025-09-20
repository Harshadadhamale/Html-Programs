//3.Arrow Function
//var sum=(a,b)=> {
//    console.log(a+b);
//}
//sum(4,5);

//no need of {} for a single line of function
//var sum=(a,b) => console.log(a+b);
//sum(5,5);

//Array Methodology/Methods
var array=[1,2,3,4,5];
console.log("Current array =>",array);
//1.map
var newArray=array.map((item) => item*2);
console.log("new array =>  with map => ",newArray);

//2.Filter
//const newArray2=array.filter((data)=> data<=3);
const newArray2=array.filter((data)=>{
if(data<=3)
    return data;
});
console.log("Filter=>",newArray2)

//3.find
var newArray3=array.find((data)=>data<=3);
console.log("Find =>",newArray3)

//4.Reduce
var totalsum=array.reduce((data,index)=>{
    return data+index;
})
console.log(totalsum);