var arr=["prathap","kunarapu","hyderabadh"]
console.log(arr.toString())
var arr1=arr.pop();
console.log(arr1)
console.log(arr)
var arr2=arr.push("rna")//push method
console.log(arr)

console.log(arr.length)
var arr3=["ayyo im a fellow",arr]//concatation
console.log(arr3)
var arr4=[1,2,3,43,4,"prathap"]
var arr5=arr4.join("% ")///join mehtod to separate the all elements in between array like below 
console.log(arr5)
var array1=["prathap","kunarqapu",3,4]
console.log(array1.join("& "))
var object1={}///empty object 
object1["phone number"]=8008168588//object with key & value 
console.log(object1)
var array2=[["name","prathap"],[1,2,3],["IdNo",123456789]];
var obj1={}
for(let i=0;i<array2.length;i++){
    obj1[array2[i][0]]=array2[i][1]
}
console.log(obj1)
//functions
function name(a,b,c){
    //statement 
    return a*b+c;
}
console.log(name(1,2,5))
//array sum 
var array3=[1,2,3,4,5,6,7,[8,9,10],[11,22,33,44]]
var obj2={}
for(let i=0;i<array3.length;i++){
    let sum=0
    for(let j=0;j<array3[i].length;j++){
        sum+=array3[i][j]
     
    }
    obj2[i]=sum
}
console.log(obj2)
//sum of the array with functions 
function sum1(array4){
    let sum2=0
    for(let i=0;i<array4.length;i++){
        sum2+=array4[i]
    }
    return sum2
}
console.log(sum1([1,23,1]))

//to check the string is palindrome or not 
// let string ="dad";
// for(let i=0;i<string.length;i--){
//     if(string === string[i]){
//         console.log("it is a palindrome")
//     }
//     else{
//         console.log("it isnot a palindrome")
//     }

// }
//concatation of string 
var string1="prathap"
var string2="kunarapu"
console.log(string1+" "+string2)//one type 
console.log(string1.concat(' ').concat(string2))

//write a function two concatnation 
function concatation(s1,s2){
    return s1+" "+s2

}
console.log(concatation("raju","mudasthu"))

//string replace method 
var string3="im prathap kunarapu i have done my graduation recently"
console.log(string3.replace("prathap","rana"))

//sub string method in strings 
console.log(string3.substring(3,11))// i can access the prathap from string3 by using substring method (staring index, ending index)
