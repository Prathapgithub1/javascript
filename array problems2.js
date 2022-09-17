function print(a=10){
    console.log(a)
}
print(12)
//another function 
// let p=1;
// function no(p=p+1){
//     console.log(p)
    
// }
// no()

//split method 
let str=" prathap kunarapu"
var arr=str.split(" ")
console.log(arr)
var arr=[1,2,3,4,55]
for(let prathpa22 of arr){
    console.log(prathpa22)
}

//all are print in same line ==>  
var arr1=[1,2,3,4,55]
str=""
for(let prathpa2 of arr){
    str+=prathpa2+" "
}
console.log(str)

//object traversing 
let obj={
    Name:"JavaScript",
    usage:"web-development",
    type:"scripting language"

}
for(let key in obj){
    console.log(`${obj}:${obj[key]}`)
}