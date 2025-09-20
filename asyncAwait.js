//promises

var mypromise=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve("success");
    },9000);

    setTimeout(function(){
        reject("Error occured");
    },7000)
});

mypromise
.then((data)=>{console.log(data)})
.catch((error)=>{console.log(error)});

console.log("This is at the last"); 