//how to create object 
var obj={ }//creation of obj
console.log(typeof(obj))//find the empty obj
console.log(obj)//empty object 

var obj1={
    Name:"prathap",
    roleNO:12,
    age:22,
    number:8008168588
}
console.log(Object.keys(obj1));//accessing the all keys
console.log(Object.values(obj1))//accessing the all values 
//accessing the single single values 
//here we are using two methods they are .notation and [] notation
console.log(obj1.Name)
console.log(obj1.roleNo)
console.log(obj1.age)
console.log(obj1.number)
//[] notation 
console.log(obj1['Name'])
console.log(obj1['roleNO'])
console.log(obj1['age'])
console.log(obj1['number'])

//how to convert array into objects 
// obj1 taken from above 
var arr=[1,2,3,"prathap",obj1]

let map={}
for(let i=0;i<arr.length;i++){
    map[i]=arr[i]
}
console.log(map)

console.log(arr[3])
var arr1=["prathap",[1,23,4],["i hate you"],8,9]
arr1[1]=["i have betu"]
console.log(arr1)
arr1[1][0]=["chotu"]
console.log(arr1)

//basic function 
function add(a,b,c){
    return a+b*c;
}
console.log(add(2,3,c=5))

//arrow function or first order function 
const add1=(j,g) => j+g
console.log(add1(2,3))
//convert array into object 
var arr=[['a',1],['b',2]]
    let map1={}
    for(let i=0;i<arr.length;i++){
        map1[arr[i][0]]=arr[i][1]
    }
    console.log(map1)

    //convert array tostring (like premitetive data to non premitetive data type)

    var arr1 =["prathap",1,2,3,43,4,"raju"]
    console.log(arr1.toString())
    //to convert the array like [1,2,3,4l,4,54,5,,6]
    var arr2=['prathap',[1,2,34],[11,2,2,3]]
    var arr3=arr2.toString()
    console.log(arr3.split(''))

  

