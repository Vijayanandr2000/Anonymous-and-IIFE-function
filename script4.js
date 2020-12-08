//anonymous function

var palindrome=function(arr){
    var d=[];
    for(i=0;i<arr.length;i++)
    {
        var a=String(arr[i]).split("").reverse().join("")
        if(arr[i]==a)
        d.push(a);
    }
    return d;
 }
 var arr=[1,2,3,4,5,7,6,9,13,131,23,44]
 var result=palindrome(arr);
 console.log(result.join(" "));
 
 //IIFE
 
 (function(arr){
      var d=[];
    for(i=0;i<arr.length;i++)
    {
        var a=String(arr[i]).split("").reverse().join("")
        if(arr[i]==a)
        d.push(a);
    }
    console.log(d.join(" "));
 })([1,2,3,4,5,7,6,9,13,131,23,44])
 