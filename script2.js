//anonymous function

var titlecap=function(arr){
    var arr1=String(arr).split(" ");
    //console.log(a.length)
    for(var i=0;i<arr1.length;i++){
        arr1[i]=arr1[i][parseInt(0)].toUpperCase()+arr1[i].slice(1);
    }
    return arr1.join(" ");
};
var arr="i am not a Good coder";
var ans=titlecap(arr);
console.log(ans);

//IIFE
(function(arr){
    var arr1=String(arr).split(" ");
    //console.log(a.length)
    for(var i=0;i<arr1.length;i++){
        arr1[i]=arr1[i][parseInt(0)].toUpperCase()+arr1[i].slice(1);
    }
    console.log(arr1.join(" "));
})("i am not a Good coder")