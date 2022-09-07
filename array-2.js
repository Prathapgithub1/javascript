//how to print an array like ['*',......................no.of]
// let arr=new Array(10).fill('*')
// console.log(arr)

//another method also there 
let arr=[]
function v(n){
    for(let i=0;i<n;i++){
        arr[i]="*"
    }
   
} 
v(10)
console.log(arr)
//fill method
let arr1=new Array(10).fill([1,2,3])
console.log(arr1)
//concat method
let arr2=[1,2,3,4];
let arr3=[5,6,78,]
console.log(arr2.concat(arr3))

//method indexOf
console.log(arr2.indexOf(2))
//method lastIndextOf
console.log(arr2.lastIndexOf(2))
//check array or not 
//method ==> isArray --if in case it is array then it shows true other wise false
console.log(Array.isArray(arr2))

//method array is convert into string ==>toSting method
console.log(arr2.toString())
