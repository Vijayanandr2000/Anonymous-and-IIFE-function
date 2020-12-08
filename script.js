//anonymous function

var odd=function(arr){
    var d=[];
     for(i in arr)
     {
         if(arr[i]%2!==0)
         d.push(arr[i]);
     }
     return d;
 }
 var arr=[1,2,3,4,5,7]
 var result=odd(arr);
 console.log(result);

//IIFE

(function(arr){
    var d=[];
    for(i in arr)
    {
        if(arr[i]%2!==0)
        d.push(arr[i]);
    }
    console.log(d);
})([1,2,3,4,5,7])