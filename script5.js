//anonymous function

var median=function(arr,arr1){
    var a=arr.concat(arr1);
    var s=a.reduce(function(av,item){
        return av+item;
    },0)
    var m=s/a.length;
    return Math.round(m);
 }
 var arr=[1,2,3,4]
 var arr1=[5,6,7,8]
 var result=median(arr,arr1);
 console.log(result);
 
 //IIFE
 
 (function(arr,arr1){
     var a=arr.concat(arr1);
    var s=a.reduce(function(av,item){
        return av+item;
    },0)
    var m=s/a.length;
    console.log(Math.round(m));
 })([1,2,3,4],[5,6,7,8])
 