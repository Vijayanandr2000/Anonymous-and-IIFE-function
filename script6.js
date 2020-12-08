//anonymous function

var unique=function(arr){
    var c={};
    for(i in arr)
    {
        if(c[arr[i]]==undefined)
        c[arr[i]]=1;
        else
        c[arr[i]]++;
    }
    var k=Object.keys(c);
    var v=Object.values(c);
    var d=[];
    for(i in v)
    {
        if(v[i]==1)
        d.push(k[i]);
    }
    return d
 }
 var arr=[1,2,3,4,4,5,3,6,7]
 //var arr1=[5,6,7,8]
 var result=unique(arr);
 console.log(result.join(" "));
 
 //IIFE
 
 (function(arr){
     var c={};
    for(i in arr)
    {
        if(c[arr[i]]==undefined)
        c[arr[i]]=1;
        else
        c[arr[i]]++;
    }
    var k=Object.keys(c);
    var v=Object.values(c);
    var d=[];
    for(i in v)
    {
        if(v[i]==1)
        d.push(k[i]);
    }
    console.log(d.join(" "));
 })([1,2,3,4,4,5,3,6,7])
 