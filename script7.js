//anonymous function

var rotate=function(arr,l){
    var rot=l%arr.length;
    //var arr1=arr.split(" ");
    //for(i in arr1)
    arr=arr.slice(rot)+arr.slice(0,rot);
    return arr;
 };
 var arr=[1 ,2, 3, 4 ,5];
 var l=3;
 var result=rotate(arr,l);
 console.log(result);
 
 //IIFE
 
 (function(arr,l){
     var rot=l%arr.length;
    //var arr1=arr.split(" ");
    //for(i in arr1)
    arr=arr.slice(rot)+arr.slice(0,rot);
    console.log(arr);
 })([1,2,3,4,5],3)
 