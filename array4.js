//indexOf and LastindextOf
var array =[1,2,3,4,5,3]//simple array 
console.log(array.indexOf(2))//indedex method
console.log(array.lastIndexOf(3))//last indexmethod
var arr=array.pop()//pop method    
console.log(arr)//pop
console.log(array)//pop the array 
var arr1=array.push(23)// push the data into array 
console.log(arr1)  //shows the where will stored like index 
console.log(array)//it shows the overal array 
var arr2=array.push("prathap")
console.log(array)

//splice -- to modify the array like delete and insert  the element lik index, value 
//console.log(array.splice(1,4))
var arr3=array.splice(1,4)
console.log(array)

var array2=['prathap',[1,2,3,4],56,7]// to delete the nested aray like
var arr4=array2[1].splice(1,2)
console.log(array2)
var ar=[1,2,34,["prathpa",9,0,9]]
var arrr=ar[3].splice(1,0,"raju","uid")// we can insert the elements in array like this we can use value only 0
console.log(ar)

var array5=[1,2,3,4,5]
var array6=array5.splice(0,5,"hello world iam prathpa",420)
console.log(array5)
console.log(array5.splice(-1,3))

//simple array 
var simplearray=[1,2,345,6,'prathap kunarapu']
var simplear=simplearray.splice(-3,2)
console.log(simplearray)
var arey=[1,2,3,45,9]
var ca=arey.splice(-3,1)
console.log(arey)

//spread operator --> it is nothing but it is spreading the data elements --) Syntax: (...variable names)

var arey1=[1,23,"prathap","hello shiva teja",...arey]

console.log(arey1)

//convert array into object 
var array100=[1,2,3,4,3,56,7,8,9]
var obj={}
for(let j22=0;j22<array100.length;j22++){

    obj[j22]=  array100[j22]
}
console.log(obj)

//primitive data type and non primitive data type 
var array1001=array100.toString()
console.log(array1001)


