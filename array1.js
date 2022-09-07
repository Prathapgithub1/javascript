//Array : array is nothing but it is non premititve data type to store the multiple items in singular variable is called array in javascript  and it is mutable is nothing but it can changeable 
// two ways to create a empty array 
//1)
var arr=[ ];
console.log(arr)
//2)
var arr1= new Array(8);
console.log(arr1)
arr[0]=1;
arr[1]=2;
console.log(arr)
console.log(arr[0])
console.log(arr[1])
//parten
let star="* ";
for(let i=0;i<=5;i++){
    console.log(star.repeat(i))
}
//print like below
// * 
// * * 
// * * * 
// * * * * 
// * * * * *
function rev(str){//function and function name and to pass the parameters in between round brackets
    ans=""//temparary variable
    for(let i=str.length-1;i>=0;i--){
        ans+=str.charAt(i)//
    }
    return ans
}
console.log(rev("hello"))

function ram(str1){
    pa=""
    for(let i=str1.length-1;i>=0;i--){
        pa+=str1.charAt(i)
    }
    return pa
}
console.log(ram("prathap"))
//palindrome or not check 
function palindrome (str3){
    em="";
    for(let i=str3.length-1;i>=0;i--){
        em+=str3.charAt(i)
    }
    if(str3===em){
        return true
    }
    else{
        return false
    
    }
}
console.log(palindrome("dad"))