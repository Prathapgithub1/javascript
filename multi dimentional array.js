//spreading method 
let array=[1,2,3,34,[1,2]]
let obj={
    name:"prathap",
    ne:[1,23,...array]
}
console.log(obj)
let  array1=[1,2,3,34,[12,2,3,3,43,4],[2,544545,5]]//to remove those brqckets in array 
let array2=array1.toString()
console.log(array2)
let array3=array1.length// in length  method we havenot used () 
console.log(array3)
//sum of array 
let array4=[1,2,3,4,5,6]
let sum=0;
for(let i=0;i<array4.length;i++){
    sum+=array4[i]
}
console.log(sum)
//array is a datatype to store the multiple data items in singlevariable is called array 

// arrays are nothing but an object only with all continous numeric  keys ........................

var obj2={
    prathap:12,
    Name:"rana"
}
console.log(obj2.prathap)//dot notation
console.log(obj2['prathap'])//bracket notation
var array220=[["name","prathap"],["rollno","19uc5a0216"]] //create basic array 
var obj220={}
for(let i=0;i<array220.length;i++){
    obj220[array220[0]]=array220[1]
}
console.log(obj220)

let object={}//this is a way to create a object like this shown in below --->{ name: 'prathap' } o/p

object["name"]="prathap"
console.log(object)
