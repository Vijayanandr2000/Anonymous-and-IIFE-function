//anonymous function

var prime=function(arr){
    var d=[];
    for(i=0;i<arr.length;i++)
    {
        if(arr[i]>2)
        {
            var f=0;
            for(j=2;j<arr[i];j++)
            {
                if(arr[i]%j==0)
                {
                    f=1;
                    break;
                }
            }
            if(f!==1)
            d.push(arr[i]);
        }
        
    }
    return d;
 }
 var arr=[1,2,3,4,5,7,6,9,13]
 var result=prime(arr);
 console.log(result.join(" "));
 
 //IIFE
 
(function(arr){
    var d=[];
    for(i=0;i<arr.length;i++)
    {
        if(arr[i]>2)
        {
            var f=0;
            for(j=2;j<arr[i];j++)
            {
                if(arr[i]%j==0)
                {
                    f=1;
                    break;
                }
            }
            if(f!==1)
            d.push(arr[i]);
        }
        
    }
    console.log(d.join(" "));
})([1,2,3,4,5,7,6,9,13])