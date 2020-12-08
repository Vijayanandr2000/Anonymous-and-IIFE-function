//anonymous function

var odd=function(arr){
    var d=arr.reduce(function(av,item){
        return av+item;
    },0)
    return d;
 }
 var arr=[1,2,3,4,5,7]
 var result=odd(arr);
 console.log(result);

//IIFE

(function(arr){
    var d=arr.reduce(function(av,item){
        return av+item;
    },0)
    console.log(d);
})([1,2,3,4,5,7])